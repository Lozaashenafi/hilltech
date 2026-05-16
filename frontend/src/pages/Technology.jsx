import { motion } from "framer-motion";

export default function Technology() {
  const techItems = [
    {
      title: "Networking Solutions",
      description:
        "Reliable and secure networking infrastructure to keep your business connected.",
      image:
        "https://www.cisco.com/content/dam/cisco-cdc/site/images/legacy/assets/swa/img/anchor-info/what-is-network-infrastructure-info-628x353.jpg",
    },
    {
      title: "Cloud Computing",
      description:
        "Scale your business with secure and efficient cloud-based systems.",
      image:
        "https://www.polussolutions.com/wp-content/uploads/2024/06/Webpage-image-1.png",
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your organization with advanced security solutions and monitoring systems.",
      image:
        "https://www.athreon.com/wp-content/uploads/2024/06/Digital-padlock-on-a-blue-circuit-board-symbolizing-data-security-and-cybersecurity-protection_695267203_060324-768x366.jpeg",
    },
    {
      title: "Software Development",
      description:
        "Custom software and IT systems tailored to meet your business needs.",
      image:
        "https://www.chlsoftech.com/images/UploadedImages/thumbs/0000153_custom-software-development.png",
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
            Smart IT & Technology Solutions
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Empower your workplace with cutting-edge technology, secure systems,
            and innovative IT solutions tailored to your business.
          </p>
        </motion.div>
      </section>

      {/* Technology Items */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Technology Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {techItems.map((item, index) => (
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
          Take Your Business to the Next Level
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white text-teal-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
}
