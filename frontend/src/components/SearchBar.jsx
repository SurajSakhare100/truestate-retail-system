export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search name, phone..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 border rounded-md bg-white"
    />
  );
}
