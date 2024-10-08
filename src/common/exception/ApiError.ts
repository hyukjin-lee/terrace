import moment from "moment-timezone";

export class ApiError {
  public timestamp: string;

  public constructor(
    public status: number,
    public error: string,
    public message: string,
  ) {
    this.timestamp = moment().tz("Asia/Seoul").toISOString(true);
    console.error(this);
  }
}
