import { createStyles, makeStyles } from "@mui/styles";
import * as React from "react";
import { Link } from "src/common/view/presentation/components/molecules";
import { formatDateTime } from "src/util";
import {Theme, Typography} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    margin: theme.spacing(2),
    textAlign: "center"
  },
  head: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    wordBreak: "keep-all",
  },
  date: {
    fontSize: theme.typography.subtitle1.fontSize,
    userSelect: "none"
  }
}));

interface Props {
  title: string;
  slug: string;
  date: string;
}

const ArticleHead = ({ title, slug, date }: Props) => {
  const classes = useStyles();
  return <div className={classes.container}>
    <div className={classes.head}>
      <Link href={"/blog" + formatDateTime(date, "/YYYY/MM/DD/") + slug} color="textPrimary" shallow={true}>
        <Typography variant="h1">{title}</Typography>
      </Link>
    </div >
    <div className={classes.date}>{formatDateTime(date, "YYYY / MM / DD")}</div>
  </div >;
};

export default ArticleHead;
