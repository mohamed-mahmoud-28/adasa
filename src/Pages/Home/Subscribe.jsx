import { FiMail } from "react-icons/fi";

export default function NewsletterSection() {
    return (
        <section className="bg-[#0b0b0b] py-24 px-4">
            <div className="max-w-5xl mx-auto rounded-[32px] border border-white/10 bg-[#171717] px-6 md:px-5 py-8 text-center relative overflow-hidden">

                {/* Background Glow */}
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[180px]" />

                {/* Icon */}
                <div className="relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto shadow-lg shadow-orange-500/30">
                    <FiMail className="text-white text-4xl" />
                </div>

                {/* Heading */}
                <h2 className="relative z-10 mt-10 text-4xl md:text-5xl font-extrabold text-white leading-relaxed">
                    اشترك في{" "}
                    <span className="text-orange-500">نشرتنا الإخبارية</span>
                </h2>

                {/* Description */}
                <p className="relative z-10 mt-5 text-lg text-gray-400 max-w-3xl mx-auto leading-8">
                    احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
                </p>

                {/* Form */}
                <form className="relative z-10 mt-10 flex flex-col md:flex-row-reverse gap-4 justify-center">

                    <input
                        type="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        className="w-full md:w-[460px] h-16 rounded-2xl bg-[#0d0d0d] border border-white/10 px-6 text-white placeholder:text-gray-500 outline-none focus:border-orange-500 transition"
                    />

                    <button
                        type="submit"
                        className="h-16 px-12 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xl font-bold hover:scale-105 duration-300 shadow-lg shadow-orange-500/20"
                    >
                        اشترك الآن
                    </button>

                </form>

                {/* Footer */}
                <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-lg">

                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-3 rtl:space-x-reverse">

                            <img
                                src="https://i.pravatar.cc/100?img=1"
                                alt=""
                                className="w-11 h-11 rounded-full border-2 border-[#171717]"
                            />

                            <img
                                src="https://i.pravatar.cc/100?img=2"
                                alt=""
                                className="w-11 h-11 rounded-full border-2 border-[#171717]"
                            />

                            <img
                                src="https://i.pravatar.cc/100?img=3"
                                alt=""
                                className="w-11 h-11 rounded-full border-2 border-[#171717]"
                            />

                        </div>

                        <span>
                            انضم <span className="font-bold text-white">+10,000</span> مصور
                        </span>
                    </div>

                    <span>•</span>

                    <span>بدون إزعاج</span>

                    <span>•</span>

                    <span>إلغاء الاشتراك في أي وقت</span>

                </div>

            </div>
        </section>
    );
}