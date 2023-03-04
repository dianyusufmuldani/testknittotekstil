import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com/";
const hitApi = axios.create({
  baseURL: baseURL,
});

hitApi.interceptors.request.use((request) => {
  console.log("request", request);
  return request;
});

hitApi.interceptors.response.use((response) => {
  console.log("response ", response);
  return response;
});

export const hitDataTodos = async (requestParams) => {
  return hitApi.get("todos?_start=0&_limit=10", requestParams);
};

export const hitAddTodos = async (requestParams) => {
  return hitApi.post("todos", requestParams);
};
