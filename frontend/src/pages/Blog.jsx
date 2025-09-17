import { useState } from "react";
import blog1 from "../assets/image/blog.avif";
import blog2 from "../assets/image/blog.avif";
import blog3 from "../assets/image/blog.avif";
import blog4 from "../assets/image/blog.avif";
import blog5 from "../assets/image/blog.avif";
import blog6 from "../assets/image/blog.avif";

const blogPosts = [
  {
    title: "Smart Office Furniture Trends in 2025",
    excerpt:
      "Explore the latest trends in smart office furniture and how technology is revolutionizing modern workplaces.",
    image: blog1,
  },
  {
    title: "Integrating IT Systems for Seamless Workflow",
    excerpt:
      "Learn how integrating IT infrastructure can improve productivity, security, and collaboration in businesses.",
    image: blog2,
  },
  {
    title: "Digital Signage Solutions for Modern Hotels",
    excerpt:
      "Discover how hotels are leveraging digital signage to enhance guest experiences and streamline operations.",
    image: blog3,
  },
  {
    title: "Advanced Security Systems for Office Buildings",
    excerpt:
      "A guide to modern security solutions including surveillance cameras, access control, and smart monitoring systems.",
    image: blog3,
  },
];

const Blog = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-teal-600">Blog</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and trends in smart
            furniture, IT solutions, and business innovation.
          </p>
        </div>

        {/* Featured Blog */}
        <div className="mb-12 relative">
          <img
            src={blogPosts[featuredIndex].image}
            alt={blogPosts[featuredIndex].title}
            className="w-full h-96 object-cover rounded-3xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl flex items-end p-8">
            <h3 className="text-3xl md:text-4xl text-white font-bold">
              {blogPosts[featuredIndex].title}
            </h3>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setFeaturedIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === featuredIndex ? "bg-teal-600" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <button className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-md font-semibold hover:bg-teal-700 transition">
                  Read More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More CTA */}
        <div className="mt-16 text-center">
          <button className="px-6 py-3 bg-amber-700 text-white font-semibold rounded-md hover:bg-amber-800 transition">
            Load More Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
