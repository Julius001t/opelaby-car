const FilterBar = ({ filters, setFilters }) => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Find car by model, year..."
            value={filters.search}
            onChange={(e) =>
              setFilters({ ...filters, search: e.target.value })
            }
            className="md:col-span-2 px-4 py-3 border rounded-lg focus:outline-none"
          />

          {/* City */}
          <select
            value={filters.city}
            onChange={(e) =>
              setFilters({ ...filters, city: e.target.value })
            }
            className="px-4 py-3 border rounded-lg"
          >
            <option value="">All cities</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Ibadan">Ibadan</option>
            <option value="Other">Other</option>
          </select>

          {/* Price */}
          <select
            value={filters.price}
            onChange={(e) =>
              setFilters({ ...filters, price: e.target.value })
            }
            className="px-4 py-3 border rounded-lg"
          >
            <option value="">All prices</option>
            <option value="lt2">Below ₦2M</option>
            <option value="2-3">₦2M - ₦3M</option>
            <option value="3-4">₦3M - ₦4M</option>
            <option value="gt4">Above ₦4M</option>
          </select>

          {/* Brand */}
          <select
            value={filters.brand}
            onChange={(e) =>
              setFilters({ ...filters, brand: e.target.value })
            }
            className="px-4 py-3 border rounded-lg"
          >
            <option value="">All brands</option>
            <option value="Toyota">Toyota</option>
            <option value="Lexus">Lexus</option>
            <option value="Honda">Honda</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Nissan">Nissan</option>
            <option value="Ford">Ford</option>
            <option value="BMW">BMW</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
