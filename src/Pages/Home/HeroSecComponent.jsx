
export default function HeroSecComponent({ herSecComp }) {

    const { icon, Number: number, title } = herSecComp

    return (

        <div className="rounded-2xl border border-[#262626] bg-[#171717] py-6">
            <div className="mx-auto flex justify-center text-2xl text-orange-500">
                {icon}
            </div>
            <h2 className="mt-3 text-3xl font-bold text-orange-500">
                {number}
            </h2>
            <p className="mt-1 text-sm text-gray-400">
                {title}
            </p>
        </div>

    )
}
