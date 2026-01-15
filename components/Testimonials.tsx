import { Star } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            text: "Working with Rojgar has been life-changing. The flexibility to work from home while earning a steady income has given me the perfect work-life balance.",
            author: "Priya Sharma",
            role: "Data Annotator • Mumbai",
            initial: "P"
        },
        {
            text: "The payment system is transparent and always on time. I've been working as a field auditor for 6 months and couldn't be happier with my decision.",
            author: "Rajesh Kumar",
            role: "Field Auditor • Delhi",
            initial: "R"
        },
        {
            text: "Great support from the team and plenty of growth opportunities. I started as a telecaller and now I'm training new team members.",
            author: "Anjali Patel",
            role: "Telecaller • Bangalore",
            initial: "A"
        }
    ];

    return (
        <section className="py-24 bg-[#F9FAFB] text-[#0B1120] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-6">
                        <span className="text-[#0B1120] font-bold text-xs tracking-wider uppercase">SUCCESS STORIES</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B1120]">What People Say</h2>
                    <p className="text-gray-500 text-lg">Real stories from our workforce community</p>
                </div>

                <div className="relative w-full">


                    <div className="flex animate-scroll gap-8 w-max hover:[animation-play-state:paused] items-stretch">
                        {/* Duplicate the array 4 times to ensure smooth scrolling on large screens */}
                        {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((test, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col w-[350px] md:w-[400px] shrink-0">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-8 leading-relaxed italic flex-grow">"{test.text}"</p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-900 text-lg">
                                        {test.initial}
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-base text-[#0B1120]">{test.author}</p>
                                        <p className="text-xs text-gray-500 font-medium">{test.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
