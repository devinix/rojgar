import { GraduationCap, Laptop, HardHat, Check } from 'lucide-react';

export default function Offerings() {
    const offerings = [
        {
            title: "White Collar",
            icon: <GraduationCap className="w-8 h-8 text-[#0B1120]" />,
            desc: "Professional, knowledge-based roles",
            features: ["Data analysts and researchers", "Content creators and editors", "Business consultants", "Tech support specialists"]
        },
        {
            title: "Grey Collar",
            icon: <Laptop className="w-8 h-8 text-[#0B1120]" />,
            desc: "Skilled technical and service roles",
            features: ["Customer service executives", "Quality assurance specialists", "Data entry operators", "Telecallers and support staff"]
        },
        {
            title: "Blue Collar",
            icon: <HardHat className="w-8 h-8 text-[#0B1120]" />,
            desc: "Field and operational workforce",
            features: ["Field auditors and surveyors", "Delivery executives", "Warehouse staff", "On-ground promoters"]
        }
    ];

    return (
        <section className="py-24 bg-[#F9FAFB] text-[#0B1120]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-6">
                        <span className="text-[#0B1120] font-bold text-xs tracking-wider uppercase">WORKFORCE TYPES</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B1120]">Our Offerings</h2>
                    <p className="text-gray-500 text-lg">Comprehensive workforce solutions across all sectors</p>
                </div>

                <div className="relative w-full overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10 pointer-events-none"></div>

                    <div className="flex animate-scroll gap-8 w-max hover:[animation-play-state:paused]">
                        {/* Duplicate the array duplicated 4 times to ensure seamless infinite scroll */}
                        {[...offerings, ...offerings, ...offerings, ...offerings].map((offer, i) => (
                            <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow border border-gray-100 h-full w-[380px] md:w-[420px] shrink-0">
                                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-8">
                                    {offer.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-[#0B1120]">{offer.title}</h3>
                                <p className="text-gray-500 mb-8">{offer.desc}</p>

                                <ul className="space-y-4">
                                    {offer.features.map((feat, j) => (
                                        <li key={j} className="flex items-center gap-3 text-base text-gray-700">
                                            <div className="w-5 h-5 rounded-full bg-[#0B1120] flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
