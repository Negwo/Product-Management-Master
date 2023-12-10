import React from "react";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import { createTheme, ThemeProvider } from '@mui/material';
import Buy from './pages/Buy'
import Cart from './pages/Cart'
const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'sans serif'
    ].join(','),
  },});


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <div style={{height: "100vh", backgroundColor: "#eeee"}}>
        <Navbar/>
        <Dashboard/>  
        {/* <Cart/> */}

      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
