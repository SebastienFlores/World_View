import { api } from "../services/ServiceHelper";

export const fetchCountrys = async () => {
  return await api.get("/all").then((response) => response.data);
};

export const fetchsearchCountry = async (code: string) => {
  return await api.get("/alpha/" + code).then((response) => response.data);
};
