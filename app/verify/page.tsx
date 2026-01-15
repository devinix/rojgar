"use client";

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

function VerifyContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const phone = searchParams.get('phone') || '93785285928';
    const [otp, setOtp] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/onboarding');
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
                            <Lock className="w-10 h-10 text-[#101D58]" />
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-[#101D58]">
                            Verify OTP
                        </h2>
                        <p className="mt-3 text-base text-gray-500">
                            Enter the 6-digit code sent to <br />
                            <span className="font-medium text-gray-900">{phone}</span>
                        </p>
                    </div>

                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Enter OTP
                            </label>
                            <input
                                type="text"
                                maxLength={6}
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                className="block w-full px-4 py-3.5 bg-[#F3F4F6] border-none rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#101D58] focus:bg-white transition-all text-lg tracking-widest"
                                placeholder="234556"
                            />
                            <div className="mt-2 text-sm text-gray-500">
                                Didn't receive? <button type="button" className="text-[#101D58] font-medium hover:underline cursor-pointer">Resend OTP</button>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="flex-1 py-3.5 px-4 border border-gray-200 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#101D58] transition-all cursor-pointer"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                style={{ backgroundColor: '#101D58' }}
                                className="flex-1 py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white hover:bg-[#0B1120] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#101D58] transition-all cursor-pointer"
                            >
                                Verify
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

export default function VerifyPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <VerifyContent />
        </Suspense>
    );
}
