import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { fetchCustomers, saveCustomer } from "../api";
import type { Customer, CustomerInput } from "../types";
import AddCustomer from "./AddCustomer";
import { Button } from "@mui/material";

function CustomersList() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [open, setOpen] = useState(false);
  const columns: GridColDef[] = [
    { field: "firstname", headerName: "First name", width: 140 },
    { field: "lastname", headerName: "Last name", width: 140 },
    { field: "streetaddress", headerName: "Address", width: 180 },
    { field: "postcode", headerName: "Postcode", width: 110 },
    { field: "city", headerName: "City", width: 140 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "phone", headerName: "Phone", width: 140 },
    {
      field: "_links.self.href",
      headerName: "Action",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams) => (
        <Button
          color="error"
          size="small"
          onClick={() => handleDelete(params.row._links.self.href)}
        >
          DELETE
        </Button>
      ),
    },
  ];

  const getCustomers = () => {
    fetchCustomers()
      .then((data) => setCustomers(data))
      .catch((error) => console.error(error));
  };
  const handleAddCustomer = (customer: CustomerInput) => {
    saveCustomer(customer)
      .then(() => getCustomers())
      .catch((error) => console.error(error));
  };
  const handleDelete = (url: string) => {
    if (window.confirm("Are you sure?")) {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) throw new Error("Error when deleting customer");
          return response.text();
        })
        .then(() => {
          getCustomers();
          setOpen(true);
        })
        .catch((error) => console.error(error));
    }
  };
  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div style={{ width: "95%", height: 500, margin: "auto" }}>
      <AddCustomer handleAdd={handleAddCustomer} />
      <DataGrid
        rows={customers}
        columns={columns}
        getRowId={(row) => row._links.self.href}
        autoPageSize
        disableRowSelectionOnClick
        showToolbar
      />
    </div>
  );
}

export default CustomersList;
