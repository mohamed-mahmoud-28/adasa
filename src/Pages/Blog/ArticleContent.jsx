import { FaCamera, FaTags } from "react-icons/fa6";

function getArticleSections(content) {
  return content.split("\n\n").map((paragraph) => {
    if (paragraph.startsWith("## ")) {
      return { title: paragraph.replace("## ", ""), content: "" };
    }

    return { title: "", content: paragraph };
  });
}

export default function ArticleContent({ post }) {
  const sections = getArticleSections(post.content);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-transparent p-6">
        <p className="text-lg italic leading-8 text-gray-300">{post.excerpt}</p>
      </div>

      <div className="space-y-12">
        {sections.map((section, index) => section.title ? (
          <section key={`${section.title}-${index}`} id={`section-${index}`} className="scroll-mt-28">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-white"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10"><FaCamera className="text-orange-500" /></span>{section.title}</h2>
          </section>
        ) : (
          <p key={`paragraph-${index}`} className="text-lg leading-9 text-gray-300">{section.content}</p>
        ))}
      </div>

      <div className="rounded-2xl border border-[#262626] bg-[#111] p-6">
        <h3 className="mb-5 flex items-center gap-3 text-xl font-bold text-white"><FaTags className="text-orange-500" />الوسوم</h3>
        <div className="flex flex-wrap gap-3">{post.tags.map((tag) => <span key={tag} className="rounded-full border border-[#333] bg-[#181818] px-4 py-2 text-sm text-gray-400 transition hover:border-orange-500 hover:text-orange-500">#{tag}</span>)}</div>
      </div>

      <div className="rounded-2xl border border-[#262626] bg-[#111] p-8"><div className="flex flex-col gap-6 md:flex-row"><img src={post.author.avatar} alt={post.author.name} className="h-24 w-24 rounded-2xl object-cover" /><div><span className="text-sm uppercase tracking-widest text-orange-500">كاتب المقال</span><h3 className="mt-2 text-2xl font-bold text-white">{post.author.name}</h3><p className="text-gray-500">{post.author.role}</p><p className="mt-4 leading-8 text-gray-400">{post.excerpt}</p></div></div></div>
    </div>
  );
}
