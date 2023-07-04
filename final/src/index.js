import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import customTheme from "./Components/Navbar/themes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ChakraProvider>
);
