import axios from "@/services/axios";

export function getDataHadist() {
  return axios({
    method: "get",
    url: "/hadist",
  });
}
