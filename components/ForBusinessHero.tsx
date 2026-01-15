import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ForBusinessHero() {
    return (
        <section className="pt-32 pb-20 bg-[#111F5C] relative overflow-hidden min-h-[800px] flex items-center">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-full h-[600px] bg-[#1a2c75] blur-[120px] opacity-40 rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col items-center text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-8 border border-white/10 backdrop-blur-sm">
                        <CheckCircle className="w-4 h-4 text-[#a3e635]" />
                        <span>Trusted by 500+ Enterprises</span>
                    </div>

                    {/* Hero Text */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            Build, Manage, and <br />
                            <span className="text-[#a3e635]">Scale Your Workforce</span>
                        </h1>
                        <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Access verified talent across field, remote, and project-based roles.
                            Deploy skilled professionals in 24 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                            <Link href="#book-demo" className="bg-white text-[#111F5C] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg min-w-[200px] flex items-center justify-center gap-2">
                                Book a Demo
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="#solutions" className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors text-lg min-w-[200px]">
                                Explore Solutions
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual - Team/Dashboard Mockup */}
                    <div className="relative w-full max-w-5xl mx-auto mt-8">
                        <div className="relative aspect-[16/9] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            {/* Gradient Background for Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#111F5C] via-[#1e3a8a] to-[#111F5C] opacity-90"></div>

                            {/* Meeting Image Placeholder */}
                            <Image
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                                alt="Business Team Meeting"
                                fill
                                className="object-cover opacity-60 mix-blend-overlay"
                            />

                            {/* Floating UI Elements (Mock Dashboard) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl p-6 hidden md:block">
                                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="h-2 w-32 bg-white/20 rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-2 space-y-4">
                                        <div className="h-32 bg-white/5 rounded-lg border border-white/5"></div>
                                        <div className="h-32 bg-white/5 rounded-lg border border-white/5"></div>
                                    </div>
                                    <div className="col-span-1 space-y-4">
                                        <div className="h-20 bg-white/5 rounded-lg border border-white/5"></div>
                                        <div className="h-20 bg-white/5 rounded-lg border border-white/5"></div>
                                        <div className="h-20 bg-white/5 rounded-lg border border-white/5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 right-10 bg-white text-[#0B1120] p-6 rounded-2xl shadow-xl flex flex-col gap-1 max-w-[200px] hidden md:flex">
                            <span className="text-4xl font-bold text-[#111F5C]">24h</span>
                            <span className="text-sm font-medium text-gray-600">Average Turnaround Time for Deployment</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
