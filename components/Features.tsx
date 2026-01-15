import { Clock, Users, Briefcase, Wallet } from 'lucide-react';

export default function Features() {
    const features = [
        {
            icon: <Clock className="w-8 h-8 text-[#0B1120]" />,
            title: "Flexible Schedule",
            desc: "Work when it suits you - part-time or full-time options available"
        },
        {
            icon: <Users className="w-8 h-8 text-[#0B1120]" />,
            title: "All Backgrounds",
            desc: "Opportunities for every experience level - from freshers to experts"
        },
        {
            icon: <Briefcase className="w-8 h-8 text-[#0B1120]" />,
            title: "Multiple Opportunities",
            desc: "Access diverse roles across various industries and sectors"
        },
        {
            icon: <Wallet className="w-8 h-8 text-[#0B1120]" />,
            title: "Timely Payments",
            desc: "Guaranteed on-time payments with transparent earning structure"
        },
    ];

    return (
        <section className="py-24 bg-[#FFFFFF] text-[#0B1120]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 mb-6">
                        <span className="text-[#0B1120] font-bold text-xs tracking-wider uppercase">BENEFITS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B1120]">Why Work With Us?</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">Join thousands of professionals who trust us for flexible, rewarding work opportunities</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#0B1120] group-hover:text-white transition-colors">
                                <div className="group-hover:text-white transition-colors">
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
