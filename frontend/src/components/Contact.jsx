import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Business District", "Technology Hub, City 12345"],
      color: "teal",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
      color: "amber",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@hiltechelectronics.com",
        "support@hiltechelectronics.com",
      ],
      color: "teal",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      color: "amber",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-teal-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your workspace? Contact us for a personalized
            consultation and discover how we can integrate furniture and
            technology for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const bgColor =
                info.color === "teal" ? "bg-teal-100" : "bg-amber-100";
              const iconColor =
                info.color === "teal" ? "text-teal-600" : "text-amber-600";

              return (
                <div
                  key={index}
                  className={`flex items-start p-6 rounded-2xl shadow-md bg-white`}
                >
                  <div
                    className={`w-12 h-12 ${bgColor} flex items-center justify-center rounded-full mr-4`}
                  >
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-700 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Quick Contact CTA */}
            <div className="mt-8 p-6 rounded-2xl shadow-md bg-teal-50 text-center">
              <MessageSquare className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-teal-700 mb-2">
                Need Immediate Help?
              </h4>
              <p className="text-teal-700 mb-4 text-sm">
                Call our support team for urgent inquiries or technical
                assistance.
              </p>
              <button className="w-full px-4 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition">
                Call Now: (555) 123-4567
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <Send className="h-6 w-6 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Send Us a Message
                </h3>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name *"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company/Organization"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-600 focus:outline-none"
                />
                <select className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-600 focus:outline-none">
                  <option value="">Select a service...</option>
                  <option value="furniture">Furniture Solutions</option>
                  <option value="technology">Technology & IT Solutions</option>
                  <option value="security">Security Solutions</option>
                  <option value="digital">Digital Solutions</option>
                  <option value="hospitality">Hospitality Solutions</option>
                  <option value="consultation">General Consultation</option>
                </select>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project or requirements..."
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-600 focus:outline-none resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
