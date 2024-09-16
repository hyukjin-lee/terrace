import {TechFindAllUseCase} from "./port/incoming/TechFindAllUseCase";
import {TechGetUseCase} from "./port/incoming/TechGetUseCase";
import {TechGetPrevOrNextUseCase} from "./port/incoming/TechGetPrevOrNextUseCase";
import {StrapiResponse} from "../../common/domain/StrapiResponse";
import {TechLoadPort} from "./port/outgoing/TechLoadPort";
import {TechLoadPrevOrNextPort} from "./port/outgoing/LoadTechPrevOrNext";
import {TechArticle} from "../domain";
import {TechArticleDetailResponse, TechArticlePrevOrNext} from "../domain/TechArticleDetailResponse";
import {TechArticleListResponse} from "../domain/TechArticleListResponse";
import {TechArticleListStrapi} from "./port/outgoing/TechArticleListStrapi";

export class TechService implements TechFindAllUseCase, TechGetUseCase, TechGetPrevOrNextUseCase{

  private readonly defaultPrevOrNext: TechArticlePrevOrNext = {
    id: "",
    date: "",
    title: "",
    uri: "",
  };

  constructor(
    private readonly loadTechPort: TechLoadPort,
    private readonly loadTechPrevOrNextPort: TechLoadPrevOrNextPort
  ) { }

  public getBySlug = (slug: string): Promise<TechArticleDetailResponse> =>
    this.loadTechPort.getBySlug(slug)
      .then(it => ({
        id: "" + it.id,
        seq: it.attributes.seq,
        date: it.attributes.date,
        updatedAt: it.attributes.updatedAt,
        title: it.attributes.title,
        slug: it.attributes.slug,
        content: it.attributes.content,
        prev: this.defaultPrevOrNext,
        next: this.defaultPrevOrNext
      }));

  public findAll = (page: number): Promise<StrapiResponse<TechArticleListResponse>> =>
    this.loadTechPort.findAll(page)
      .then(data => ({
        data: data.data.map(it => ({
          id: "" + it.id,
          seq: it.attributes.seq,
          date: it.attributes.date,
          uri: TechArticle.createUri({date: it.attributes.date, slug: it.attributes.slug}),
          title: it.attributes.title,
        })),
        meta: data.meta,
      }));

  public getPrevOf = (seq: number): Promise<TechArticlePrevOrNext> =>
    this.loadTechPrevOrNextPort.getPrevOf(seq).then(this.convertListToPrevOrNext);

  public getNextOf = (seq: number): Promise<TechArticlePrevOrNext> =>
    this.loadTechPrevOrNextPort.getNextOf(seq).then(this.convertListToPrevOrNext);

  private convertListToPrevOrNext = (list: TechArticleListStrapi): TechArticlePrevOrNext =>
    ({
      id: "" + list.id,
      date: list.attributes.date,
      title: list.attributes.title,
      uri: TechArticle.createUri({date: list.attributes.date, slug: list.attributes.slug}),
    });
}
