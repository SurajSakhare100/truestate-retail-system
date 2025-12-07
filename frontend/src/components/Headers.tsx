import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">Sales Management System</h1>
        <SearchBar search="" setSearch={() => {}} />
      </div>
    </div>
  );
};

export default Header;