import { createStyles, makeStyles } from "@mui/styles";
import * as React from "react";
import { PageTitle } from "src/common/view/presentation/components/molecules";
import {Theme, Typography} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => createStyles({
  mapContainer: {
    padding: "0 10px 0 10px",
    maxWidth: 1000,
    margin: "auto"
  },
  map: {
    height: 500,
    width: "100%",
    textAlign: "justify",
    border: 0,
    boxShadow: `2px 2px 15px ${theme.palette.mode === "dark" ? "#000" : "#ccc"}`,
    display: "block",
    margin: "auto"
  },
  content: {
    marginBottom: theme.spacing(2)
  }
}));

const Places = () => {
  const classes = useStyles();
  return <div>
    <PageTitle title="places" />
    <Typography align="center" className={classes.content}>where I have been</Typography>
    <div className={classes.mapContainer}>
      <iframe className={classes.map} src="https://api.mapbox.com/styles/v1/hyeokjin-lee/clfgwc9yl002201mfpwgh8snv.html?fresh=true&title=true&access_token=pk.eyJ1IjoiaHllb2tqaW4tbGVlIiwiYSI6ImNsZmd3NXpxczFkemgzcG51eWcyYm1keTUifQ.n9r6mGWFGEy5T5E2ZLsQ7Q" />
    </div>
  </div>;
};

export default Places;
