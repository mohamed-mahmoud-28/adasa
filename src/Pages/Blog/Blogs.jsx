import { useState } from "react";
import { FaBars, FaTableCells, FaClock, FaChevronLeft, FaChevronRight , FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Blogs({ posts, search, active, view, setView,setActive ,setSearch}) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const searchText = search.trim().toLowerCase();
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = active === "جميع المقالات" || post.category === active;
    const matchesSearch = post.title.toLowerCase().includes(searchText)
      || post.excerpt.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });
  const totalPages = Math.max(Math.ceil(filteredPosts.length / postsPerPage), 1);
  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(firstPostIndex, firstPostIndex + postsPerPage);

  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function clearFilters() {
  setActive("جميع المقالات");
  setSearch("");
  setCurrentPage(1);
}

  

  return (
    <div className="bg-[#0B0B0B] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-gray-400">عرض {filteredPosts.length} مقالات</p>

          <div className="flex flex-row-reverse items-center gap-2">

            <button
            onClick={() => clearFilters()}
            type="button" aria-label="مسح الفلاتر"  className={`flex  items-center justify-center    text-gray-400 transition-all duration-300   hover:text-orange-500 ${active === "جميع المقالات" ? "hidden" : "flex"} `}>
             <FaXmark  size={15}/> {" "} مسح الفلاتر
            </button>

            <button type="button" aria-label="عرض القائمة" onClick={() => setView("list")} className={`flex h-11 w-11 items-center justify-center rounded-xl ${view === "list" ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20" : "border border-white/10 bg-[#171717] text-gray-400"}`}>
              <FaBars size={16} />
            </button>
            <button type="button" aria-label="عرض الشبكة" onClick={() => setView("grid")} className={`flex h-11 w-11 items-center justify-center rounded-xl ${view === "list" ? "border border-white/10 bg-[#171717] text-gray-400" : "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"}`}>
              <FaTableCells size={16} />
            </button>

            

          </div>
        </div>

        <div className={view === "list" ? "flex flex-col gap-5" : "grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3"}>
          {currentPosts.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`} className={`group w-full overflow-hidden rounded-2xl border border-white/10 bg-[#131313] transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 ${view === "list" ? "flex flex-col md:h-60 md:flex-row" : "block md:max-w-sm"}`}>
              <div className={`relative overflow-hidden ${view === "list" ? "h-52 shrink-0 md:h-full md:w-80" : "h-52"}`}>
                <img src={blog.image} alt={blog.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{blog.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
                  <FaClock size={12} />
                  <span>{blog.readTime}</span><span>•</span><span>{blog.date}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold leading-8 text-white transition-colors duration-300 group-hover:text-orange-500">{blog.title}</h3>
                <p className="mb-5 line-clamp-2 leading-7 text-gray-400">{blog.excerpt}</p>
                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3">
                    <img src={blog.author.avatar} alt={blog.author.name} className="h-10 w-10 rounded-full object-cover" />
                    <div className="text-right"><p className="text-sm font-semibold text-white">{blog.author.name}</p><p className="text-xs text-gray-50">{blog.author.role}</p></div>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/40 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white"><FaChevronLeft size={12} /></div>
                </div>
              </div>
            </Link>
          ))}

          {currentPosts.length === 0 && <p className="col-span-full py-12 text-center text-gray-400">لا توجد مقالات تطابق بحثك.</p>}
        </div>

        <div className="flex flex-col items-center justify-center gap-6 py-20">
          <div className="flex items-center gap-3">
            <button type="button" aria-label="الصفحة السابقة" disabled={currentPage === 1} onClick={goToPreviousPage} className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#161616] text-gray-400 transition-all duration-300 hover:border-orange-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"><FaChevronRight size={18} /></button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button type="button" key={index + 1} onClick={() => setCurrentPage(index + 1)} className={`flex h-14 w-14 items-center justify-center rounded-2xl border font-semibold transition-all duration-300 ${currentPage === index + 1 ? "border-orange-500 bg-orange-500 text-white" : "border-white/10 bg-[#161616] text-gray-300 hover:border-orange-500 hover:text-white"}`}>{index + 1}</button>
            ))}
            <button type="button" aria-label="الصفحة التالية" disabled={currentPage === totalPages} onClick={goToNextPage} className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#161616] text-gray-400 transition-all duration-300 hover:border-orange-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"><FaChevronLeft size={18} /></button>
          </div>
          <p className="text-sm text-gray-500">صفحة <span className="font-semibold text-orange-500">{currentPage}</span> من <span className="font-semibold text-white">{totalPages}</span></p>
        </div>
      </div>
    </div>
  );
}
