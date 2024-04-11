import ax from "axios";

export const axios = ax.create({
  baseURL: "http://localhost:1212",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default axios;
