import {
    FaArrowLeft,
    FaFolderOpen,
    FaInfoCircle,
    FaNewspaper,
    FaPenNib,
    FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import HeroSecComponent from "./HeroSecComponent";

export default function Hero() {
    const herSecComp = [
        { icon: <FaNewspaper />, Number: "+50", title: "مقالة" },
        { icon: <FaUsers />, Number: "+10ألف", title: "قارئ" },
        { icon: <FaFolderOpen />, Number: "4", title: "تصنيفات" },
        { icon: <FaPenNib />, Number: "6", title: "كاتب" }
    ]
    return (
        <section className="py-16 relative overflow-hidden bg-[#0B0B0B] min-h-[calc(90vh-2px)]">
            {/* Grid Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />
            {/* Blur */}
            <div className="absolute left-0 top-24 w-[320px] h-[320px] rounded-full bg-orange-500/10 blur-[140px]" />
            <div className="absolute right-0 bottom-0 w-[320px] h-[320px] rounded-full bg-yellow-500/10 blur-[140px]" />
            <div className="relative container mx-auto px-5">
                <div className="flex flex-col items-center justify-center text-center pt-16 pb-16">
                    {/* Badge */}
                    <div className="flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                        <p className="text-xs font-semibold text-white">
                            مرحباً بك في عدسة
                        </p>
                        <span className="h-2 w-2 rounded-full bg-orange-700"></span>
                    </div>
                    {/* Title */}
                    <h1 className="mt-8 text-white font-extrabold leading-tight text-4xl md:text-6xl">
                        اكتشف <span className="text-orange-500">فن</span>
                        <br />
                        التصوير الفوتوغرافي
                    </h1>
                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base text-gray-400 leading-8">
                        انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك
                        في التصوير وصناعة صور احترافية مذهلة.
                    </p>
                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <Link to="/blog" className="flex items-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 transition px-7 py-3 text-sm font-bold text-white">
                            استكشف المقالات
                            <FaArrowLeft />
                        </Link>
                        <Link to="/blog" className="flex items-center gap-2 rounded-full border border-gray-700 bg-[#171717] hover:border-orange-500 transition px-7 py-3 text-sm font-bold text-white">
                            <FaInfoCircle />
                            اعرف المزيد
                        </Link>
                    </div>
                    {/* Stats */}
                    <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
                        {herSecComp.map((item, index) => (<HeroSecComponent herSecComp={item} key={index} />))}
                    </div>
                </div>
            </div>
        </section>
    );
}