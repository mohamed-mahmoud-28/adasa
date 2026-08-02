import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

export default function PrivacyPolicy() {
    return (
        <main className="flex-grow pt-20 bg-[#0a0a0a] text-white">
            {/* Hero */}
            <header className="relative overflow-hidden py-16 md:py-24">
                <div className="absolute inset-0 bg-[#0a0a0a]" />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

                <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-orange-500/20 blur-[100px]" />

                <div className="relative max-w-5xl mx-auto px-4 text-center">
                    {/* Breadcrumb */}
                    <nav className="flex flex-wrap items-center justify-center gap-2 text-sm mb-8">
                        <Link
                            to="/"
                            className="text-neutral-400 hover:text-white transition"
                        >
                            الرئيسية
                        </Link>

                        <span className="text-neutral-600">/</span>

                        <span className="text-orange-500 font-semibold">
                            سياسة الخصوصية
                        </span>
                    </nav>

                    {/* Icon */}
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10">
                        <svg
                            className="w-8 h-8 text-orange-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        سياسة الخصوصية
                    </h1>

                    <p className="text-neutral-400">
                        آخر تحديث: 15 يناير 2026
                    </p>
                </div>
            </header>

            {/* Content */}
            <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">

                {/* Alert */}
                <div className="mb-12 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-6">
                    <div className="flex items-start gap-4">
                        <div className="text-orange-500">
                            <FaShieldAlt className="text-orange-500 text-3xl" />
                        </div>

                        <div>
                            <h3 className="font-bold text-orange-500">
                                خصوصيتك تهمنا
                            </h3>

                            <p className="text-orange-300 mt-1 text-sm">
                                نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن البيانات
                                التي نجمعها.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section */}
                <Section number="1" title="مقدمة">
                    مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك
                    الشخصية. توضح هذه السياسة كيفية التعامل مع معلوماتك.
                </Section>

                <Section number="2" title="المعلومات التي نجمعها">
                    <ul className="space-y-4 list-disc pr-5 text-neutral-400">
                        <li>
                            <strong className="text-white">بيانات الهوية:</strong> الاسم،
                            اسم المستخدم.
                        </li>

                        <li>
                            <strong className="text-white">بيانات الاتصال:</strong>
                            البريد الإلكتروني.
                        </li>

                        <li>
                            <strong className="text-white">البيانات التقنية:</strong>
                            عنوان IP ونوع المتصفح.
                        </li>

                        <li>
                            <strong className="text-white">بيانات الاستخدام:</strong>
                            كيفية استخدام الموقع.
                        </li>
                    </ul>
                </Section>

                <Section number="3" title="كيف نستخدم معلوماتك">
                    <ul className="space-y-3 list-disc pr-5 text-neutral-400">
                        <li>تقديم الخدمة.</li>
                        <li>تحسين الأداء.</li>
                        <li>الدعم الفني.</li>
                        <li>إرسال الإشعارات.</li>
                        <li>تحليل الاستخدام.</li>
                    </ul>
                </Section>

                <Section number="4" title="ملفات تعريف الارتباط">
                    نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم، ويمكنك تعطيلها
                    من إعدادات المتصفح.
                </Section>

                <Section number="5" title="أمان البيانات">
                    نتخذ إجراءات أمنية مناسبة لحماية بياناتك ومنع الوصول غير المصرح به.
                </Section>

                <Section number="6" title="حقوقك">
                    <ul className="space-y-3 list-disc pr-5 text-neutral-400">
                        <li>الوصول إلى بياناتك.</li>
                        <li>تعديل بياناتك.</li>
                        <li>حذف بياناتك.</li>
                        <li>الاعتراض على المعالجة.</li>
                        <li>سحب الموافقة.</li>
                    </ul>
                </Section>

                <Section number="7" title="تواصل معنا">
                    <p className="text-neutral-400 mb-4">
                        إذا كان لديك أي استفسار بخصوص سياسة الخصوصية.
                    </p>

                    <a
                        href="mailto:hello@adasah.com"
                        className="text-orange-500 hover:text-orange-400"
                    >
                        hello@adasah.com
                    </a>
                </Section>

                {/* Footer */}
                <div className="mt-16 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
                    باستخدام موقعنا فإنك توافق على سياسة الخصوصية.
                    <Link
                        to="/terms-of-service"
                        className="text-orange-500 hover:text-orange-400 mr-2"
                    >
                        شروط الخدمة
                    </Link>
                </div>
            </section>
        </main>
    );
}

function Section({ number, title, children }) {
    return (
        <section className="mb-12">
            <div className="flex items-center gap-3 mb-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 text-sm font-bold">
                    {number}
                </span>

                <h2 className="text-2xl font-bold">{title}</h2>
            </div>

            <div className="pr-11 leading-8 text-neutral-400">
                {children}
            </div>
        </section>
    );
}