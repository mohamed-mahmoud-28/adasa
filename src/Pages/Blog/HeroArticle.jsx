// src/Components/BlogDetails/HeroArticle.jsx

import { Link } from "react-router-dom";
import {
  FaCalendar,
  FaClock,
  FaHouse,
  FaChevronLeft,
} from "react-icons/fa6";

export default function HeroArticle({ post }) {
  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden">

      {/* Background Image */}
      <img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 to-transparent" />

      {/* Breadcrumb */}
      <div className="absolute top-8 left-0 right-0 px-5">

        <div className="max-w-7xl mx-auto">

          <nav className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 backdrop-blur-md px-5 py-3 text-sm">

            <Link
              to="/"
              className="text-neutral-400 hover:text-white transition"
            >
              <FaHouse />
            </Link>

            <FaChevronLeft className="text-[11px] text-neutral-600" />

            <Link
              to="/blog"
              className="text-neutral-400 hover:text-white transition"
            >
              المدونة
            </Link>

            <FaChevronLeft className="text-[11px] text-neutral-600" />

            <span className="text-orange-500 font-semibold truncate max-w-[180px]">
              {post.category}
            </span>

          </nav>

        </div>

      </div>

      {/* Hero Content */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-14">

        <div className="max-w-7xl mx-auto">

          {/* Category + Info */}

          <div className="flex flex-wrap items-center gap-4 mb-7">

            <span className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white">
              {post.category}
            </span>

            <div className="flex flex-wrap items-center gap-5 text-sm text-neutral-300">

              <div className="flex items-center gap-2">
                <FaCalendar className="text-orange-500" />
                {post.date}
              </div>

              <div className="flex items-center gap-2">
                <FaClock className="text-orange-500" />
                {post.readTime}
              </div>

            </div>

          </div>

          {/* Title */}

          <h1 className="max-w-5xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">

            {post.title}

          </h1>

          {/* Author */}

          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg px-5 py-4">

            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-16 w-16 rounded-full object-cover ring-2 ring-orange-500/40"
            />

            <div>

              <h3 className="font-bold text-lg text-white">
                {post.author.name}
              </h3>

              <p className="text-sm text-neutral-400">
                {post.author.role}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
