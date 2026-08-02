import { FaNewspaper, FaHouse } from "react-icons/fa6";
import { FaRegFrown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0B0B0B] px-6 py-20">

            {/* Grid background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[170px]" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">

                {/* 404 */}
                <h1 className="bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-[120px] font-extrabold leading-none text-transparent sm:text-[150px]">
                    404
                </h1>

                {/* Icon */}
                <div className="relative my-8">
                    <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-orange-500" />
                    <div className="absolute -bottom-1 -left-3 h-3 w-3 rounded-full bg-yellow-600" />
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10">
                        <FaRegFrown className="text-orange-500" size={42} />
                    </div>
                </div>

                {/* Title */}
                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                    عفواً! الصفحة غير موجودة
                </h2>

                {/* Description */}
                <p className="mb-10 max-w-lg leading-8 text-gray-400">
                    الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى
                    المسار الصحيح.
                </p>

                {/* Buttons */}
                <div className="mb-14 flex flex-col gap-4 sm:flex-row">

                    
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/40"
                    >
                        <FaHouse size={16} />
                        الذهاب للرئيسية
                    </Link>

                    <Link
                        to="/blog"
                        className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500 hover:text-orange-500"
                    >
                        <FaNewspaper size={16} />
                        تصفح المقالات
                    </Link>


                </div>

                {/* Divider + suggested links */}
                <div className="w-full max-w-md border-t border-white/10 pt-8">

                    <p className="mb-4 text-gray-500">قد تجد هذه مفيدة:</p>

                    <div className="flex items-center justify-center gap-4 text-sm">
                        <Link to="/blog" className="text-orange-500 transition hover:text-orange-400">
                            المدونة
                        </Link>
                        <span className="text-gray-600">·</span>
                        <Link to="/about" className="text-orange-500 transition hover:text-orange-400">
                            من نحن
                        </Link>
                        <span className="text-gray-600">·</span>
                        <Link to="/privacy-policy" className="text-orange-500 transition hover:text-orange-400">
                            الخصوصية
                        </Link>
                    </div>

                </div>

            </div>

        </section>
    );
}
