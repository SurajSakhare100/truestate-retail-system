import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // your backend
});

export const fetchSales = async (params: Record<string, any>) => {
  const res = await API.get("/sales", { params });
  return res.data;
};
