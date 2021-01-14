import React, { useState } from "react";
import BarChart from "./components/BarChart/BarChart";
import NavBar from "./components/NavBar/NavBar";
import Image from "./components/Image/Image";
import "./App.css";
import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import MapGrid from "./components/MapGrid/MapGrid";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "#383737",
    marginBottom: "40px",
    textDecoration: "underline",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <main className="root">
        <Grid container spacing={1}>
          <Grid item sm={6} xs={12}>
            <div style={{ position: "relative" }}>
              <Typography variant="h4" className={classes.heading}>
                Prediction Data For Current Day
              </Typography>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  marginTop: "5%",
                  overflow: "hidden",
                }}
              >
                <Image />
                <MapGrid />
              </div>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div>
              <BarChart />
            </div>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default App;
