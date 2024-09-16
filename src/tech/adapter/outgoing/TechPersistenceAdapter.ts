import { TechLoadPort } from "src/tech/application/port/outgoing/TechLoadPort";
import { TechLoadPrevOrNextPort } from "src/tech/application/port/outgoing/LoadTechPrevOrNext";
import { StrapiResponse } from "../../../common/domain/StrapiResponse";
import { AxiosInstance } from "axios";
import { Endpoints } from "../../../common/constants/Constants";
import RepositoryError from "../../../common/exception/RepositoryError";
import { TechArticleListStrapi } from "../../application/port/outgoing/TechArticleListStrapi";
import { TechArticleStrapi } from "../../application/port/outgoing/TechArticleStrapi";

export class TechPersistenceAdapter
  implements TechLoadPort, TechLoadPrevOrNextPort
{
  constructor(private readonly axios: AxiosInstance) {}

  private readonly listFields = ["seq", "title", "slug", "date"];
  private readonly defaultPrevOrNext: TechArticleListStrapi = {
    id: -1,
    attributes: {
      seq: -1,
      date: "",
      updatedAt: "",
      slug: "",
      title: "",
    },
  };

  public findAll = (
    page: number
  ): Promise<StrapiResponse<TechArticleListStrapi>> =>
    this.axios
      .get<StrapiResponse<TechArticleListStrapi>>(Endpoints.tech, {
        params: {
          fields: this.listFields,
          sort: ["seq:desc"],
          "pagination[page]": page,
          "pagination[pageSize]": 10,
        },
      })
      .then((it) => it.data);

  public getBySlug = async (slug: string): Promise<TechArticleStrapi> => {
    const article: TechArticleStrapi | undefined = await this.axios
      .get<{ data: TechArticleStrapi[] }>(Endpoints.tech, {
        params: {
          "filters[slug][$eq]": slug,
        },
      })
      .then((it) => it.data.data[0]);
    if (typeof article === "undefined") {
      throw RepositoryError.of();
    }

    return article;
  };

  public getNextOf = async (seq: number): Promise<TechArticleListStrapi> => {
    const prev: TechArticleListStrapi | undefined = await this.axios
      .get<{ data: TechArticleListStrapi[] }>(Endpoints.tech, {
        params: {
          "filters[seq][$gt]": seq,
          sort: ["seq:asc"],
          "pagination[pageSize]": 1,
          fields: this.listFields,
        },
      })
      .then((it) => it.data.data[0]);

    return prev || this.defaultPrevOrNext;
  };

  public getPrevOf = async (seq: number): Promise<TechArticleListStrapi> => {
    const next: TechArticleListStrapi | undefined = await this.axios
      .get<{ data: TechArticleListStrapi[] }>(Endpoints.tech, {
        params: {
          "filters[seq][$lt]": seq,
          sort: ["seq:desc"],
          "pagination[pageSize]": 1,
          fields: this.listFields,
        },
      })
      .then((it) => it.data.data[0]);

    return next || this.defaultPrevOrNext;
  };
}
