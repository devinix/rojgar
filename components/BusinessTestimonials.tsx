import { Star } from 'lucide-react';

export default function BusinessTestimonials() {
    const clients = [
        {
            text: "Rojgar helped us scale our logistics fleet during peak season by providing 500+ verified riders in just 3 days.",
            author: "Operations Head",
            company: "Leading E-commerce Platform",
            initial: "E"
        },
        {
            text: "The quality of data annotators we sourced through Rojgar was exceptional. Their managed solution saved us 40% in operational costs.",
            author: "Project Manager",
            company: "AI Tech Startup",
            initial: "A"
        },
        {
            text: "We rely on Rojgar for all our on-ground audit requirements across 20+ cities. The dashboard visibility is a game changer.",
            author: "Director",
            company: "Market Research Firm",
            initial: "M"
        }
    ];

    return (
        <section className="py-24 bg-[#FFFFFF] text-[#0B1120]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 mb-6">
                        <span className="text-[#111F5C] font-bold text-xs tracking-wider uppercase">CLIENT SUCCESS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B1120]">Trusted by Industry Leaders</h2>
                    <p className="text-gray-500 text-lg">See how we're powering businesses across India</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clients.map((client, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col hover:shadow-lg transition-shadow">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-5 h-5 fill-[#111F5C] text-[#111F5C]" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-8 leading-relaxed italic flex-grow">"{client.text}"</p>
                            <div className="flex items-center gap-4 mt-auto border-t border-gray-200 pt-6">
                                <div className="w-12 h-12 bg-[#111F5C] text-white rounded-lg flex items-center justify-center font-bold text-lg">
                                    {client.initial}
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-base text-[#0B1120]">{client.author}</p>
                                    <p className="text-xs text-gray-500 font-medium font-bold uppercase tracking-wide">{client.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
