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
      <Typography  variant="h4">Admin Profile</Typography>
      <Button
        variant="outlined"
        endIcon={<LogoutIcon />}
        sx={{ width: 190, height: 40, marginLeft: 1.45, border: 3}}
      >
        Cerrar Sesión
      </Button>
    </Box>
  );
}

export default HeaderNav;
