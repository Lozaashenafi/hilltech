import {
  Armchair,
  Monitor,
  Shield,
  Wifi,
  Building2,
  ArrowRight,
  Cpu,
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      icon: Armchair,
      title: "Furniture Solutions",
      description:
        "High-quality office chairs and smart furniture with integrated technology",
      services: [
        "Office Chairs & Furniture",
        "Smart Furniture Systems",
        "Custom Solutions",
      ],
      color: "teal",
    },
    {
      icon: Monitor,
      title: "Technology & IT Solutions",
      description:
        "Complete software development, systems, and IT infrastructure",
      services: [
        "Website Development",
        "Business Applications",
        "System Integration",
      ],
      color: "amber",
    },
    {
      icon: Wifi,
      title: "Network Infrastructure",
      description:
        "Reliable networking systems to keep your business connected",
      services: [
        "Network Setup",
        "Infrastructure Design",
        "Connectivity Solutions",
      ],
      color: "teal",
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description:
        "Advanced security cameras and comprehensive office security systems",
      services: ["Security Cameras", "Surveillance Systems", "Access Control"],
      color: "amber",
    },
    {
      icon: Cpu,
      title: "Digital Solutions",
      description:
        "Modern digital display systems and advanced recording technologies",
      services: [
        "Digital Signage",
        "Court Recording Systems",
        "Display Solutions",
      ],
      color: "teal",
    },
    {
      icon: Building2,
      title: "Hospitality Solutions",
      description:
        "Complete hotel infrastructure from networking to automation",
      services: [
        "Hotel IT Systems",
        "Automation Solutions",
        "Guest Technologies",
      ],
      color: "amber",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{" "}
            <span className="text-teal-600">Business Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We integrate furniture, technology, and innovation to deliver
            complete solutions for modern businesses and institutions.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            const colorBg =
              category.color === "teal" ? "bg-teal-100" : "bg-amber-100";
            const colorIcon =
              category.color === "teal" ? "text-teal-600" : "text-amber-600";

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 p-6"
              >
                <div className="text-center mb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${colorBg}`}
                  >
                    <Icon className={`h-8 w-8 ${colorIcon}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="flex items-center text-gray-700 text-sm"
                    >
                      <ArrowRight className={`h-4 w-4 mr-2 ${colorIcon}`} />
                      {service}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 px-4 rounded-md text-white ${
                    category.color === "teal"
                      ? "bg-teal-600 hover:bg-teal-700"
                      : "bg-amber-600 hover:bg-amber-700"
                  } transition`}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-teal-600 rounded-2xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Workspace?
          </h3>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Let us create a custom solution that perfectly integrates furniture,
            technology, and security for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition">
              Get Custom Quote
            </button>
            <button className="px-8 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-teal-600 transition">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
