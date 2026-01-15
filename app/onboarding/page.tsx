"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

export default function OnboardingPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);

    // Step 1 State
    const [formData, setFormData] = useState({
        email: 'manvi@gmail.com',
        fullName: 'Manvi I',
        gender: 'Female',
        dob: '',
    });

    // Step 2 State
    const [details, setDetails] = useState({
        languages: '',
        hearAbout: '',
        referral: '',
        whatsapp: true
    });

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);
    const handleFinish = () => router.push('/dashboard');

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-10">

                <AnimatePresence mode="wait">
                    {/* STEP 1: Tell Us About You */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-[#101D58]">Tell Us About You</h2>
                                <p className="mt-2 text-gray-500">Help us personalize your experience</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="block w-full px-4 py-3 bg-[#F3F4F6] border-none rounded-lg text-gray-900"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="block w-full px-4 py-3 bg-[#F3F4F6] border-none rounded-lg text-gray-900"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Gender</label>
                                    <div className="flex gap-6">
                                        {['Male', 'Female', 'Other'].map(option => (
                                            <label key={option} className="flex items-center cursor-pointer">
                                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-2 ${formData.gender === option ? 'border-[#101D58]' : 'border-gray-300'}`}>
                                                    {formData.gender === option && <div className="w-3 h-3 rounded-full bg-[#101D58]" />}
                                                </div>
                                                <span className="text-gray-900">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Date of Birth</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="block w-full px-4 py-3 bg-[#F3F4F6] border-none rounded-lg"
                                    />
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button onClick={handleBack} className="flex-1 py-3 px-4 border border-gray-200 rounded-lg text-gray-700 font-medium cursor-pointer hover:bg-gray-50">Back</button>
                                    <button onClick={handleNext} className="flex-1 py-3 px-4 bg-[#101D58] text-white rounded-lg font-medium cursor-pointer hover:bg-[#0B1120]">Next</button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: A Few More Details */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-[#101D58]">A Few More Details</h2>
                                <p className="mt-2 text-gray-500">This helps us match you with the right opportunities</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Languages you speak fluently</label>
                                    <div className="relative">
                                        <div className="block w-full px-4 py-3 bg-[#F3F4F6] rounded-lg text-gray-500 flex justify-between items-center cursor-pointer">
                                            <span>Select languages</span>
                                            <ChevronDown className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">How did you hear about us?</label>
                                    <div className="relative">
                                        <div className="block w-full px-4 py-3 bg-[#F3F4F6] rounded-lg text-gray-500 flex justify-between items-center cursor-pointer">
                                            <span>Select an option</span>
                                            <ChevronDown className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Referral Code (Optional)</label>
                                    <input
                                        type="text"
                                        placeholder="Enter referral code if you have one"
                                        className="block w-full px-4 py-3 bg-[#F3F4F6] border-none rounded-lg text-gray-900 placeholder-gray-500"
                                    />
                                </div>

                                <label className="flex items-center cursor-pointer">
                                    <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 ${details.whatsapp ? 'bg-[#101D58] border-[#101D58]' : 'border-gray-300'}`}>
                                        {details.whatsapp && <Check className="w-3.5 h-3.5 text-white" />}
                                    </div>
                                    <span className="text-gray-900">Receive the same updates on WhatsApp</span>
                                    <span className="ml-2 text-green-500">
                                        {/* Whatsapp Icon placeholder */}
                                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c1.02.592 1.97.759 2.806.759 3.183 0 5.768-2.586 5.769-5.766.001-3.181-2.584-5.767-5.769-5.767zm0 13c-1.077 0-1.921-.295-2.738-.72l-1.97.518.527-1.921c-.512-.862-.835-1.743-.835-2.877 0-3.987 3.243-7.23 7.23-7.23s7.229 3.243 7.229 7.23-3.242 7.23-7.229 7.23zm3.968-5.418c-.218-.109-1.291-.637-1.491-.709-.2-.074-.346-.109-.491.109-.145.218-.564.709-.691.854-.127.145-.255.163-.473.054-.218-.109-.921-.34-1.753-1.082-.653-.581-1.093-1.298-1.221-1.516-.127-.218-.014-.336.095-.444.1-.099.218-.255.327-.382s.145-.255.218-.427c.073-.173.036-.327-.018-.436-.055-.109-.491-1.182-.673-1.618-.176-.423-.356-.365-.491-.372-.127-.007-.273-.009-.418-.009-.145 0-.382.055-.582.273s-.764.745-.764 1.818c0 1.073.782 2.109.891 2.255.109.145 1.536 2.346 3.722 3.289.519.225.925.36 1.238.46.52.164.993.141 1.366.086.416-.062 1.291-.527 1.473-1.036.182-.509.182-.945.127-1.036-.055-.091-.2-.145-.418-.254z" /></svg>
                                    </span>
                                </label>

                                <div className="flex gap-4 pt-4">
                                    <button onClick={handleBack} className="flex-1 py-3 px-4 border border-gray-200 rounded-lg text-gray-700 font-medium cursor-pointer hover:bg-gray-50">Back</button>
                                    <button onClick={handleNext} className="flex-1 py-3 px-4 bg-[#7F8C8D] text-white rounded-lg font-medium cursor-pointer hover:bg-[#6e7a7b]">Next</button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: Welcome */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-[#101D58] flex items-center justify-center gap-2">
                                    Welcome, Manvi! <span className="text-3xl">🎉</span>
                                </h2>
                                <p className="mt-3 text-gray-600 text-sm leading-relaxed px-4">
                                    Your profile is almost ready. Let's set your work preferences to find the perfect opportunities for you.
                                </p>
                            </div>

                            <div className="bg-[#EBEFF8] rounded-xl p-6 mb-8 space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#101D58] flex items-center justify-center flex-shrink-0">
                                        <Check className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-medium">Contact verified</h3>
                                        <p className="text-gray-500 text-sm">manvi@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#101D58] flex items-center justify-center flex-shrink-0">
                                        <Check className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-medium">Languages added</h3>
                                        <p className="text-gray-500 text-sm">Hindi, English</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button onClick={handleBack} className="flex-1 py-3 px-4 border border-gray-200 rounded-lg text-gray-700 font-medium cursor-pointer hover:bg-gray-50">Back</button>
                                <button onClick={handleFinish} className="flex-1 py-3 px-4 bg-[#101D58] text-white rounded-lg font-medium cursor-pointer hover:bg-[#0B1120]">Continue Setup</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
