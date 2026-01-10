const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search cars..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 border rounded"
    />
  );
};

export default SearchBar;
