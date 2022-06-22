import '../VerificationRequests/VerificationRequests.css'
import { Box, Button, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { blueGrey } from '@mui/material/colors';

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
        sx={{ width: 190, height: 40, marginLeft: 1.45, border: 3, background:"#c5e2f6"}}
      >
        Cerrar Sesión
      </Button>
    </Box>
  );
}

export default HeaderNav;
