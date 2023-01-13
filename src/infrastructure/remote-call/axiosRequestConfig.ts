import {AxiosRequestConfig} from "axios";
import {API_HOST} from "../../common/constants/Constants";

export const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: API_HOST,
  headers: {
    "Authorization": "Bearer " +
      `a8725ee1be7c8d7c9c5924623b7db3c643830f4bdd953b36295a3006142f2fda23e8732c22837afffb5e90691b47b51c37aef70bf557c3a55
      5c196e72112ee4e7fdb2095151e89cd94489f9017253c6348a9af2ae24468301f72ab8c172d5a725a52bd213959ac35fd3bb8c991dcb5a5de9
      087d7975b8d0ceb4e54c5fad3c925`.replace(/\n/g, "")
  }
};
