import {
    FaLinkedin,
    FaGithub,
    FaXTwitter,
    FaCircleCheck,
} from "react-icons/fa6";

import plogs from "../../Data/BlogsData.json";

export default function Team() {
    const { social } = plogs.siteInfo;

    return (
        <section className="bg-[#0b0b0b] py-16">
            <div className="container mx-auto px-5">

                {/* Header */}
                <div className="text-center">
                    <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs text-orange-500">
                        • فريقنا
                    </span>

                    <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">
                        تعرف على كتابنا
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-gray-400">
                        فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
                    </p>
                </div>

                {/* Cards */}
                <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {plogs.posts.map((post) => (
                        <div
                            key={post.id}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-orange-500/40"
                        >
                            <div className="relative mx-auto w-fit">
                                <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="h-20 w-20 rounded-full border-4 border-zinc-700 object-cover"
                                />

                                <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white">
                                    <FaCircleCheck size={10} />
                                </span>
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-white">
                                {post.author.name}
                            </h3>

                            <p className="mt-1 text-sm text-orange-500">
                                {post.author.role}
                            </p>

                            <div className="mt-5 flex justify-center gap-3">
                                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg bg-zinc-800 p-2 text-gray-400 hover:bg-orange-500 hover:text-white">
                                    <FaLinkedin />
                                </a>

                                <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg bg-zinc-800 p-2 text-gray-400 hover:bg-orange-500 hover:text-white">
                                    <FaGithub />
                                </a>

                                <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="rounded-lg bg-zinc-800 p-2 text-gray-400 hover:bg-orange-500 hover:text-white">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
