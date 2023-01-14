import {AxiosRequestConfig} from "axios";
import {API_HOST} from "../../common/constants/Constants";

export const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: API_HOST,
  headers: {
    "Authorization": "Bearer " +
      "fd006b67bd28f2860e1d1cd1714b2be4b6fbe4c4eb28c89e2cb9c982c1b33f8f92a331de3ce369680f4672dedb022e7d1e81a398c6038d3eb490172e4d38cc472061104ce55a08720026e18bc4c3e4c8a6f4d6ce3099004c251a62812ddce412a7f0023b397aaab37ae60deed33d96a4c12f9e2d82ff83e94a5f445ad87ec399".replace(/\n/g, "")
  }
};
