import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "Constantly integrating the latest technology with traditional furniture solutions",
    },
    {
      icon: Award,
      title: "Quality",
      description:
        "Premium materials and expert craftsmanship in every product and service",
    },
    {
      icon: Heart,
      title: "Trust",
      description:
        "Building lasting relationships through reliable service and transparent communication",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "Working closely with clients to understand and exceed their expectations",
    },
  ];

  const achievements = [
    "15+ Years of Industry Experience",
    "500+ Successful Projects Completed",
    "Technology Integration Specialists",
    "Comprehensive Solution Provider",
    "24/7 Support & Maintenance",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-teal-600">Hiltech Electronics</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pioneering the integration of furniture, technology, and innovation
            to create smart, secure, and connected business environments.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Text & Achievements */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Creating Smart Environments for Modern Business
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Hiltech Electronics, we believe that the future of business
              environments lies in the seamless integration of furniture,
              technology, and innovation. We don't just supply products—we
              create comprehensive solutions that enhance productivity,
              security, and comfort.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              From smart furniture with integrated technology to complete IT
              infrastructure and security systems, we handle every aspect of
              your business environment. Our expertise spans across office
              furniture, software development, networking, security systems, and
              specialized solutions for hospitality and legal sectors.
            </p>

            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-teal-600 mr-3" />
                <h4 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To revolutionize business environments by seamlessly integrating
                cutting-edge technology with premium furniture solutions,
                creating spaces that enhance productivity, security, and user
                experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-amber-600 mr-3" />
                <h4 className="text-2xl font-bold text-gray-900">Our Vision</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the leading provider of integrated furniture and
                technology solutions, setting new standards for smart,
                connected, and secure business environments across all
                industries.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const color =
                index % 2 === 0 ? "text-teal-600" : "text-amber-600";
              const bgColor = index % 2 === 0 ? "bg-teal-100" : "bg-amber-100";

              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${bgColor}`}
                  >
                    <Icon className={`h-8 w-8 ${color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
