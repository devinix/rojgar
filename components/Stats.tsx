export default function Stats() {
    const stats = [
        { value: "50M+", label: "Tasks Completed" },
        { value: "1M+", label: "Active Workforce" },
        { value: "500+", label: "Cities Covered" },
        { value: "1900+", label: "Pin Codes Served" },
    ];

    return (
        <section className="h-[471px] bg-[#101D58] flex items-center justify-center relative overflow-hidden">
            <div className="w-full max-w-[1201px] px-[24px] relative z-10 flex flex-col justify-center gap-[40px]">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">Our Impact in Numbers</h2>
                    <p className="text-gray-400 text-lg">Transforming India&apos;s workforce landscape</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px]">
                    {[
                        { value: "50M+", label: "Tasks Completed", sub: "Successful project deliveries" },
                        { value: "1M+", label: "Active Workforce", sub: "Skilled professionals ready to work" },
                        { value: "500+", label: "Cities", sub: "Nationwide coverage" },
                        { value: "1900+", label: "Pin Codes", sub: "Extensive reach across India" },
                    ].map((stat, index) => (
                        <div key={index} className="px-4 py-8 rounded-3xl border border-[#2e3c75] bg-[#1a2660]/30 flex flex-col items-center justify-center text-center hover:border-[#4c5d9e] transition-colors duration-300">
                            <p className="text-4xl md:text-5xl font-bold text-white mb-3">{stat.value}</p>
                            <p className="text-white font-semibold text-lg mb-2">{stat.label}</p>
                            <p className="text-gray-400 text-sm max-w-[180px] leading-relaxed">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
