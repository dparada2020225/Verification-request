// import Avatar from "@mui/material/Avatar";
// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ImageIcon from '@mui/icons-material/Image';
// import './VerificationRequests.css'
// import { User } from "../../interfaces/User";

// interface Props {
//   users: User[];
// }
// function VerificationRequests({ users }: Props) {
//     return (
//         <List className="List"sx={{ width: '100%', maxWidth: 800, border: "2px solid #22c49b"}}>
//       {users.map((user) => (
//           <><ListItem key={user.name}>
//               <ListItemAvatar>
//                   <Avatar alt="avatar" src={user.avatar}>
//                       <ImageIcon />
//                   </Avatar>
//               </ListItemAvatar>
//               <ListItemText secondary={user.name}/>
//               <ListItemText className="left"secondary={user.date + ', ' + user.days + ' Days'}/>
//           </ListItem></>
//               ))} 
//     </List>
//       );
//     }
// export default VerificationRequests;

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
  import React from "react";
  import { User } from "../../interfaces/User";
  
  interface Props {
    users: User[];
  }
  
  function VerificationRequests({ users }: Props) {
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
                    padding:"0px",
                    borderTop: "7px double ",  
                    borderBottom: "7px double ", 
                    borderColor: "#96e6b3",
                  }}
                >
                  <TableCell align="right" width={"1px"}>
                    <Avatar alt="avatar" src={user.avatar}  />
                  </TableCell>
                  <TableCell align="left"> {user.name} </TableCell>
                  {/* <TableCell align="right"> {user.date}, {user.days} days ago   </TableCell> */}
                  <TableCell align="right">
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                    {user.date}
                    </Grid>
                    <Grid item xs={12}>
                    {user.days} days ago
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
  }//test
  export default VerificationRequests;
  