export default function BusinessProcess() {
    const steps = [
        {
            num: "1",
            title: "Post Requirements",
            desc: "Share your staffing needs, roles, and project duration with our team."
        },
        {
            num: "2",
            title: "AI & Expert Matching",
            desc: "Our algorithm + recruiters shortlist the best fit candidates instantly."
        },
        {
            num: "3",
            title: "Instant Deployment",
            desc: "Candidates are onboarded and deployed. Track progress via dashboard."
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFC] text-[#0B1120]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B1120]">How It Works</h2>
                    <p className="text-gray-500 text-lg">Deploy your workforce in three simple steps</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[40px] left-0 right-0 h-[1px] bg-gray-300 z-0 transform -translate-y-1/2 border-t border-dashed border-gray-400"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center group relative z-10">
                                <div className="w-20 h-20 bg-[#111F5C] text-white rounded-2xl flex items-center justify-center text-3xl font-bold mb-8 shadow-lg transform group-hover:-translate-y-2 transition-transform">
                                    {step.num}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-[#0B1120]">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed max-w-xs">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
