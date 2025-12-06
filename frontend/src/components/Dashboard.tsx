import useSalesData from "../hooks/useSalesData";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import SummaryCards from "../components/SummaryCards";
import SalesTable from "../components/SalesTable";
import Pagination from "../components/Pagination";
import SortDropdown from "./SortDropdown";

export default function Dashboard() {
  const {
    query, setQuery,
    filters, setFilters,
    sortBy, setSortBy,
    data, meta,
    page, setPage
  } = useSalesData();

  return (
    <div className="p-5 bg-gray-100 min-h-screen text-black">

      <SearchBar value={query} onChange={setQuery} />

      <Filters filters={filters} setFilters={setFilters} />

      <div className="flex justify-end mt-3">
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <SummaryCards meta={meta} />

      <SalesTable data={data} />

      <Pagination page={page} setPage={setPage} total={meta.total} />
    </div>
  );
}
