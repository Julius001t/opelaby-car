const PriceFilter = ({ maxPrice, setMaxPrice }) => {
  return (
    <select
      value={maxPrice}
      onChange={(e) => setMaxPrice(Number(e.target.value))}
      className="p-2 border rounded"
    >
      <option value={0}>All Prices</option>
      <option value={5000000}>Below ₦5M</option>
      <option value={10000000}>Below ₦10M</option>
      <option value={15000000}>Below ₦15M</option>
    </select>
  );
};

export default PriceFilter;
