import { ShieldCheck, Zap, Users, BarChart3 } from 'lucide-react';

export default function BusinessFeatures() {
    const features = [
        {
            icon: <Zap className="w-8 h-8 text-[#111F5C]" />,
            title: "Fast Deployment",
            desc: "Get qualified staff on-site or remote within 24-48 hours. Scale up or down instantly."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-[#111F5C]" />,
            title: "100% Compliance",
            desc: "We handle all legalities, documentation, and payroll so you stay risk-free."
        },
        {
            icon: <Users className="w-8 h-8 text-[#111F5C]" />,
            title: "Pre-Vetted Talent",
            desc: "Access a pool of background-verified, skills-assessed professionals ready to work."
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-[#111F5C]" />,
            title: "Real-Time Tracking",
            desc: "Monitor attendance, performance, and tasks through our dedicated employer dashboard."
        },
    ];

    return (
        <section className="py-24 bg-[#FFFFFF] text-[#0B1120]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 mb-6">
                        <span className="text-[#111F5C] font-bold text-xs tracking-wider uppercase">WHY ROJGAR</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B1120]">Workforce Solutions Solved</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">Streamline your operations with our tech-driven approach to staffing</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center group p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                            <div className="w-20 h-20 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center mb-6 group-hover:border-[#111F5C] transition-colors shadow-sm">
                                <div className="group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-[#0B1120]">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed max-w-xs">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
