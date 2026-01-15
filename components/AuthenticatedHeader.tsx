"use client";

import { Bell, ChevronDown, User } from 'lucide-react';
import Link from 'next/link';

export default function AuthenticatedHeader() {
    return (
        <header className="sticky top-0 w-full z-50 bg-[#F9FAFB]/90 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/find-work" className="text-2xl font-bold text-[#0B1120]">
                    Rojgar
                </Link>

                {/* Right Side Actions */}
                <div className="flex items-center gap-6">
                    <button className="relative text-gray-500 hover:text-[#0B1120] transition-colors cursor-pointer">
                        <Bell className="w-6 h-6" />
                        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>

                    <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                        <button className="w-10 h-10 bg-[#e0e7ff] rounded-full flex items-center justify-center text-[#101D58] hover:bg-[#c7d2fe] transition-colors cursor-pointer">
                            <User className="w-6 h-6" />
                        </button>
                        {/* Removed text button to match design */}
                    </div>
                </div>
            </div>
        </header>
    );
}
