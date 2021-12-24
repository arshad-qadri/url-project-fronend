import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box
        bgcolor="primary.main"
        p={2}
        display="flex"
        justifyContent="space-around"
        height="8vh"
      >
        <Typography textAlign="center" color="white">
          <Typography
            variant="h4"
            fontFamily="Pushster, cursive"
            component="h4"
          >
            URL &nbsp; Source
          </Typography>
        </Typography>
        <Box>
          <NavLink to="/create">
            <Button variant="contained" color="success">
              Create
            </Button>
          </NavLink>
        </Box>
      </Box>
    </>
  );
};

export default Header;
