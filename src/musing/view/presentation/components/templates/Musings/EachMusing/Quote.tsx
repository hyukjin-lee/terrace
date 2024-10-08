import { createStyles, makeStyles } from "@mui/styles";
import * as React from "react";

const useStyles = makeStyles(createStyles({
  quote: {
    fontSize: "1.2em",
    lineHeight: "2",
    wordBreak: "keep-all",
  }
}));

interface Props {
  quote: string;
}

const Quote = ({ quote }: Props) => {
  const classes = useStyles();
  return <p className={classes.quote}>“{quote}”</p>;
};

export default Quote;
