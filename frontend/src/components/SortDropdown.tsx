export default function SortDropdown({ sortBy, setSortBy }:any) {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm"
    >
      <option value="name-asc">Sort: Customer Name (A → Z)</option>
      <option value="name-desc">Sort: Customer Name (Z → A)</option>
      <option value="amount-desc">Sort: Amount (High → Low)</option>
      <option value="amount-asc">Sort: Amount (Low → High)</option>
    </select>
  );
}
