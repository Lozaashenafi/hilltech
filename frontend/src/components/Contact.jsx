import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle } from "lucide-react";
import { getPendingContactFill } from "../doweit";

// Valid <select> values for the "service" dropdown.
const SERVICE_VALUES = [
  "furniture",
  "technology",
  "security",
  "digital",
  "hospitality",
  "consultation",
];

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

// The voice assistant may pass a service in free-form text ("IT solutions").
// Snap it to one of the dropdown's real option values.
function normalizeFill(raw) {
  const out = {};
  for (const [k, v] of Object.entries(raw || {})) {
    if (v === undefined || v === null) continue;
    if (k === "service") {
      const s = String(v).toLowerCase();
      out.service = SERVICE_VALUES.find((opt) => s.includes(opt)) || "consultation";
    } else if (k in EMPTY_FORM) {
      out[k] = String(v);
    }
  }
  return out;
}

const Contact = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  // On mount, apply anything the assistant queued before this page existed
  // (the "take me to contact AND fill it" case — fill fires before mount).
  useEffect(() => {
    const pending = getPendingContactFill();
    if (pending) setForm((f) => ({ ...f, ...normalizeFill(pending) }));
  }, []);

  // Live bridge: the Doweit `fillContactForm` / `submitContactForm` actions
  // dispatch these window events.
  useEffect(() => {
    const onFill = (e) => {
      setForm((f) => ({ ...f, ...normalizeFill(e.detail || {}) }));
      setSubmitted(false);
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const onSubmit = () => formRef.current?.requestSubmit();

    window.addEventListener("hilltech:fill-contact", onFill);
    window.addEventListener("hilltech:submit-contact", onSubmit);
    return () => {
      window.removeEventListener("hilltech:fill-contact", onFill);
      window.removeEventListener("hilltech:submit-contact", onSubmit);
    };
  }, []);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend in this demo — just show a confirmation.
    setSubmitted(true);
  };

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

  const inputClass =
    "w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-600 focus:outline-none";

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

              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <CheckCircle className="h-16 w-16 text-teal-600 mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600 max-w-sm">
                    Thanks{form.firstName ? `, ${form.firstName}` : ""}! The
                    HillTech team has received your message and will be in touch
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(EMPTY_FORM);
                      setSubmitted(false);
                    }}
                    className="mt-6 px-6 py-2 text-teal-600 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={update("firstName")}
                      placeholder="First Name *"
                      required
                      className={inputClass}
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={update("lastName")}
                      placeholder="Last Name *"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="Email Address *"
                      required
                      className={inputClass}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="Phone Number"
                      className={inputClass}
                    />
                  </div>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={update("company")}
                    placeholder="Company/Organization"
                    className={inputClass}
                  />
                  <select
                    name="service"
                    value={form.service}
                    onChange={update("service")}
                    className={inputClass}
                  >
                    <option value="">Select a service...</option>
                    <option value="furniture">Furniture Solutions</option>
                    <option value="technology">Technology & IT Solutions</option>
                    <option value="security">Security Solutions</option>
                    <option value="digital">Digital Solutions</option>
                    <option value="hospitality">Hospitality Solutions</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update("message")}
                    rows={6}
                    placeholder="Tell us about your project or requirements..."
                    className={`${inputClass} resize-none`}
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
