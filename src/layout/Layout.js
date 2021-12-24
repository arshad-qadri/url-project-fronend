import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Box position="absolute" height="100vh" width="100%" overflowY="hidden">
        <Grid item xs={12}>
          <Header />
          <div {...props}>{children}</div>
          <Footer />
        </Grid>
      </Box>
    </>
  );
};

export default Layout;
