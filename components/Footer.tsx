import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#111F5C] pt-[64px] pb-10 text-gray-400 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-[24px] flex flex-col gap-[48px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px]">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="text-3xl font-bold font-sans tracking-tight text-white block mb-6">
                            Rojgar
                        </Link>
                        <p className="mb-6 text-base leading-relaxed">India's #1 Work-as-a-Service Platform connecting talent with opportunities.</p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#a3e635] hover:text-[#0B1120] transition-colors text-white">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* For Workers Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">For Workers</h3>
                        <ul className="space-y-4">
                            {["Browse Jobs", "How It Works", "Success Stories", "FAQs", "Download App"].map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className="hover:text-white transition-colors">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For Business Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">For Business</h3>
                        <ul className="space-y-4">
                            {["Our Solutions", "Enterprise Plans", "Case Studies", "Request Demo", "Pricing"].map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className="hover:text-white transition-colors">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-3">
                                <Mail className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                                <div>
                                    <span className="block text-sm text-gray-400">Email</span>
                                    <a href="mailto:support@rojgar.com" className="text-white hover:text-[#a3e635] transition-colors">support@rojgar.com</a>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                                <div>
                                    <span className="block text-sm text-gray-400">Phone</span>
                                    <a href="tel:+911234567890" className="text-white hover:text-[#a3e635] transition-colors">+91 123 456 7890</a>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                                <div>
                                    <span className="block text-sm text-gray-400">Address</span>
                                    <span className="text-white block">Mumbai, India</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm">
                    <p>© 2026 Rojgar. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
