import { FaNewspaper } from "react-icons/fa6";

export default function HeroSecBlog() {
    return (
        <section className="relative overflow-hidden bg-[#0B0B0B] py-20 sm:py-24 lg:py-30">
            {/* Grid Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #ffffff10 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff10 1px, transparent 1px)
          `,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[90px] sm:h-[350px] sm:w-[350px] sm:blur-[120px] lg:h-[450px] lg:w-[650px] lg:blur-[170px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
                {/* Badge */}
                <div className="mb-6 flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 sm:px-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span className="text-sm font-semibold text-orange-500 sm:text-base">
                        مدونتنا
                    </span>
                    <FaNewspaper className="text-orange-500" size={14} />
                </div>

                {/* Heading */}
                <h1 className="mb-5 text-3xl font-extrabold leading-snug text-white sm:text-5xl lg:text-6xl">
                    استكشف <span className="text-orange-500">مقالاتنا</span>
                </h1>

                {/* Description */}
                <p className="max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                    اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث، وتابع أحدث
                    المقالات والنصائح التي تساعدك على تنمية مهاراتك في البرمجة والتصميم
                    والتقنيات الحديثة.
                </p>
            </div>
        </section>
    );
}