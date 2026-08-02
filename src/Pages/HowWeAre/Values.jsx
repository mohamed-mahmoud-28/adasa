import ValueCard from "./ValueCard";
import {
    FaBullseye,
    FaBolt,
    FaHandshake,
    FaRotate,
} from "react-icons/fa6";




export default function Values() {

    const valuesData = [
        {
            id: 1,
            icon: <FaBullseye />,
            title: "الجودة أولاً",
            desc: "محتوى مدروس ومكتوب بخبرة",
        },
        {
            id: 2,
            icon: <FaBolt />,
            title: "تركيز عملي",
            desc: "أمثلة واقعية يمكنك تطبيقها اليوم",
        },
        {
            id: 3,
            icon: <FaHandshake />,
            title: "المجتمع",
            desc: "تعلّم مع آلاف المصورين",
        },
        {
            id: 4,
            icon: <FaRotate />,
            title: "دائمًا مُحدث",
            desc: "أحدث الاتجاهات وأفضل الممارسات",
        },
    ];


    return (
        <section className="bg-[#111] py-24">

            <div className="container mx-auto px-5">

                {/* Title */}
                <div className="text-center">

                    <div className="inline-flex items-center gap-4">

                        <span className="h-10 w-1 rounded-full bg-orange-500"></span>

                        <h2 className="text-4xl font-bold text-white">
                            قيمنا
                        </h2>

                        <span className="h-10 w-1 rounded-full bg-orange-500"></span>

                    </div>

                    <p className="mt-5 text-lg text-gray-400">
                        المبادئ التي توجه كل ما نقوم بإنشائه
                    </p>

                </div>

                {/* Cards */}

                <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    {valuesData.map((item) => (
                        <ValueCard
                            key={item.id}
                            item={item}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}