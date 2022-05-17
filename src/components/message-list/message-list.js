import React, { useState, useEffect, useRef } from 'react';
import styles from "./message-list.module.css";
import { Input, InputAdornment  } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./message/message";
import styled from "@emotion/styled";
import { format } from 'date-fns'
import { ChatList } from "../chat-list/ChatList";
import { Header } from "../header/header";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


export const MessageList = () => {
    const [value, addValue] = useState('');
    const [messageList, addMessage] = useState([]); 

    const ref = useRef()
    useEffect(()=>{
      ref.current?.focus(InputAdornment);
    },[]);

    const dates = format(new Date(), 'yyyy-MM-dd HH:MM:SS');

    useEffect(()=> {
      let lastMessage = messageList[messageList.length-1]
      if (lastMessage) {            
          if (messageList.length && lastMessage.author === "User"){
              setTimeout(()=> addMessage([...messageList, {author: 'Bot', text: "Привет, User, пиши исчо", date: dates}]), 1500);
          } 
          return
      }
       return;
  }, [messageList]);

    const sendMessage = () => {
    if (value) {
      addMessage([
        ...messageList,
        { author: "User", text: value, date: dates },
      ]);
      addValue("");
    }
  };
    const handlePressInput = ({ code }) => {
        if (code === "Enter") {
          sendMessage();          
        }
      };
   
    const drawerWidth = 240;
    const InputStyles = styled(Input)`
    color: #9a9fa1;
    padding: 10px 15px;
    font-size: ${(props) => {
        return "15px";
    }};
    `;
      
    return (      
      
<div className={styles.main}>

<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
<Header/>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <ChatList />
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div className={styles.chatbox}>
    {messageList.map((message, index)=>(
                            <Message message={message} key={message?.date ?? index} />                           
                        ))}
    </div>    
    <InputStyles
          className={styles.input}
          placeholder="Введите сообщение..."
          onKeyDown={handlePressInput}
          onChange={(e) => addValue(e.target.value)}
          inputRef={ref}
          value={value} 
          fullWidth={true}
          id="submit"
          endAdornment={
            <InputAdornment position="end">
              {value && <Send onClick={sendMessage} />}
            </InputAdornment>
          } 
          />  
      </Box>
      
    </Box>
    
</div>
    );
  };