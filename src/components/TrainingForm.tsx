import DialogContent from "@mui/material/DialogContent";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import type { Customer, TrainingInput } from "../types";

type TrainingFormType = {
  training: TrainingInput;
  setTraining: React.Dispatch<React.SetStateAction<TrainingInput>>;
  customers: Customer[];
};

export default function TrainingForm({
  training,
  setTraining,
  customers,
}: TrainingFormType) {
  return (
    <DialogContent>
      <TextField
        select
        required
        margin="dense"
        label="Customer"
        value={training.customer}
        onChange={(e) => setTraining({ ...training, customer: e.target.value })}
        fullWidth
        variant="standard"
      >
        {customers.map((customer) => (
          <MenuItem
            key={customer._links.self.href}
            value={customer._links.self.href}
          >
            {customer.firstname} {customer.lastname}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        required
        margin="dense"
        label="Date"
        type="datetime-local"
        value={training.date}
        onChange={(e) => setTraining({ ...training, date: e.target.value })}
        fullWidth
        variant="standard"
        slotProps={{
          inputLabel: { shrink: true },
        }}
      />

      <TextField
        required
        margin="dense"
        label="Duration"
        type="number"
        value={training.duration}
        onChange={(e) =>
          setTraining({ ...training, duration: Number(e.target.value) })
        }
        fullWidth
        variant="standard"
      />

      <TextField
        required
        margin="dense"
        label="Activity"
        value={training.activity}
        onChange={(e) => setTraining({ ...training, activity: e.target.value })}
        fullWidth
        variant="standard"
      />
    </DialogContent>
  );
}
