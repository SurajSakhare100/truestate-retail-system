import { Search } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchBarProps {
  search: string;
  setSearch: (v: string) => void;
}

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  const [value, setValue] = useState(search);

  // Sync if reset
  useEffect(() => setValue(search), [search]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearch(value.trim());
    }
  };

  return (
    <div className="relative text-black">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

      <input
        type="text"
        placeholder="Search customer name or phone..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
        className="
          pl-10 pr-4 py-2
          text-black
          border border-gray-300
          rounded-lg
          w-80
          placeholder:text-gray-400
          bg-white
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      />
    </div>
  );
};

export default SearchBar;
