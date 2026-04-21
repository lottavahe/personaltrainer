import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { fetchTrainings } from "../api";
import type { Training } from "../types";

function TrainingsList() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const columns: GridColDef[] = [
    {
      field: "date",
      headerName: "Date",
      width: 180,
      valueFormatter: (value) => dayjs(value).format("DD.MM.YYYY HH:mm"),
    },
    { field: "duration", headerName: "Duration", width: 120 },
    { field: "activity", headerName: "Activity", width: 180 },
    {
      field: "customer",
      headerName: "Customer",
      width: 200,
      valueGetter: (_value, row) =>
        `${row.customer.firstname} ${row.customer.lastname}`,
    },
  ];
  const getTrainings = () => {
    fetchTrainings()
      .then((data) => setTrainings(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTrainings();
  }, []);

  return (
    <div style={{ width: "95%", height: 500, margin: "auto" }}>
      <DataGrid
        rows={trainings}
        columns={columns}
        getRowId={(row) => row.id}
        autoPageSize
        disableRowSelectionOnClick
        showToolbar
      />
    </div>
  );
}

export default TrainingsList;
