"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from './AuthContext';

export default function Header() {
    const pathname = usePathname();
    const { openAuth } = useAuth();
    return (
        <header className="fixed top-0 w-full z-50 bg-[#F9FAFB]/90 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-[#0B1120]">
                    Rojgar
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
                    <Link href="/find-work" className={`transition-colors ${pathname === '/find-work' ? 'text-[#0B1120] font-bold' : 'hover:text-[#0B1120]'}`}>Find Work</Link>
                    <Link href="/for-business" className={`transition-colors ${pathname === '/for-business' ? 'text-[#0B1120] font-bold' : 'hover:text-[#0B1120]'}`}>For Business</Link>
                    <Link href="#" className="hover:text-[#0B1120] transition-colors">About Us</Link>
                </nav>

                {/* Auth Button */}
                <div>
                    <button
                        onClick={openAuth}
                        className="bg-[#0B1120] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                        Login / Signup
                    </button>
                </div>
            </div>
        </header>
    );
}
