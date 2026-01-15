import { Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="pt-[140px] pb-20 overflow-hidden relative bg-[#101D58] min-h-[912px] flex flex-col items-center">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#1a2c75] blur-[100px] opacity-50 rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 relative z-10 w-full flex flex-col items-center text-center">

                {/* Top Badge */}
                <div className="mb-8 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                    <span className="text-gray-300 text-sm font-medium tracking-wide">Work-as-a-Service Platform</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight text-white max-w-4xl">
                    Connect to Your Next <br />
                    <span className="text-[#00dc82]">Opportunity</span>
                </h1>

                {/* Subtext */}
                <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    Access part-time, full-time, onsite, and remote work opportunities.
                    Empowering businesses with a flexible, tech-driven workforce.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full mb-16">
                    <Link href="#" className="w-full sm:w-auto bg-white text-[#101D58] px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center min-w-[160px]">
                        Explore Jobs
                    </Link>
                    <Link href="#" className="w-full sm:w-auto border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center min-w-[160px]">
                        Explore Solutions
                    </Link>
                </div>

                {/* Large Image Container */}
                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gray-800">
                        <Image
                            src="/hero_section.png"
                            alt="Team Working"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#101D58]/80 via-transparent to-transparent"></div>
                    </div>

                    {/* Floating Card Left: 1M+ Active */}
                    <div className="absolute -bottom-6 md:bottom-8 left-4 md:left-8 bg-white p-3 pr-6 rounded-2xl shadow-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-[#101D58]">
                            <Users className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <p className="text-[#101D58] font-bold text-xl leading-none">1M+</p>
                            <p className="text-gray-500 text-xs font-medium mt-1">Active Workers</p>
                        </div>
                    </div>

                    {/* Floating Card Right: 500+ Clients */}
                    <div className="absolute -bottom-6 md:bottom-8 right-4 md:right-8 bg-white p-3 pr-6 rounded-2xl shadow-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <p className="text-[#101D58] font-bold text-xl leading-none">500+</p>
                            <p className="text-gray-500 text-xs font-medium mt-1">Enterprise Clients</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
