import { Error } from "@mui/icons-material";
import * as React from "react";
import {createStyles, makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import {PropsWithChildren} from "react";

const useStyles = makeStyles(createStyles({
  typography: {
    whiteSpace: "pre-wrap",
    display: "flex",
    alignItems: "center"
  },
  icon: {
    fontSize: 13,
    float: "left",
  },
}));

interface Props {
  hidden?: boolean;
  className?: string;
}

const ErrorTypography = ({ children, hidden, className }: PropsWithChildren<Props>) => {
  const classes = useStyles();
  return <div hidden={hidden} className={className}>
    <Typography color="error" variant="caption" className={classes.typography}>
      <Error className={classes.icon} />&nbsp;
      {children}
    </Typography>
  </div>;
};

export default ErrorTypography;
