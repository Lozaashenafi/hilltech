import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

import heroOffice from "../assets/image/hero-office.jpg";
import heroConference from "../assets/image/hero-conference.jpg";
import heroTech from "../assets/image/hero-tech.jpg";
import heroHotel from "../assets/image/hero-hotel.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroOffice,
      motto: "Smart Solutions for Modern Workplaces",
      subtitle: "From innovative furniture to cutting-edge technology",
    },
    {
      image: heroConference,
      motto: "Connecting Business Innovation",
      subtitle: "Advanced networking and communication systems",
    },
    {
      image: heroTech,
      motto: "Digital Transformation Made Simple",
      subtitle: "Complete IT infrastructure and security solutions",
    },
    {
      image: heroHotel,
      motto: "Hospitality Technology Excellence",
      subtitle: "Creating seamless guest experiences through innovation",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* ===== Top Slider with Changing Text ===== */}
      <div className="relative h-screen w-full flex items-center justify-center">
        <img
          src={slides[currentSlide].image}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Text Overlay */}
        <div className="relative z-10 max-w-3xl text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {slides[currentSlide].motto}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-orange-500" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ===== Bottom Static Section ===== */}
      <div className="relative z-20 bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg flex items-center">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-300 text-gray-800 hover:bg-gray-100 px-8 py-4 text-lg rounded-lg flex items-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                🪑 Smart Furniture
              </h3>
              <p className="text-gray-700">
                Technology-integrated office chairs and furniture solutions
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                💻 IT Solutions
              </h3>
              <p className="text-gray-700">
                Complete software, networking, and infrastructure systems
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                🔒 Security Systems
              </h3>
              <p className="text-gray-700">
                Advanced surveillance and office security implementations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
