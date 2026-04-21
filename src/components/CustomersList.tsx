import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { fetchCustomers, saveCustomer } from "../api";
import type { Customer, CustomerInput } from "../types";
import AddCustomer from "./AddCustomer";

function CustomersList() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const columns: GridColDef[] = [
    { field: "firstname", headerName: "First name", width: 140 },
    { field: "lastname", headerName: "Last name", width: 140 },
    { field: "streetaddress", headerName: "Address", width: 180 },
    { field: "postcode", headerName: "Postcode", width: 120 },
    { field: "city", headerName: "City", width: 140 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "phone", headerName: "Phone", width: 160 },
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
