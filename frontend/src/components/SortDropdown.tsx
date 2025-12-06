export default function SortDropdown({ sortBy, setSortBy }:any) {
  return (
    <select
      className="border px-3 py-2 rounded"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="customerNameAsc">Customer Name (A–Z)</option>
      <option value="newest">Date – Newest First</option>
      <option value="quantityDesc">Quantity</option>
    </select>
  );
}
