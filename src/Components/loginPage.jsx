import {
  Avatar,
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Paper,
  Typography,
  TextField,
  Checkbox,
} from "@mui/material";

import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function LoginPage() {
  const paperStyle = {
    padding: "20px",
    // height: "80vh",
    width: 280,
    maxHeight: "100vh",
    margin: "20px auto", //20px from top and bottom and auto from side
    minHeight: "70vh",
    borderRadius: "40px",
  };
  const btnStyle = {
    margin: "8px 0",
  };
  const avatarStyle = {
    backgroundColor: "green",
  };
  return (
    <Grid>
      <Paper elevation={24} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <TextField
          label="Username"
          fullWidth
          variant="filled"
          required
          placeholder="Enter username"
        ></TextField>
        <TextField
          label="Password"
          fullWidth
          variant="filled"
          required
          placeholder="Enter password"
          type="password"
        ></TextField>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
        </FormGroup>
        <Button
          style={btnStyle}
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#" underline="hover">
            Forgot Password
          </Link>
        </Typography>
        <Typography>
          Do you have an account ?
          <Link href="#" underline="hover">
            {" "}
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
