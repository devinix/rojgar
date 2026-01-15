"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

export default function LoginPage() {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (phoneNumber.length >= 10) {
            router.push(`/verify?phone=${phoneNumber}`);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white px-4 sm:px-10"
                >
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 bg-[#EBEFF8] rounded-full flex items-center justify-center">
                            <Smartphone className="w-10 h-10 text-[#101D58]" />
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-[#101D58]">
                            Get Started
                        </h2>
                        <p className="mt-3 text-base text-gray-500 max-w-xs mx-auto">
                            We'll send a one-time password to verify your number.
                        </p>
                    </div>

                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                                Mobile Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                className="block w-full px-4 py-3.5 bg-[#F3F4F6] border-none rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#101D58] focus:bg-white transition-all text-lg"
                                placeholder="93785285928"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                            />
                        </div>

                        <button
                            type="submit"
                            style={{ backgroundColor: '#101D58' }}
                            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white hover:bg-[#0B1120] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#101D58] transition-all cursor-pointer"
                        >
                            Send OTP
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
