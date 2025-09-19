import { motion } from "framer-motion";

export default function Security() {
  const securityItems = [
    {
      title: "Surveillance Cameras",
      description:
        "High-definition smart cameras with remote access to keep your workplace secure.",
      image:
        "https://images.unsplash.com/photo-1581091215367-59ab6b39c8a6?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Access Control Systems",
      description:
        "Smart card readers, biometric scanners, and secure entry systems for modern offices.",
      image:
        "https://images.unsplash.com/photo-1581093588401-22c9d2a4e19a?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Alarm & Intrusion Detection",
      description:
        "24/7 intrusion detection and alarm systems designed to protect your assets.",
      image:
        "https://images.unsplash.com/photo-1581090466205-97ef0b572cd1?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Protect your digital infrastructure from data breaches and cyber threats.",
      image:
        "https://images.unsplash.com/photo-1591696331119-21b0f6c3c58e?auto=format&fit=crop&w=1000&q=80",
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
          <h1 className="text-5xl font-bold mb-4">
            Advanced Security Solutions
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Safeguard your workplace with state-of-the-art security systems,
            surveillance, and access control tailored to your needs.
          </p>
        </motion.div>
      </section>

      {/* Security Items */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Security Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {securityItems.map((item, index) => (
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
          Secure Your Business Today
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
