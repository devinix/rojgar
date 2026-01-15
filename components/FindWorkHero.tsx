import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function FindWorkHero() {
    return (
        <section className="pt-32 pb-20 bg-[#101D58] relative overflow-hidden min-h-[800px] flex items-center">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#1a2c75] blur-[120px] opacity-40 rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col items-center text-center">

                    {/* Hero Text */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            Gig Work & <br />
                            <span className="text-[#00dc82]">Part-Time Jobs</span> Platform
                        </h1>
                        <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Earn on your own terms. Find opportunities that match your schedule and skills.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                            <Link href="#browse-jobs" className="bg-[#0052CC] text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors text-lg min-w-[200px] flex items-center justify-center gap-2">
                                Find Work
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual - Laptop Mockup */}
                    <div className="relative w-full max-w-5xl mx-auto mt-8">
                        <div className="relative aspect-[16/9] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            {/* Simple Laptop-style frame or content */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#101D58] to-[#1e3a8a] opacity-90 flex items-center justify-center">
                                {/* Placeholder for Laptop Screen Content - ideally this would be an image of the platform */}
                                <div className="text-center p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">Rozgar Platform</h3>
                                    <p className="text-blue-200">Find your next job in minutes</p>
                                </div>
                            </div>

                            {/* You might want to use the actual image from the design if available, 
                                for now using a gradient/placeholder structure consistent with current Hero */}
                            <Image
                                src="/hero_section.png"
                                alt="Platform Interface"
                                fill
                                className="object-cover opacity-50 mix-blend-overlay"
                            />
                        </div>

                        {/* Floaters (optional, keeping design clean as per description) */}
                    </div>
                </div>
            </div>
        </section>
    );
}
