import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { fetchCustomers, saveCustomer, updateCustomer } from "../api";
import type { Customer, CustomerInput } from "../types";
import AddCustomer from "./AddCustomer";
import { Button } from "@mui/material";
import EditCustomer from "./EditCustomer";

function CustomersList() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [open, setOpen] = useState(false);
  const columns: GridColDef[] = [
    { field: "firstname", headerName: "First name", width: 130 },
    { field: "lastname", headerName: "Last name", width: 150 },
    { field: "streetaddress", headerName: "Address", width: 150 },
    { field: "postcode", headerName: "Postcode", width: 90 },
    { field: "city", headerName: "City", width: 130 },
    { field: "email", headerName: "Email", width: 170 },
    { field: "phone", headerName: "Phone", width: 130 },
    {
      field: "_links.self.href",
      headerName: "Actions",
      sortable: false,
      filterable: false,
      width: 150,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <Button
            color="error"
            size="small"
            onClick={() => handleDelete(params.row._links.self.href)}
          >
            Delete
          </Button>
          <EditCustomer customer={params.row} handleUpdate={handleUpdate} />
        </>
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
  const handleUpdate = (url: string, updatedCustomer: CustomerInput) => {
    updateCustomer(url, updatedCustomer)
      .then(() => getCustomers())
      .catch((error) => console.error(error));
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
