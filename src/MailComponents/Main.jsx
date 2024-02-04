import { Grid } from "@mui/material";
import React from "react";

import LeftPanel from "./LeftPanel";
import Middle from "./Middle";
import RightPanel from "./RightPanel";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Main() {
  return (
    //   i m going to divide the home page by using grid component from the material ui
    // the background colour is same
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={2}>
          <LeftPanel />
        </Grid>
        <Grid item xs={9}>
          <Middle />
        </Grid>
        <Grid item xs={1}>
          <RightPanel />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
