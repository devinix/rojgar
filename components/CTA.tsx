import { ArrowRight, X, User, Check } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-24 bg-[#111F5C] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-gray-300">Join thousands of professionals and businesses who trust us</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* For Workers */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 text-[#0B1120] hover:shadow-[0_0_30px_rgba(163,230,53,0.3)] transition-all relative overflow-hidden group">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0B1120] group-hover:text-white transition-colors">
                            <User className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">For Workers</h3>
                        <p className="text-gray-600 mb-8">Discover flexible work opportunities across India. Start earning with part-time or full-time roles.</p>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                Thousands of verified jobs
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                Guaranteed timely payments
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                24/7 support assistance
                            </li>
                        </ul>

                        <Link href="#" className="w-full bg-[#0B1120] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                            Discover Opportunities
                        </Link>
                    </div>

                    {/* For Business */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 text-[#0B1120] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all relative overflow-hidden group">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0B1120] group-hover:text-white transition-colors">
                            <BriefcaseIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">For Business</h3>
                        <p className="text-gray-600 mb-8">Scale your operations with our flexible, tech-driven workforce solutions tailored for enterprises.</p>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                Pre-vetted workforce pool
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                AI-powered matching
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                Dedicated account manager
                            </li>
                        </ul>

                        <Link href="#" className="w-full bg-[#0B1120] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                            Book a Meeting
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BriefcaseIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
    )
}
