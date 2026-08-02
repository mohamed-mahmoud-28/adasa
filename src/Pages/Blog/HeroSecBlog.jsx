import { FaNewspaper } from "react-icons/fa6";

export default function HeroSecBlog() {
    return (
        <section className="py-30 relative overflow-hidden bg-[#0B0B0B]">

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

            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">

                {/* Badge */}
                <div className="mb-8 flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-5 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span className="font-semibold text-orange-500">مدونتنا</span>
                    <FaNewspaper className="text-orange-500" size={14} />
                </div>

                {/* Heading */}
                <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
                    استكشف <span className="text-orange-500">مقالاتنا</span>
                </h1>

                {/* Description */}
                <p className="max-w-xl leading-8 text-gray-400">
                    اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                </p>

            </div>

        </section>
    );
}