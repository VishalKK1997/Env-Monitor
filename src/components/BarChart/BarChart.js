import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import formatDate from "../../utils/formatDate";

const data = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
  datasets: [
    {
      label: "Good Quality",
      data: [3, 10, 13, 15, 22, 30, 23],
      backgroundColor: "rgb(117, 184, 30)",
    },
    {
      label: "Moderate Quality",
      data: [2, 3, 20, 5, 1, 4, 2],
      backgroundColor: "rgb(247, 117, 2)",
    },
    {
      label: "Bad Quality",
      data: [12, 19, 3, 5, 2, 3, 3],
      backgroundColor: "rgb(213, 2, 3)",
    },
  ],
};

const options = {
  title: {
    display: true,
    text: "Prediction Data",
    fontSize: 27,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "#383737",
    marginBottom: "40px",
    textDecoration: "underline",
  },
  sub_heading: {
    color: "#666666",
    fontWeight: "bold",
    marginTop: "10px",
  },
  button: {
    marginTop: "10px",
  },
}));

const BarChart = () => {
  const [days, setDays] = useState("0");
  const [date, setDate] = useState(formatDate(new Date()));
  const [barData, setBarData] = useState(data);
  const classes = useStyles();

  const handleSubmit = () => {};

  return (
    <div>
      <Typography variant="h4" className={classes.heading}>
        Prediction Data For Previous Days
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Typography className={classes.sub_heading} variant="h6">
            Input the Date :
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Start Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Number of days"
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>

      <div style={{ marginTop: "30px" }}>
        <Bar data={barData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
