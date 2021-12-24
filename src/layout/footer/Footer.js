import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box bgcolor="primary.main" p={2} width="100%" height="4vh">
        <Typography textAlign="center" color="white">
          <Typography variant="p" fontFamily="Pushster, cursive" component="p">
            URL &nbsp; Source
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
