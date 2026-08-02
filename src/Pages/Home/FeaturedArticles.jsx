import { Link } from "react-router-dom";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import BlogsData from "../../Data/BlogsData.json"
export default function FeaturedSection() {

    const featuredBlogs = BlogsData.posts
        .filter((blog) => blog.featured)
        .slice(0, 3);
    return (
        <section className="relative bg-[#0B0B0B] py-16 lg:py-20">
            <div className="container mx-auto px-5">

                {/* Header */}
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-around ">

                    <div className="text-center md:text-right">

                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2">

                            <span className="h-2 w-2 rounded-full bg-orange-500"></span>

                            <span className="text-xs font-semibold text-orange-500">
                                مميز
                            </span>

                            <span className="h-2 w-2 rounded-full bg-orange-700"></span>

                        </div>

                        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">
                            مقالات مختارة
                        </h2>

                        <p className="mt-3 text-sm md:text-base text-gray-400">
                            محتوى منتقى لبدء رحلة تعلمك
                        </p>

                    </div>

                    <Link
                        to="/blog"
                        className="flex items-center gap-2 self-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                    >
                        <FaArrowLeft />
                        عرض الكل
                    </Link>

                </div>

                {/* Cards */}
                <div className="mt-10 w-full md:w-[67%] mx-auto space-y-8">

                    {featuredBlogs.map((blog) => (
                        <Link
                            key={blog.id}
                            to={`/blog/${blog.slug}`}
                            className="group flex flex-col overflow-hidden rounded-[30px] border border-[#252525] bg-[#151515] transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_20px_60px_rgba(249,115,22,.15)] lg:flex-row"
                        >
                            {/* Image */}
                            <div className="relative h-60 w-full overflow-hidden sm:h-72 md:h-80 lg:h-auto lg:w-2/5">

                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />

                                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white">
                                    مميز
                                    <FaStar className="text-xs" />
                                </div>

                            </div>

                            {/* Content */}
                            <div className="flex w-full flex-col justify-between p-5 text-right sm:p-6 lg:w-3/5 lg:p-8">

                                <div>

                                    {/* Category + Time */}
                                    <div className="mb-5 flex flex-wrap items-center justify-end gap-3 text-sm text-gray-400">

                                        <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 font-semibold text-orange-500">
                                            {blog.category}
                                        </span>

                                        <span>⏱ {blog.readTime}</span>

                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-extrabold leading-relaxed text-white transition duration-300 group-hover:text-orange-500 lg:text-3xl">
                                        {blog.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-5 line-clamp-2 text-sm leading-8 text-gray-400 lg:text-base">
                                        {blog.excerpt}
                                    </p>

                                </div>

                                {/* Footer */}
                                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">

                                    {/* Author + Read More */}
                                    <div className="flex items-center gap-[142px] md:gap-[70px] xl:gap-[260px]">

                                        {/* Author */}
                                        <div className="flex flex-row-reverse items-center gap-3">

                                            <img
                                                src={blog.author.avatar}
                                                alt={blog.author.name}
                                                className="h-12 w-12 rounded-full border-2 border-orange-500 object-cover lg:h-14 lg:w-14"
                                            />

                                            <div className="text-right">
                                                <h4 className="font-bold text-white">
                                                    {blog.author.name}
                                                </h4>

                                                <p className="text-sm text-gray-400">
                                                    {blog.date}
                                                </p>
                                            </div>

                                        </div>

                                        {/* Read More */}
                                        <div className="flex items-center gap-2 font-bold text-orange-500 transition-all duration-300 group-hover:gap-4">
                                            اقرأ المقال
                                            <FaArrowLeft />
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}
