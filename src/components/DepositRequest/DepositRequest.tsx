import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Avatar,
  TablePagination,
  TableHead,
} from "@mui/material";
import React from "react";
import { User } from "../../interfaces/User";

interface Props {
  users: User[];
}

function DepositRequest({ users }: Props) {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 8,
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: "900px",
          padding: 1,
          border: "2px solid rgb(30, 127, 255)",
          background: "#e1dded"
        }}
      >
        <Table aria-label="simple table" sx={{border: "2px solid gray"}}>
          <TableHead sx={{backgroundColor:"#5993f7"}} >
            <TableRow>
              <TableCell align="center">Avatar</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Monto</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Days</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.name}
                sx={{
                  borderTop: 2,
                  borderBottom: 2,
                  borderColor: "rgb(15, 75, 133)",
                }}
              >
                <TableCell align="center">
                  <Avatar alt="avatar" src={user.avatar} />
                </TableCell>
                <TableCell align="center"> {user.name} </TableCell>
<<<<<<< Updated upstream
                <TableCell align="center"> {user.monto}Q </TableCell>
                <TableCell align="center"> {user.date} </TableCell>
                <TableCell align="center"> {user.days} days </TableCell>
=======
                <TableCell align="center"> Q{user.monto} </TableCell>
                <TableCell align="center"> {user.days} Dias </TableCell>
>>>>>>> Stashed changes
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={25}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </TableContainer>
    </Box>
  );
}
export default DepositRequest;
