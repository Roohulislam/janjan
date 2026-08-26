import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "../components/blogs/BlogCard";
import { blogPosts } from "../Data/blogData";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);

  const blogsPerPage = 4;

  // ================= CATEGORIES =================

  const categories = [
    "All",
    ...new Set(blogPosts.map((blog) => blog.category)),
  ];

  // ================= FILTER BLOGS =================

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") {
      return blogPosts;
    }

    return blogPosts.filter(
      (blog) => blog.category === activeCategory
    );
  }, [activeCategory]);

  // ================= PAGINATION =================

  const totalPages = Math.ceil(
    filteredBlogs.length / blogsPerPage
  );

  const startIndex = currentPage * blogsPerPage;

  const visibleBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  // ================= PREVIOUS =================

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  // ================= NEXT =================

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, totalPages - 1)
    );
  };

  // ================= CATEGORY CHANGE =================

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(0);
  };

  return (
    <main>

      {/* =========================================
          HERO
      ========================================== */}

      <section className="relative overflow-hidden bg-gray-950 px-4 py-24 sm:px-6 lg:px-8">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl text-center">

          <span className="font-semibold uppercase tracking-[0.2em] text-blue-500">
            Saudi Build Contracting
          </span>

          <h1 className="mt-4 text-2xl font-extrabold text-white sm:text-xl lg:text-4xl">
            Construction Blog
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Industry insights, construction knowledge, project
            information, and professional guidance.
          </p>

        </div>

      </section>


      {/* =========================================
          BLOG SECTION
      ========================================== */}

      <section className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* =====================================
              SECTION TITLE
          ====================================== */}

          <div className="mb-8">

            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Latest Articles
            </span>

            <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
              Construction Insights
            </h2>

          </div>


          {/* =====================================
              CATEGORY FILTER
          ====================================== */}

          <div className="mb-10 flex flex-wrap gap-2">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() =>
                  handleCategoryChange(category)
                }
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>

            ))}

          </div>


          {/* =====================================
              BLOG GRID
          ====================================== */}

          {visibleBlogs.length > 0 ? (

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {visibleBlogs.map((blog) => (

                <BlogCard
                  key={blog.id}
                  blog={blog}
                />

              ))}

            </div>

          ) : (

            <div className="py-20 text-center">

              <h2 className="text-2xl font-bold text-gray-900">
                No articles found
              </h2>

              <p className="mt-2 text-gray-600">
                Try another category.
              </p>

            </div>

          )}


          {/* =====================================
              BOTTOM PAGINATION
          ====================================== */}

          {totalPages > 1 && (

            <div className="mt-10 flex flex-col items-center justify-center gap-4">

              {/* Page indicator */}

              <p className="text-sm text-gray-500">
                Page{" "}
                <span className="font-semibold text-gray-900">
                  {currentPage + 1}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {totalPages}
                </span>
              </p>


              {/* Arrow buttons */}

              <div className="flex items-center gap-3">

                {/* Previous */}

                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 0}
                  aria-label="Previous blogs"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-700"
                >
                  <ChevronLeft size={20} />
                </button>


                {/* Page Number */}

                <div className="flex h-11 min-w-11 items-center justify-center rounded-full bg-blue-600 px-4 text-sm font-bold text-white shadow">
                  {currentPage + 1}
                </div>


                {/* Next */}

                <button
                  onClick={handleNext}
                  disabled={
                    currentPage === totalPages - 1
                  }
                  aria-label="Next blogs"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-700"
                >
                  <ChevronRight size={20} />
                </button>

              </div>

            </div>

          )}

        </div>

      </section>

    </main>
  );
};

export default Blogs;