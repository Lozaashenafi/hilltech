import { motion } from "framer-motion";

export default function FurniturePage() {
  const furnitureItems = [
    {
      title: "Ergonomic Office Chair",
      description:
        "Experience comfort and productivity with our modern ergonomic office chairs.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Smart Standing Desk",
      description:
        "Height-adjustable desks designed for healthier and more dynamic workspaces.",
      image:
        "https://yo-yodesk.co.uk/cdn/shop/collections/smart-desk.png?v=1755500197&width=2000",
    },
    {
      title: "Collaborative Meeting Table",
      description:
        "Beautifully crafted tables to encourage collaboration and creativity.",
      image:
        "https://www.custom-conference-tables.com/wp-content/uploads/2025/01/U_Shape_Table_Heilman-Center_01-1-620x410.jpg",
    },
    {
      title: "Modern Lounge Sofa",
      description:
        "Relax in style with our contemporary lounge furniture for offices.",
      image:
        "https://images.stockcake.com/public/2/f/4/2f4c17d6-3ab5-4cce-8def-6a7e0a979a4f_large/modern-office-lounge-stockcake.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-teal-800 to-amber-700 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Smart Furniture Solutions</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Transform your workplace with ergonomic, smart, and stylish
            furniture tailored for modern offices.
          </p>
        </motion.div>
      </section>

      {/* Furniture Items */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Collection
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {furnitureItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-700 to-amber-600 text-white text-center">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Upgrade Your Office?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white text-teal-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
}
