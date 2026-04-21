import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import type { CustomerInput } from "../types";

type CustomerFormType = {
  customer: CustomerInput;
  setCustomer: React.Dispatch<React.SetStateAction<CustomerInput>>;
};

export default function CustomerForm({
  customer,
  setCustomer,
}: CustomerFormType) {
  return (
    <DialogContent>
      <TextField
        required
        margin="dense"
        label="First name"
        value={customer.firstname}
        onChange={(e) => setCustomer({ ...customer, firstname: e.target.value })}
        fullWidth
        variant="standard"
      />
      <TextField
        required
        margin="dense"
        label="Lastname"
        value={customer.lastname}
        onChange={(e) => setCustomer({ ...customer, lastname: e.target.value })}
        fullWidth
        variant="standard"
      />
      <TextField
        required
        margin="dense"
        label="Street address"
        value={customer.streetaddress}
        onChange={(e) =>
          setCustomer({ ...customer, streetaddress: e.target.value })
        }
        fullWidth
        variant="standard"
      />
      <TextField
        required
        margin="dense"
        label="Postcode"
        value={customer.postcode}
        onChange={(e) => setCustomer({ ...customer, postcode: e.target.value })}
        fullWidth
        variant="standard"
      />
      <TextField
        required
        margin="dense"
        label="City"
        value={customer.city}
        onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
        fullWidth
        variant="standard"
      />
      <TextField
        required
        margin="dense"
        label="Email"
        value={customer.email}
        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        fullWidth
        variant="standard"
      />
      <TextField
        required
        margin="dense"
        label="Phone"
        value={customer.phone}
        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
        fullWidth
        variant="standard"
      />
    </DialogContent>
  );
}