import { fetchSales } from "../services/sales.service.js";

export const getSales = async (req, res) => {
  try {
    const result = await fetchSales(req.query);
    res.status(200).json(result);
  } catch (error) {
    console.error("Sales Controller Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
