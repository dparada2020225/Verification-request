import '../VerificationRequests/VerificationRequests.css'
import { Box, Button, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

function HeaderNav() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 1,
        marginLeft: 5
      }}
    >
      <Typography  variant="h4" 
      sx={{color: "#03b1bb"  }}>Admin Profile</Typography>
      <Button
        variant="text"
        endIcon={<LogoutIcon />}
        sx={{ 
          width: 190, height: 40, 
          marginLeft: 1.45, 
          border: 3,
          borderRadius: 2,
          borderBottom: "4px solid #03b1bb", 
          color: "#03b1bb"  }}
      >
        Cerrar Sesión
      </Button>
    </Box>
  );
}

export default HeaderNav;
