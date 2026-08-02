import { Link } from "react-router-dom";

export default function RelatedBlogs({ blogs, currentSlug }) {
  // استبعاد المقال الحالي وإظهار أول 3 مقالات
  const currentBlog = blogs.find((blog) => blog.slug === currentSlug);
  const sameCategoryBlogs = blogs.filter(
    (blog) => blog.slug !== currentSlug && blog.category === currentBlog?.category,
  );
  const otherBlogs = blogs.filter(
    (blog) => blog.slug !== currentSlug && blog.category !== currentBlog?.category,
  );
  const relatedBlogs = [...sameCategoryBlogs, ...otherBlogs].slice(0, 3);

  return (
    <section className="mt-20 border-t border-[#262626] pt-14">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">
            مقالات قد تعجبك
          </h2>

          <p className="mt-2 text-gray-400">
            استكشف المزيد من المقالات المميزة
          </p>
        </div>

        <Link
          to="/blog"
          className="rounded-xl border border-orange-500 px-5 py-3 text-orange-500 transition hover:bg-orange-500 hover:text-white"
        >
          عرض الكل
        </Link>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {relatedBlogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.slug}`}
            className="group overflow-hidden rounded-2xl border border-[#262626] bg-[#111] transition duration-300 hover:border-orange-500"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
                {blog.category}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">
              <h3 className="line-clamp-2 text-xl font-bold text-white transition group-hover:text-orange-500">
                {blog.title}
              </h3>

              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />

                  <span>{blog.author.name}</span>
                </div>

                <span>{blog.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
