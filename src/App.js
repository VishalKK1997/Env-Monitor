import React from "react";
import BarChart from "./components/BarChart/BarChart";
import NavBar from "./components/NavBar/NavBar";
import Image from "./components/Image/Image";
import "./App.css";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import MapGrid from "./components/MapGrid/MapGrid";
import RouteRecommend from "./components/RouteRecommend/RouteRecommend";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "#383737",
    marginBottom: "40px",
    textDecoration: "underline",
  },
  box: {
    position: "relative",
    border: "2px solid #626667",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#f9f7f7",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#e2e3e6" }}>
      <NavBar />
      <main className="root">
        <Grid container spacing={5}>
          <Grid item sm={6} xs={12}>
            <div className={classes.box}>
              <Typography variant="h4" className={classes.heading}>
                Prediction Data For Current Day
              </Typography>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Image />
                <MapGrid />
              </div>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.box} style={{ height: "92.5%" }}>
              <BarChart />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.box}>
              <Typography
                variant="h4"
                style={{ textAlign: "center" }}
                className={classes.heading}
              >
                Route Recommender
              </Typography>
              <RouteRecommend />
            </div>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default App;
