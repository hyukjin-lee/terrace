import {TechAttributes} from "./TechAttributes";

export interface TechArticleListStrapi {
  id: number;
  attributes: Omit<TechAttributes, "content">
}

