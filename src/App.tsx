import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ mr: 2 }}>
              PERSONAL TRAINING{" "}
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Calendar
            </Button>
            <Button color="inherit" component={Link} to="/customers">
              Customers
            </Button>
            <Button color="inherit" component={Link} to="/trainings">
              Trainings
            </Button>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
