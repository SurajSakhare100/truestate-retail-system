import Sale from "../models/Sale.js";

export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};
