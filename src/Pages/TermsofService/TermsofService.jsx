import {
    FaFileAlt,
    FaExclamationTriangle,
    FaTimes,
    FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Terms() {
    const rules = [
        "تعديل أو نسخ المواد",
        "استخدام المواد لأي غرض تجاري أو للعرض العام",
        "محاولة فك أو عكس هندسة أي برنامج على الموقع",
        "إزالة أي حقوق نشر أو علامات ملكية من المواد",
        "نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر",
    ];

    const userContentRules = [
        "أن يكون تشهيرياً أو فاحشاً أو مسيئاً",
        "انتهاك حقوق الملكية الفكرية للآخرين",
        "احتواء فيروسات أو أكواد ضارة",
        "انتهاك أي قوانين أو لوائح معمول بها",
        "الإعلان عن منتجات أو خدمات غير مصرح بها",
    ];

    return (
        <main className="flex-grow pt-20">
            <div className="bg-[#0a0a0a] min-h-screen text-white">

                {/* Header */}
                <header className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[#0a0a0a]" />

                    <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-[100px]" />
                    </div>


                    <div className="relative max-w-4xl mx-auto px-4 text-center">

                        <nav className="flex justify-center items-center gap-2 text-sm mb-8">

                            <Link
                                to="/"
                                className="text-neutral-400 hover:text-white transition"
                            >
                                الرئيسية
                            </Link>

                            <span className="text-neutral-600 rotate-180">
                                &gt;
                            </span>

                            <span className="text-orange-500 font-medium">
                                شروط الخدمة
                            </span>

                        </nav>


                        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">

                            <FaFileAlt className="text-orange-500 text-3xl" />

                        </div>


                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            شروط الخدمة
                        </h1>

                        <p className="text-neutral-400 text-lg">
                            آخر تحديث: 15 يناير 2026
                        </p>

                    </div>

                </header>



                <div className="max-w-4xl mx-auto px-4 py-16">


                    {/* Alert */}
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-12">

                        <div className="flex gap-4">

                            <FaExclamationTriangle className="text-yellow-500 text-2xl" />

                            <div>

                                <h3 className="font-semibold text-yellow-500 mb-1">
                                    إشعار مهم
                                </h3>

                                <p className="text-yellow-300/80 text-sm">
                                    يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا.
                                    بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.
                                </p>

                            </div>

                        </div>

                    </div>



                    <div className="space-y-12">


                        <Section
                            number="1"
                            title="الموافقة على الشروط"
                        >
                            <p>
                                بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة
                                هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي
                                من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع.
                            </p>
                        </Section>



                        <Section
                            number="2"
                            title="رخصة الاستخدام"
                        >

                            <p>
                                يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض
                                الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.
                            </p>


                            <h3 className="text-neutral-300 font-medium my-4">
                                بموجب هذا الترخيص لا يجوز لك:
                            </h3>


                            <List items={rules} />

                        </Section>



                        <Section
                            number="3"
                            title="إخلاء المسؤولية"
                        >

                            <p>
                                المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي".
                                عدسة لا يقدم أي ضمانات، صريحة أو ضمنية.
                            </p>

                        </Section>



                        <Section
                            number="4"
                            title="القيود"
                        >

                            <p>
                                في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي
                                أضرار ناتجة عن استخدام الموقع.
                            </p>

                        </Section>




                        <Section
                            number="5"
                            title="محتوى المستخدم"
                        >

                            <p>
                                إذا نشرت محتوى على موقعنا، فإنك تمنحنا ترخيصاً غير حصري
                                وعالمي ومجاني لاستخدام هذا المحتوى.
                            </p>


                            <h3 className="text-neutral-300 font-medium my-4">
                                يجب ألا يكون محتواك:
                            </h3>


                            <List items={userContentRules} />

                        </Section>



                        <Section
                            number="6"
                            title="التعديلات"
                        >

                            <p>
                                قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار.
                            </p>

                        </Section>




                        <Section
                            number="7"
                            title="معلومات الاتصال"
                        >

                            <p>
                                إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:
                            </p>


                            <a
                                href="mailto:hello@adasah.com"
                                className="inline-flex items-center gap-2 text-orange-500 mt-3"
                            >

                                <FaEnvelope />
                                hello@adasah.com

                            </a>


                        </Section>


                    </div>



                    <div className="mt-16 pt-8 border-t border-[#262626]">

                        <p className="text-neutral-500 text-sm text-center">

                            باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه.
                            انظر أيضاً

                            <Link
                                to="/privacy-policy"
                                className="text-orange-500 mx-1"
                            >
                                سياسة الخصوصية
                            </Link>

                        </p>

                    </div>


                </div>

            </div>
        </main>
    );
}




function Section({ number, title, children }) {

    return (

        <section>

            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">

                <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg text-sm">

                    {number}

                </span>

                {title}

            </h2>


            <div className="pr-11 text-neutral-400 leading-relaxed space-y-4">

                {children}

            </div>


        </section>

    )

}





function List({ items }) {

    return (

        <ul className="space-y-2">

            {
                items.map((item, index) => (

                    <li
                        key={index}
                        className="flex items-start gap-3 text-neutral-400"
                    >

                        <FaTimes className="text-red-400 mt-1" />

                        <span>
                            {item}
                        </span>


                    </li>

                ))
            }

        </ul>

    )

}