import { Search } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchBarProps {
  search: string;
  setSearch: (v: string) => void;
}

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  const [value, setValue] = useState(search);

  useEffect(() => setValue(search), [search]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearch(value.trim());
    }
  };

  return (
    <div className="relative text-black">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />

      <input
        type="text"
        placeholder="Name, Phone no."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
        className="
          pl-10 pr-4 py-1
          text-black
          border border-gray-300
          rounded-md
          w-96
          placeholder:text-gray-400
          bg-[#F3F3F3]
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      />
    </div>
  );
};

export default SearchBar;
