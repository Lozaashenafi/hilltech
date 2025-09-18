import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/image/hilltech.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/#services",
      submenu: [
        "Furniture Solutions",
        "Technology & IT",
        "Security Solutions",
        "Digital Solutions",
        "Hospitality Solutions",
      ],
    },
    { name: "Products", href: "/products" },
    { name: "About", href: "/#about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];
  const submenuLinks = {
    "Furniture Solutions": "/service/furniture",
    "Technology & IT": "/service/technology",
    "Security Solutions": "/service/security",
    "Digital Solutions": "/service/digital",
    "Hospitality Solutions": "/service/hospitality",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="" className="w-40" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-amber-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>

                  {/* Submenu */}
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {item.submenu.map((subItem) => {
                          const href =
                            submenuLinks[subItem] ||
                            `#${subItem.toLowerCase().replace(/\s+/g, "-")}`;
                          return (
                            <a
                              key={subItem}
                              href={href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                              {subItem}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/#contact"
              className="px-4 py-2 rounded-md bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-200 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="/#contact"
              className="w-full block text-center px-4 py-2 rounded-md bg-amber-600 text-white text-sm font-medium hover:bg-orange-700 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
