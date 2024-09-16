import {TechArticleDetailResponse} from "../../../domain/TechArticleDetailResponse";

export interface TechGetUseCase {
  getBySlug(slug: string): Promise<TechArticleDetailResponse>
}
