import { fetchSales } from "@/services/api";
import { useEffect, useState } from "react";

export default function useSalesData() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    region: [],
    gender: [],
    ageRange: [18, 60],
    productCategory: [],
    tags: [],
    paymentMethod: [],
    dateRange: [],
  });

  const [sortBy, setSortBy] = useState("customerNameAsc");
  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({ total: 0 });

  useEffect(() => {
    load();
  }, [query, filters, sortBy, page]);

  const load = async () => {
    const res = await fetchSales({ query, ...filters, sortBy, page });
    setData(res.items);
    setMeta(res.meta);
  };

  return {
    query, setQuery,
    filters, setFilters,
    sortBy, setSortBy,
    page, setPage,
    data, meta
  };
}
