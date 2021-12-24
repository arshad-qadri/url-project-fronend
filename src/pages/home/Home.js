import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CreateProject from "../../components/CreateProject";

const Home = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12} lg={4} md={4} sm={12}>
            <Box bgcolor="tomato" height={"81vh"}>
              <CreateProject />
            </Box>
          </Grid>
          <Grid item xs={12} lg={8} md={8} sm={12}>
            <Box bgcolor="peru" height={"100vh"}>
              jjhj
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
