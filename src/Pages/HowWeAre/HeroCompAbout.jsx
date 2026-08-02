

export default function HeroCompAbout({ herSecComp }) {
    const { icon, Number, title } = herSecComp;
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-orange-500/40">
            <div className="flex justify-center text-3xl text-orange-500">
                {icon}
            </div>

            <h3 className="mt-4 text-3xl font-bold text-yellow-600">
                {Number}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
                {title}
            </p>
        </div>
    )
}
