const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">opelaby Nigeria</h3>
          <p className="text-sm">
            Buy Nigerian-used cars below market price. All cars are inspected by professionals for a safe transaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-600">Buy Car</a></li>
            <li><a href="#" className="hover:text-red-600">Sell Car</a></li>
            <li><a href="#" className="hover:text-red-600">Become a Dealer</a></li>
            <li><a href="#" className="hover:text-red-600">Favorites</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: oduntimilehin@gmail.com</li>
            <li>Call: 08073972555</li>
            <li>Business Hours: Mon-Fri 8AM-5PM</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-600">📘</a>
            <a href="#" className="hover:text-pink-500">📸</a>
            <a href="#" className="hover:text-blue-400">🐦</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm py-4 border-t border-gray-300 dark:border-gray-700">
        © {new Date().getFullYear()} opelaby Nigeria. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
