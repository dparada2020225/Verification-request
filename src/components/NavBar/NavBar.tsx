import '../VerificationRequests/VerificationRequests.css'
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
function NavBar() {
  return (
    <nav>
      <Button
        sx={{  margin: "5px", borderRadius: 0,  borderBottom: "4px solid #03b1bb", color: "#03b1bb"}}
        variant="text"
        component={Link}
        to="/VerificationRequests"
      >
        Solicitudes de verificación
      </Button>
      <Button
        sx={{  margin: "5px", borderRadius: 0,  borderBottom: "4px solid #03b1bb", color: "#03b1bb"}}
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