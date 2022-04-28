import React from 'react';
import ReactDOM from 'react-dom/client';
import { Message } from './components/message.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Message 
   text='Текст домашки' 
   />
  </React.StrictMode>
);


