import {createStyles, makeStyles} from "@mui/styles";
import * as React from "react";
import EachTechArticle from "./EachTechArticle";
import {StrapiPagination} from "src/common/domain/StrapiPagination";
import {TechArticleListResponse} from "src/tech/domain/TechArticleListResponse";
import {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    maxWidth: theme.spacing(75),
    margin: "auto",
    textAlign: "center",
    marginTop: `-${theme.spacing(1.5)}`
  }
}));

export interface TechArticleListProps {
  techArticles: TechArticleListResponse[];
  pagination: StrapiPagination,
}

const TechArticleList = ({ techArticles }: TechArticleListProps) => {
  const classes = useStyles();
  return <div>
    <div className={classes.container}>
      {techArticles.map(b => <EachTechArticle key={b.id} techArticle={b} />)}
    </div>
  </div>;
};

export default TechArticleList;
