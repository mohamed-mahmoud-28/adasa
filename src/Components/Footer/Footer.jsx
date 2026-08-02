import {
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import siteData from "../../Data/BlogsData.json";

export default function Footer() {
  const { social } = siteData.siteInfo;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0B0B0B]">

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[170px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div className="text-right">

            <Link to="/" className="mb-6 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-3xl font-bold text-white shadow-lg shadow-orange-500/20">
                ع
              </div>
              <h2 className="text-3xl font-extrabold text-white">عدسة</h2>
            </Link>

            <p className="leading-8 text-gray-400">
              مدونة متخصصة في فن التصوير الفوتوغرافي،
              نشارك معكم أسرار المحترفين ونصائح عملية
              لتطوير مهاراتكم.
            </p>

            <div className="mt-8 flex gap-3">

              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#171717] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#171717] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#171717] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#171717] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <FaXTwitter size={17} />
              </a>

            </div>

          </div>

          {/* Explore */}
          <div className="text-right">

            <div className="mb-7 flex items-center gap-3">
              <div className="h-[2px] w-10 bg-orange-500"></div>
              <h3 className="text-2xl font-bold text-white">استكشف</h3>
            </div>

            <div className="space-y-4">
              <Link to="/" className="block text-gray-400 transition hover:text-orange-500">
                الرئيسية
              </Link>
              <Link to="/blog" className="block text-gray-400 transition hover:text-orange-500">
                المدونة
              </Link>
              <Link to="/about" className="block text-gray-400 transition hover:text-orange-500">
                من نحن
              </Link>
            </div>

          </div>

          {/* Categories */}
          <div className="text-right">

            <div className="mb-7 flex items-center gap-3">
              <div className="h-[2px] w-10 bg-orange-500"></div>
              <h3 className="text-2xl font-bold text-white">التصنيفات</h3>
            </div>

            <div className="space-y-4">
              <Link to="/blog?category=إضاءة" className="block text-gray-400 transition hover:text-orange-500">
                إضاءة
              </Link>
              <Link to="/blog?category=بورتريه" className="block text-gray-400 transition hover:text-orange-500">
                بورتريه
              </Link>
              <Link to="/blog?category=مناظر طبيعية" className="block text-gray-400 transition hover:text-orange-500">
                مناظر طبيعية
              </Link>
              <Link to="/blog?category=تقنيات" className="block text-gray-400 transition hover:text-orange-500">
                تقنيات
              </Link>
              <Link to="/blog?category=معدات" className="block text-gray-400 transition hover:text-orange-500">
                معدات
              </Link>
            </div>

          </div>

          {/* Newsletter */}
          <div className="text-right">

            <div className="mb-7 flex items-center gap-3">
              <div className="h-[2px] w-10 bg-orange-500"></div>
              <h3 className="text-2xl font-bold text-white">ابق على اطلاع</h3>
            </div>

            <p className="mb-5 leading-7 text-gray-400">
              اشترك للحصول على أحدث المقالات
              والتحديثات.
            </p>

            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#171717] px-4 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500"
            />

            <Link
              to="/#subscribe"
              className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/25"
            >
              اشترك
            </Link>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <p className="text-gray-500">
            © 2026 عدسة. صنع بكل
            <span className="mx-1 text-orange-500">❤</span>
            جميع الحقوق محفوظة.
          </p>

          {/* Developer */}
          <p className="md:text-center  text-gray-500">
            Developed by{" "}
            <a
              href="https://mohamedghobara.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-500 transition-colors duration-300 hover:text-orange-400 hover:underline"
            >
              Mohamed Ghobara
            </a>
          </p>

          {/* Links */}
          <div className="flex gap-8">
            <Link
              to="/privacy-policy"
              className="text-gray-500 transition hover:text-orange-500"
            >
              سياسة الخصوصية
            </Link>

            <Link
              to="/terms-of-service"
              className="text-gray-500 transition hover:text-orange-500"
            >
              شروط الخدمة
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
