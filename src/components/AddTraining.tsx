import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import type { Customer, TrainingInput } from "../types";
import TrainingForm from "./TrainingForm";

type AddTrainingProps = {
  handleAdd: (training: TrainingInput) => void;
  customers: Customer[];
};

export default function AddTraining(props: AddTrainingProps) {
  const [open, setOpen] = useState(false);
  const [training, setTraining] = useState<TrainingInput>({
    date: "",
    duration: 0,
    activity: "",
    customer: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    props.handleAdd(training);
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Training
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Training</DialogTitle>
        <TrainingForm
          training={training}
          setTraining={setTraining}
          customers={props.customers}
        />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
