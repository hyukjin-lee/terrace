import {StrapiResponse} from "../../../../common/domain/StrapiResponse";
import {TechArticleListResponse} from "../../../domain/TechArticleListResponse";

export interface TechFindAllUseCase {
  findAll(page: number): Promise<StrapiResponse<TechArticleListResponse>>
}
