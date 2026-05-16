import { motion } from "framer-motion";

export default function Hospitality() {
  const hospitalityItems = [
    {
      title: "Smart Hotel Rooms",
      description:
        "Enhance guest comfort with intelligent room controls, automated lighting, and personalized services.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Restaurant Tech",
      description:
        "Streamline dining experiences with digital menus, ordering systems, and contactless payments.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Event & Conference Solutions",
      description:
        "Equip event spaces with advanced AV systems, digital signage, and collaboration tools.",
      image:
        "https://www.ems-events.co.uk/wp-content/uploads/2025/04/A-Step-by-step-Guide-to-Plan-Your-Av-Setup-for-a-Conference-Room.webp",
    },
    {
      title: "Guest Experience Platforms",
      description:
        "Deliver memorable stays with mobile apps, digital concierge services, and loyalty integrations.",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
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
          <h1 className="text-5xl font-bold mb-4">Hospitality Solutions</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Innovative technologies and systems designed to elevate guest
            experiences in hotels, restaurants, and event spaces.
          </p>
        </motion.div>
      </section>

      {/* Hospitality Items */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Hospitality Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {hospitalityItems.map((item, index) => (
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
      <section className="py-20 bg-gradient-to-r from-amber-600 to-teal-700 text-white text-center">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Redefine Guest Experiences
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white text-amber-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
}
