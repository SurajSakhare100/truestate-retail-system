"use client";

import { useEffect, useState } from "react";
import Header from "./Headers";
import FilterBar from "./FilterBar";
import SalesTable from "./SalesTable";
import Pagination from "./Pagination";
import { fetchSales } from "@/services/api";
import SummaryCards from "./SummaryCards";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
interface FiltersType {
  region: string[];
  gender: string[];
  age: { min: number; max: number };
  category: string[];
  tags: string[];
  page: number;
  payment: string[];
  date: { from: string | null; to: string | null };
}
const Dashboard = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [order, setOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);

  const [filters, setFilters] = useState<FiltersType>({
    region: [],
    gender: [],
    age: { min: 0, max: 100 },
    category: [],
    tags: [],
    payment: [],
    page: 1,
    date: { from: null, to: null }
  });

  const [sales, setSales] = useState([]);
  const [summary, setSummary] = useState({});
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setQuery(searchParams.get("search") || "");
    setSortBy(searchParams.get("sortBy") || "date");
    setOrder(searchParams.get("order") || "desc");

    const pageFromURL = Number(searchParams.get("page"));
    if (pageFromURL > 0) setCurrentPage(pageFromURL);

    setFilters({
      region: searchParams.getAll("region"),
      gender: searchParams.getAll("gender"),
      age: {
        min: Number(searchParams.get("ageMin")) || 0,
        max: Number(searchParams.get("ageMax")) || 100
      },
      category: searchParams.getAll("category"),
      tags: searchParams.getAll("tags"),
      payment: searchParams.getAll("payment"),
      date: {
        from: searchParams.get("dateFrom") || null,
        to: searchParams.get("dateTo") || null
      },
      page: Number(searchParams.get("page")) || 1
    });
  }, []);

  const buildQueryParams = () => ({
    search: query,
    region: filters.region,
    gender: filters.gender,
    category: filters.category,
    tags: filters.tags,
    payment: filters.payment,
    ageMin: filters.age.min,
    ageMax: filters.age.max,
    dateFrom: filters.date.from,
    dateTo: filters.date.to,
    sortBy,
    order,
    page: currentPage,
    limit: 10
  });

  useEffect(() => {
    const params = new URLSearchParams();

    if (query) params.set("search", query);
    filters.region.forEach(v => params.append("region", v));
    filters.gender.forEach(v => params.append("gender", v));
    filters.category.forEach(v => params.append("category", v));
    filters.tags.forEach(v => params.append("tags", v));
    filters.payment.forEach(v => params.append("payment", v));

    params.set("ageMin", filters.age.min.toString());
    params.set("ageMax", filters.age.max.toString());

    if (filters.date.from) params.set("dateFrom", filters.date.from);
    if (filters.date.to) params.set("dateTo", filters.date.to);

    params.set("sortBy", sortBy);
    params.set("order", order);
    params.set("page", filters.page.toString());

    router.replace(`${pathname}?${params.toString()}`);
  }, [query, filters, sortBy, order, currentPage]);

  useEffect(() => {
    const load = async () => {
      const res = await fetchSales(buildQueryParams());
      setSales(res.data || []);
      setSummary(res.meta || {});
      setTotalPages(res.pages || 1);
    };

    load();
  }, [query, filters, sortBy, order, currentPage]);

  const resetAllFilters = () => {
    setQuery("");
    setSortBy("date");
    setOrder("desc");
    setCurrentPage(1);

    setFilters({
      region: [],
      gender: [],
      age: { min: 0, max: 100 },
      category: [],
      tags: [],
      payment: [],
      date: { from: null, to: null },
      page: 1
    });
  };

  return (
    <div className="flex flex-col w-full">
      <Header query={query} setQuery={setQuery} />

      <FilterBar
        filters={filters}
        setFilters={setFilters}
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
        resetAllFilters={resetAllFilters}
        setCurrentPage={setCurrentPage}
      />

      <div className="px-4 pb-2 bg-white">
        <SummaryCards meta={summary} />
      </div>

      <div className="flex-1 overflow-y-auto">
        <SalesTable transactions={sales} />
      </div>

      <div className="bg-white border-t">
        <Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}   
/>
      </div>
    </div>
  );
};

export default Dashboard;