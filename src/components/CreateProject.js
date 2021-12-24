import { Box, Button, Container, Paper, TextField } from "@mui/material";
import React from "react";

const CreateProject = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          p={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 40vh)"
          mt={5}
        >
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
          >
            <TextField fullWidth label="Title" id="outlined-title-input" />
            <TextField
              id="outlined-url-input"
              label="Enter URL"
              type="text"
              fullWidth
              autoComplete="true"
            />
            <Box textAlign="center" mt={3}>
              <Button variant="contained">Create</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CreateProject;
