import {formatDateTime} from "src/util";

export class BlogArticle {
  public static createUri = ({date, slug}: {date: string, slug: string}) =>
    "/blog" + formatDateTime(date, "/YYYY/MM/DD/") + slug;
}
