import '../VerificationRequests/VerificationRequests.css'
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
function NavBar() {
  return (
    <nav>
      <Button
        sx={{
          margin: "10px",
          borderRadius: 0,
          borderBottom: 2
        }}
        // color="primary"
        variant="text"
        component={Link}
        to="/VerificationRequests"
      >
        Solicitudes de verificación
      </Button>
      <Button
        sx={{ borderRadius: 0, borderBottom: 2 }}
        // color="primary"
        variant="text"
        component={Link}
        to="/DepositRequest"
      >
        Solicitudes de deposito
      </Button>
    </nav>
  );
}

export default NavBar;