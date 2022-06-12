import Avatar from "@mui/material/Avatar";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import './VerificationRequests.css'
import { User } from "../../interfaces/User";

interface Props {
  users: User[];
}

function VerificationRequests({ users }: Props) {
    return (
        <List className="List"sx={{ width: '100%', maxWidth: 800, border: "2px solid #22c49b"}}>
      {users.map((user) => (
          <><ListItem key={user.name}>
              <ListItemAvatar>
                  <Avatar alt="avatar" src={user.avatar}>
                      <ImageIcon />
                  </Avatar>
              </ListItemAvatar>
              <ListItemText secondary={user.name}/>
              <ListItemText className="left"secondary={user.date + ', ' + user.days + ' days'}/>
          </ListItem></>
              ))} 
    </List>
      );
    }
export default VerificationRequests;