import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Avatar,
  Grid
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { User } from "../../interfaces/User";

interface Props {
  users: User[];
}

function VerificationRequests({ users }: Props) {

  users.sort((a, b) => (+(a.date)) - (+(b.date)))



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
                  padding: "5px",
                  border: "2px dashed #96e6b3",
                  background: "#f1fffa"
              }}
          >
              <Table aria-label="simple table" >
                  <TableBody>
                      {users.map((user) => (
                              

                          <TableRow
                              key={user.name}
                              sx={{
                                  padding: "0px",
                                  borderTop: "7px double ",
                                  borderBottom: "7px double ",
                                  borderColor: "#96e6b3",
                              }}
                          >
                              <TableCell align="right" width={"1px"}>
                                  <Avatar alt="avatar" src={user.avatar} />
                              </TableCell>
                              <TableCell align="left">
                              <Link to={'/VerificationDetails'}>
                                  {user.name}
                              </Link>
                              </TableCell>
                              {/* <TableCell align="right"> {user.date}, {user.days} days ago   </TableCell> */}
                              <TableCell align="right">
                                  <Grid container spacing={1}>
                                      <Grid item xs={12}>
                                          {user.date.toDateString()}
                                      </Grid>
                                      <Grid item xs={12}>
                                          {Math.round((new Date().getTime() - Math.abs(user.date.getTime())) / (1000 * 3600 * 24))} days ago
                                      </Grid>
                                  </Grid>
                              </TableCell>
                                 
                                  


                          </TableRow>
                      ))}
                  </TableBody>

              </Table>
          </TableContainer>
      </Box>
  );
}
export default VerificationRequests;
