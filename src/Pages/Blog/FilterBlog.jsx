import { FaMagnifyingGlass } from "react-icons/fa6";

const categories = ["جميع المقالات", "إضاءة", "بورتريه", "مناظر طبيعية", "تقنيات", "معدات"];

export default function FilterBlog({ search, active, setSearch, setActive }) {
  return (
    <div className="sticky top-18 z-30 border-b border-white/10 bg-[#0B0B0B]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:w-72">
            <FaMagnifyingGlass className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input value={search} onChange={(event) => setSearch(event.target.value)} type="search" placeholder="ابحث في المقالات..." className="h-12 w-full rounded-full border border-white/10 bg-[#171717] pr-11 pl-4 text-right text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500" />
          </div>
          <div className="w-full lg:w-auto"><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-end">
            {categories.map((category) => (
              <button type="button" key={category} onClick={() => setActive(category)} className={`w-full rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 lg:w-auto ${active === category ? "border-orange-500 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20" : "border-white/10 bg-[#171717] text-gray-300 hover:border-orange-500/50 hover:text-orange-500"}`}>{category}</button>
            ))}
          </div></div>
        </div>
      </div>
    </div>
  );
}
