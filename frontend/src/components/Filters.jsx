import { useState } from "react";

export default function Filters({ filters, setFilters }) {
  const update = (key, val) => setFilters({ ...filters, [key]: val });

  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {/* Gender */}
      <select
        className="border px-3 py-2 rounded"
        onChange={(e) => update("gender", [e.target.value])}
      >
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      {/* Region */}
      <select
        className="border px-3 py-2 rounded"
        onChange={(e) => update("region", [e.target.value])}
      >
        <option value="">Customer Region</option>
        <option value="North">North</option>
        <option value="South">South</option>
      </select>

      {/* Product Category */}
      <select
        className="border px-3 py-2 rounded"
        onChange={(e) => update("productCategory", [e.target.value])}
      >
        <option value="">Product Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
      </select>

      {/* Payment */}
      <select
        className="border px-3 py-2 rounded"
        onChange={(e) => update("paymentMethod", [e.target.value])}
      >
        <option value="">Payment Method</option>
        <option value="Cash">Cash</option>
        <option value="UPI">UPI</option>
      </select>
    </div>
  );
}
