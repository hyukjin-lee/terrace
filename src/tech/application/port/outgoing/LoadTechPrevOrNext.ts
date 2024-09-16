import {TechArticleListStrapi} from "src/tech/application/port/outgoing/TechArticleListStrapi";

export interface TechLoadPrevOrNextPort {
  getPrevOf(seq: number): Promise<TechArticleListStrapi>
  getNextOf(seq: number): Promise<TechArticleListStrapi>
}
