import {AxiosRequestConfig} from "axios";
import {API_HOST} from "../../common/constants/Constants";

export const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: API_HOST,
  headers: {
    "Authorization": "Bearer " +
      "8ce1b126ca1336fffe6d85790b9f6bc946d65891c725484a6493042b49b3515c5988b7b46f14666816cc605247013b9e5e68bacc89c69a1c1958f1a5440897050f2a6f97247f5c59301c8deaf182aa7c31ade81323da5c0d3a1c8d856c70116d66e5c02042e758cf7d48b6cbd80e8ebafda59e417c21744a7b505adc8cb8b37e".replace(/\n/g, "")
  }
};
