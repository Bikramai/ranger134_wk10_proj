import _React from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Stack,
  Container,
} from "@mui/material";

import { NavBar } from "../sharedComponents";
import { shopStyles } from "../Shop";

export const ContactUs = () => {
  return (
    <div>
      <Box sx={shopStyles.main}>
        <NavBar />
        <Stack
          direction="column"
          alignItems="center"
          sx={{ marginTop: "100px", marginLeft: "100px" }}
        >
          <Typography variant="h4" sx={{ margin: "auto" }}>
            Contact US.
          </Typography>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
              }}
            >
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  InputProps={{ style: { color: "white" } }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  InputProps={{ style: { color: "white" } }}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="message"
                  fullWidth
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  InputProps={{ style: { color: "white" } }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Meesage
                </Button>
              </Box>
            </Box>
          </Container>
        </Stack>
      </Box>
    </div>
  );
};
