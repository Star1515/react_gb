import React from 'react';
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';


export const ChatList = () => {

    const drawer = (        
          <List>
            {['чат 1', 'Чат 2', 'Чат 3', 'Чат 4', 'Чат 5'].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
    )
    
    return (
      <div>
        <Drawer
  variant="permanent"
  ModalProps={{
    keepMounted: true,
  }}
  open
>
{drawer}
        </Drawer>
      </div>
    );
  };



