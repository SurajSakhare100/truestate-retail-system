import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // your backend
});

export const fetchSales = async (params: Record<string, any>) => {
  const res = await api.get("/sales", { params });
  return res.data;
};
