import { FaEnvelope } from "react-icons/fa6";

export default function ContactCTA() {
    return (
        <section className="w-full bg-gradient-to-r from-[#f45d00] via-[#ff7b00] to-[#ffb300] py-20 px-6 text-center">

            <h2 className="text-3xl font-bold text-white md:text-5xl">
                لديك أسئلة؟ دعنا نتحدث!
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-orange-100 md:text-xl">
                نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
                أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                <button className="flex items-center gap-3 rounded-2xl bg-black px-10 py-4 text-lg font-semibold text-white transition hover:bg-zinc-900">
                    <FaEnvelope />
                    تواصل معنا
                </button>


                <button className="rounded-2xl border-2 border-white/60 px-10 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-orange-600">
                    تصفح المقالات
                </button>


            </div>

        </section>
    );
}