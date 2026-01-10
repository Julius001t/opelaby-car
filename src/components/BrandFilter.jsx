const BrandFilter = ({ brand, setBrand }) => {
  return (
    <select
      value={brand}
      onChange={(e) => setBrand(e.target.value)}
      className="p-2 border rounded"
    >
      <option value="">All Brands</option>
      <option value="Toyota">Toyota</option>
      <option value="Honda">Honda</option>
      <option value="BMW">BMW</option>
    </select>
  );
};

export default BrandFilter;
