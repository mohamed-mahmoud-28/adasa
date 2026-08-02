import {
    FaBookOpen,
    FaPenNib,
    FaNewspaper,
    FaUsers,
} from "react-icons/fa6";
import HeroCompAbout from "./HeroCompAbout";

export default function HeroSecAbout() {

    const herSecComp = [
        { icon: <FaUsers />, Number: "+2 مليون", title: "قارئ" },
        { icon: <FaNewspaper />, Number: "+500", title: "مقالة" },
        { icon: <FaBookOpen />, Number: "15+", title: "تصنيفات" },
        { icon: <FaPenNib />, Number: "50+", title: "كاتب" },
    ]

    return (
        <section className="relative overflow-hidden bg-[#0b0b0b] py-25 border-b border-white/10">

            {/* Background Grid */}
            <div className="absolute inset-0 " style={{
                backgroundImage:
                    "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
                backgroundSize: "80px 80px",
            }} />

            {/* Orange Blur */}
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="relative z-10 container mx-auto px-5">

                {/* Badge */}
                <div className="flex justify-center">
                    <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs text-orange-400">
                        • • من نحن
                    </span>
                </div>

                {/* Title */}
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white md:text-5xl">
                    مهمتنا هي{" "}
                    <span className="text-orange-500">
                        الإعلام والإلهام
                    </span>
                </h2>

                {/* Description */}
                <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-8 text-gray-400">
                    مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                    المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة
                    المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى
                    عالي الجودة.
                </p>

                {/* Cards */}
                <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {herSecComp.map((item, index) =>(<HeroCompAbout key={index}  herSecComp={item} />) )}

                </div>

            </div>
        </section>
    );
}