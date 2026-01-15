import { Check, Apple, Play } from 'lucide-react';

export default function AppDownload() {
    return (
        <section className="py-24 bg-[#101828] relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <span className="inline-block py-2 px-4 rounded-full bg-white/10 text-sm font-semibold tracking-wide text-white mb-8 border border-white/5">
                            DOWNLOAD OUR APP
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Get Started on the Go
                        </h2>

                        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Apply for jobs, track applications, and manage your work - all from your smartphone. Available on iOS and Android.
                        </p>

                        <div className="space-y-8 mb-12">
                            {[
                                { title: "Instant Job Alerts", desc: "Get notified about new opportunities" },
                                { title: "Easy Application", desc: "Apply with one tap" },
                                { title: "Track Earnings", desc: "Monitor your income in real-time" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start text-left">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <Check className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            {/* App Store Button */}
                            <button className="bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-3 pr-8 group">
                                <span className="text-3xl"><i className="fab fa-apple"></i></span>
                                {/* Using SVG for Apple Logo since FontAwesome isn't here, strictly generic or lucide if needed, 
                                    but standard SVG is safest for specific look */}
                                <svg viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 106.7 78.6 153.5 26.6 39.1 51.8 59.5 86.7 59.5 35.2 0 46.9-22.3 84.7-22.3 36.7 0 47.2 22.8 84.7 22.8 33.3 0 57.3-25.5 82.2-61.9 23-32.9 44-77.1 44.3-77.5-1-.2-69.8-26.6-70.9-160.1zm-81.6-187c17.5-21 33.3-43.9 28.5-73.7-23.7.8-54.8 15.6-71 35.2-16.1 19.1-30.8 40.5-26.6 69.8 26.7 2 55.4-15.6 69.1-31.3z" />
                                </svg>
                                <div className="flex flex-col items-start">
                                    <span className="text-xs font-semibold uppercase tracking-wider">Download on the</span>
                                    <span className="text-xl font-bold leading-none">App Store</span>
                                </div>
                            </button>

                            {/* Google Play Button */}
                            <button className="bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-3 pr-8">
                                <svg viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-220.7-60.1-60.1L47 499z" />
                                </svg>
                                <div className="flex flex-col items-start">
                                    <span className="text-xs font-bold uppercase tracking-wider">Get it on</span>
                                    <span className="text-xl font-bold leading-none">Google Play</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        {/* Using a placeholder for the laptop image shown in design */}
                        <div className="relative w-full max-w-[600px] aspect-[4/3] bg-gray-800 rounded-3xl overflow-hidden border border-white/5 group">
                            {/* Decorative Elements */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                alt="Dashboard on Laptop"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
