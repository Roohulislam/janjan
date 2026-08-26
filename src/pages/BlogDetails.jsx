import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  User,
  ArrowRight,
} from "lucide-react";
import { blogPosts } from "../Data/blogData";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogPosts.find(
    (post) => post.slug === slug
  );

  if (!blog) {
    return (
      <main className="flex min-h-[2vh] items-center justify-center bg-gray-50 px-4">
       
      </main>
    );
  }

  const relatedBlogs = blogPosts
    .filter(
      (post) =>
        post.category === blog.category &&
        post.id !== blog.id
    )
    .slice(0, 3);

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="h-[420px] sm:h-[500px]">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white">
              {blog.category}
            </span>

            <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl">
              {blog.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                {blog.date}
              </div>

              <div className="flex items-center gap-2">
                <User size={18} />
                {blog.author}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          <Link
            to="/blogs"
            className="mb-10 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>

          <p className="mb-10 text-xl leading-9 text-gray-600">
            {blog.excerpt}
          </p>

          <div className="space-y-6">
            {blog.content
              .trim()
              .split("\n\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-9 text-gray-700"
                >
                  {paragraph.trim()}
                </p>
              ))}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-gray-950 p-8 text-white sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Need Professional Construction Services?
            </h2>

            <p className="mt-3 max-w-2xl text-gray-300">
              Contact Saudi Build Contracting to discuss your
              construction, roadwork, infrastructure, and
              contracting requirements.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Related Articles
            </h2>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((post) => (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-2xl bg-white shadow"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-52 w-full object-cover"
                  />

                  <div className="p-6">
                    <span className="text-sm font-semibold text-blue-600">
                      {post.category}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                      {post.title}
                    </h3>

                    <Link
                      to={`/blogs/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-600"
                    >
                      Read Article
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogDetails;