export default function ValueCard({ item }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40">

            {/* Glass Effect */}
            <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-orange-500/10 backdrop-blur-md"></div>

                <div className="absolute -top-10 -left-10 h-24 w-24 rounded-full bg-orange-500/20 blur-3xl"></div>

                <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-orange-400/20 blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <div className="flex justify-center text-4xl text-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                </div>

                <h3 className="mt-4 text-2xl font-bold text-white">
                    {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                    {item.desc}
                </p>
            </div>
        </div>
    );
}