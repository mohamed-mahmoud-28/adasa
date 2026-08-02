import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function ExploreCard({ categories }) {
    const { slug, icon, title, count } = categories
    return (
        <Link
            to={`/blog?category=${slug}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#171717] transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-400 hover:shadow-[0_0_25px_rgba(249,115,22,.35)]"
        >
            <div className="flex h-40 flex-col justify-between p-4">
                {/* Top */}
                <div className="flex items-start justify-between">
                    <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-3 text-orange-500 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/20 group-hover:text-white">
                        {icon}
                    </div>

                    <div className="translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        <div className="rounded-full bg-white/20 p-2">
                            <ChevronLeft size={16} className="text-white" />
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div>
                    <h3 className="text-xl font-bold text-white">
                        {title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 transition-colors duration-300 group-hover:text-white/80">
                        {count} مقالة
                    </p>
                </div>
            </div>
        </Link>
    );
}