import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // ✔ load from env
});

export const fetchSales = async (params: Record<string, any>) => {
  const res = await api.get("/sales", { params });
  return res.data;
};
