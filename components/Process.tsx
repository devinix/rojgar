export default function Process() {
    const steps = [
        {
            num: "1",
            title: "Sign Up",
            desc: "Create your profile in minutes with basic details and upload your documents"
        },
        {
            num: "2",
            title: "Browse & Apply",
            desc: "Explore opportunities that match your skills and preferences, then apply instantly"
        },
        {
            num: "3",
            title: "Start Working",
            desc: "Get onboarded, complete tasks, and receive timely payments directly to your account"
        }
    ];

    return (
        <section className="py-24 bg-[#FFFFFF] text-[#0B1120]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B1120]">How It Works</h2>
                    <p className="text-gray-500 text-lg">Get started in three simple steps</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[40px] left-0 right-0 h-[1px] bg-gray-300 z-0 transform -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-[#0B1120] mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative z-10">
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
