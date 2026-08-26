import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogCard = ({ blog }) => {
  return (
    <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-gray-800 shadow-md">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex h-[250px] flex-col p-6">

        <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          {blog.title}
        </h3>

        <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {blog.excerpt}
        </p>

        <div className="mt-auto">
          <Link
            to={`/blogs/${blog.slug}`}
            className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3"
          >
            Read More
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>

    </article>
  );
};

export default BlogCard;