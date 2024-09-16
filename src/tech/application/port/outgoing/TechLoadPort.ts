import {TechArticleStrapi} from "src/tech/application/port/outgoing/TechArticleStrapi";
import {StrapiResponse} from "../../../../common/domain/StrapiResponse";
import {TechArticleListStrapi} from "src/tech/application/port/outgoing/TechArticleListStrapi";

export interface TechLoadPort {
  getBySlug(slug: string): Promise<TechArticleStrapi>
  findAll(page: number): Promise<StrapiResponse<TechArticleListStrapi>>
}
