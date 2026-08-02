
import {
  Camera,
  Mountain,
  Settings,
  SlidersHorizontal,
  User,
} from "lucide-react";
import ExploreCard from "./ExploreCard";

const categories = [
  {
    title: "تقنيات",
    count: 2,
    icon: <SlidersHorizontal size={24} />,
    slug: "تقنيات",
  },
  {
    title: "مناظر طبيعية",
    count: 1,
    icon: <Mountain size={24} />,
    slug: "مناظر طبيعية",
  },
  {
    title: "بورتريه",
    count: 1,
    icon: <User size={24} />,
    slug: "بورتريه",
  },
  {
    title: "إضاءة",
    count: 1,
    icon: <Camera size={24} />,
    slug: "إضاءة",
  },
  {
    title: "معدات",
    count: 2,
    icon: <Settings size={24} />,
    slug: "معدات",
  },
];

export default function Explore() {
  return (
    <section className="bg-[#0f0f10] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-500/10 px-6 py-3">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>

            <p className="text-sm font-semibold text-orange-400">
              التصنيفات
            </p>

            <span className="h-2 w-2 rounded-full bg-orange-700"></span>
          </div>

          <h2 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            استكشف حسب الموضوع
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <ExploreCard
              key={category.slug}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
