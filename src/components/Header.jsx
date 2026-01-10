import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/cars/fola_car3.jpeg"
            alt="Opelaby Logo"
            className="h-10 w-10"
          />
          <h1 className="text-2xl font-extrabold text-red-600">
            Opelaby Commercial Enterprises
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-300">
          <a href="#" className="hover:text-red-600">Buy car</a>
          <a href="#" className="hover:text-red-600">Sell car</a>
          <a href="#" className="hover:text-red-600">Become a dealer</a>
        </nav>

        {/* Dark mode toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="text-xl"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;
