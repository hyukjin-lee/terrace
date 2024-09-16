import {TechArticlePrevOrNext} from "../../../domain/TechArticleDetailResponse";

export interface TechGetPrevOrNextUseCase {
  getPrevOf(seq: number): Promise<TechArticlePrevOrNext>
  getNextOf(seq: number): Promise<TechArticlePrevOrNext>
}
