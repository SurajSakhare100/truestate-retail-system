import SearchBar from "./SearchBar";

interface HeaderProps {
  query: string;
  setQuery: (v: string) => void;
}

const Header = ({ query, setQuery }: HeaderProps) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-2">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">Sales Management System</h1>
        <SearchBar search={query} setSearch={setQuery} />
      </div>
    </div>
  );
};

export default Header;