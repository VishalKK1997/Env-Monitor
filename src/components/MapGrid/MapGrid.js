import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "87%",
    height: "87%",
    position: "absolute",
    top: "27%",
    left: "0",
    zIndex: "5",
  },
  section_div_green: {
    backgroundColor: "#58bc34",
    float: "left",
    height: "20.5%",
    margin: "1px",
    width: "24.6%",
    opacity: "0.3",
  },
  section_div_red: {
    backgroundColor: "#f65959",
    float: "left",
    height: "20.5%",
    margin: "1px",
    width: "24.6%",
    opacity: "0.3",
  },
  section_div_orange: {
    backgroundColor: "#f78702",
    float: "left",
    height: "20.5%",
    margin: "1px",
    width: "24.6%",
    opacity: "0.3",
  },
}));

const predictions = [3, 2, 3, 3, 2, 3, 1, 3, 3, 2, 3, 2, 1, 3, 1, 2];

const MapGrid = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section style={{ height: "100%" }}>
        {predictions.map((prediction) => (
          <div
            className={
              prediction === 1
                ? classes.section_div_green
                : prediction === 2
                ? classes.section_div_orange
                : classes.section_div_red
            }
          ></div>
        ))}
      </section>
    </div>
  );
};

export default MapGrid;
