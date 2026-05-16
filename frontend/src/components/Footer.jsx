import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const services = [
    "Office Furniture Solutions",
    "Technology & IT Systems",
    "Security & Surveillance",
    "Digital Signage Systems",
    "Hotel Infrastructure",
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
    { name: "Get Quote", href: "#quote" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Hiltech Electronics</h3>
                <p className="text-xs text-gray-400">
                  Smart Workplace Solutions
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Integrating furniture, technology, and innovation to deliver
              complete solutions for modern businesses and institutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full hover:bg-gray-700 transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full hover:bg-gray-700 transition"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full hover:bg-gray-700 transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={`#${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-gray-400" />
                <div className="text-sm">
                  <p className="text-gray-200">123 Business District</p>
                  <p className="text-gray-400">Technology Plaza, Suite 456</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <p className="text-sm text-gray-200">+1 (555) 123-4567</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <p className="text-sm text-gray-200">info@hiltech.com</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="font-medium mb-2 text-white">Business Hours</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat: 9:00 AM - 2:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 p-8 bg-gray-800 rounded-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Get the latest updates on new products, services, and technology
              trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600"
              />
              <button className="px-6 py-2 rounded-md bg-orange-600 text-white font-medium hover:bg-orange-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 Hiltech Electronics. All rights reserved. | Privacy Policy |
            Terms of Service
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full hover:bg-gray-700 transition"
          >
            <ArrowUp className="h-5 w-5 text-gray-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
