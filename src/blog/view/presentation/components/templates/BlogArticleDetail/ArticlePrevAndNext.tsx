import { createStyles, makeStyles } from "@mui/styles";
import * as React from "react";
import { Link } from "src/common/view/presentation/components/molecules";
import {BlogArticlePrevOrNext} from "../../../../../domain/BlogArticleDetailResponse";
import {Button, Theme, Typography} from "@mui/material";

const useEachStyles = makeStyles((theme: Theme) => createStyles({
  eachContainer: {
    margin: `${theme.spacing(1)} 0`,
  },
  label: {
    marginBottom: theme.spacing(0.5),
    userSelect: "none",
  }
}));


const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    margin: `${theme.spacing(4)} 0`,
    textAlign: "center"
  },
  hrUpper: {
    marginBottom: theme.spacing(2)
  },
  hrLower: {
    margin: `${theme.spacing(2)} 0`
  }
}));

interface Props {
  prev: BlogArticlePrevOrNext;
  next: BlogArticlePrevOrNext;
}

const Each = ({ label, article }: { label: string; article: BlogArticlePrevOrNext }) => {
  const classes = useEachStyles();

  return <div className={classes.eachContainer} hidden={!article.id}>
    <Typography variant="subtitle2" className={classes.label}>{label}</Typography>
    <Link href={article.uri}>{article.title}</Link>
  </div>;

};

const ArticlePrevAndNext = ({ prev, next }: Props) => {
  const classes = useStyles();
  return <div className={classes.container}>
    <hr className={classes.hrUpper} />
    <Each label='Next Article' article={next} />
    <Each label='Previous Article' article={prev} />
    <hr className={classes.hrLower} />

    <Link href="/blog">
      <Button variant="outlined" style={{ textTransform: "capitalize" }}>Article List</Button>
    </Link>
  </div>;
};

export default ArticlePrevAndNext;
