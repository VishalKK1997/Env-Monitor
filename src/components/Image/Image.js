import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import formatDate from "../../utils/formatDate";
import MapImage from "./openmap.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "30px",
    height: "87%",
    width: "87%",
  },
  inputForm: {
    marginBottom: "20px",
  },
  heading: {
    color: "#666666",
    fontWeight: "bold",
  },
  button: {
    marginTop: "10px",
  },
  image: {
    height: "100%",
    width: "100%",
  },
}));

const Image = () => {
  const classes = useStyles();
  const [date, setDate] = useState(formatDate(new Date()));

  const handleSubmit = () => {};

  return (
    <div className={classes.root}>
      <Grid className={classes.inputForm} container spacing={1}>
        <Grid item xs={3}>
          <Typography className={classes.heading} variant="h6">
            Input the Date :
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
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
      <img className={classes.image} src={MapImage} alt="map_image" />
    </div>
  );
};

export default Image;
