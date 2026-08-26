import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { blogPosts } from "../../Data/blogData";

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogPosts.map((blog) => blog.category)),
  ];

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") {
      return blogPosts;
    }

    return blogPosts.filter(
      (blog) => blog.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Our Blog
          </span>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Construction Insights & News
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore construction insights, industry knowledge,
            project information, and the latest developments from
            Saudi Build Contracting.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 shadow hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-7 py-3.5 font-semibold text-white transition-all hover:bg-blue-600"
          >
            View All Blogs
            <ArrowRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;