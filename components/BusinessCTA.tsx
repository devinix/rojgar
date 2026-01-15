import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BusinessCTA() {
    return (
        <section className="py-24 bg-[#111F5C] text-white overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1a2c75] blur-[120px] opacity-40 rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    Ready to Improve the Way <br />
                    <span className="text-[#a3e635]">Your Operations Run?</span>
                </h2>
                <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
                    Join 500+ enterprises leveraging Rojgar for flexible, reliable, and scalable workforce solutions.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                    <button className="bg-white text-[#111F5C] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg min-w-[200px] flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors text-lg min-w-[200px]">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
}
