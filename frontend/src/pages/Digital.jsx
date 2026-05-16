import { motion } from "framer-motion";

export default function Digital() {
  const digitalItems = [
    {
      title: "Digital Signage",
      description:
        "Transform customer engagement with dynamic, interactive digital signage solutions.",
      image:
        "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Interactive Displays",
      description:
        "Smart boards and touch-enabled displays designed for collaboration and presentations.",
      image:
        "https://m.media-amazon.com/images/I/61WKdN0NLaL._UF1000,1000_QL80_.jpg",
    },
    {
      title: "Video Walls",
      description:
        "Create immersive experiences with high-resolution video wall technology for retail and business spaces.",
      image:
        "https://images.unsplash.com/photo-1579562243430-4732bcb09d91?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Content Management",
      description:
        "Easily manage, schedule, and update your digital content across multiple screens and locations.",
      image:
        "https://www.yodeck.com/wp-content/uploads/2023/11/7-Steps-to-Effective-Content-Scheduling-Strategies_Blog-header.png",
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
          <h1 className="text-5xl font-bold mb-4">Digital Solutions</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Empower your business with next-generation digital displays,
            signage, and interactive technologies designed for engagement and
            growth.
          </p>
        </motion.div>
      </section>

      {/* Digital Items */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Digital Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {digitalItems.map((item, index) => (
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
          Go Digital With Us
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
