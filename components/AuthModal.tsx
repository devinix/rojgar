"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Lock, Check, ChevronDown, ArrowRight, User, Briefcase, Globe } from 'lucide-react';
import { useAuth } from './AuthContext';
import { useRouter } from 'next/navigation';

export default function AuthModal() {
    const { isOpen, closeAuth } = useAuth();
    const router = useRouter();
    const [step, setStep] = useState<'PHONE' | 'OTP' | 'ONBOARDING_1' | 'ONBOARDING_2' | 'ONBOARDING_3'>('PHONE');

    // Form States
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [onboardingData, setOnboardingData] = useState({
        email: '',
        fullName: '',
        gender: '',
        dob: '',
        languages: '',
        hearAbout: '',
        referral: '',
        whatsapp: true
    });

    // Reset state when closed
    useEffect(() => {
        if (!isOpen) {
            // Optional: reset state after animation finishes? 
            // setStep('PHONE');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSendOtp = (e: React.FormEvent) => {
        e.preventDefault();
        if (phoneNumber.length >= 10) {
            setStep('OTP');
        }
    };

    const handleVerifyOtp = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.length === 6) {
            // Simulate verification check
            setStep('ONBOARDING_1');
        }
    };

    const handleOnboardingNext = (currentStep: number) => {
        if (currentStep === 1) setStep('ONBOARDING_2');
        if (currentStep === 2) setStep('ONBOARDING_3');
        if (currentStep === 3) {
            closeAuth();
            router.push('/dashboard');
        }
    };

    const handleBack = () => {
        if (step === 'OTP') setStep('PHONE');
        if (step === 'ONBOARDING_1') setStep('OTP'); // Or skip back to something else?
        if (step === 'ONBOARDING_2') setStep('ONBOARDING_1');
        if (step === 'ONBOARDING_3') setStep('ONBOARDING_2');
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeAuth}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
                {/* Close Button */}
                <button
                    onClick={closeAuth}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors backdrop-blur-md"
                >
                    <X className="w-5 h-5 text-gray-500" />
                </button>

                {/* Left Side - Visual & Info (Hidden on mobile for some steps perhaps, or always shown?) */}
                <div className="hidden md:flex flex-col justify-between w-full md:w-2/5 bg-[#101D58] p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                    <div className="relative z-10 mt-8">
                        <div className="h-16 w-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                            {step === 'PHONE' || step === 'OTP' ? <User className="w-8 h-8 text-white" /> : <Briefcase className="w-8 h-8 text-white" />}
                        </div>
                        <h2 className="text-3xl font-bold leading-tight mb-4">
                            {step === 'PHONE' && "Welcome Back!"}
                            {step === 'OTP' && "Verify It's You"}
                            {step.startsWith('ONBOARDING') && "Complete Profile"}
                        </h2>
                        <p className="text-blue-100 text-lg opacity-90">
                            {step === 'PHONE' && "Find the best blue-collar jobs and opportunities near you."}
                            {step === 'OTP' && "We've sent a secure code to your mobile number."}
                            {step.startsWith('ONBOARDING') && "Tell us a bit about yourself so we can find the perfect jobs for you."}
                        </p>
                    </div>

                    <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-3 text-sm text-blue-100">
                            <div className="p-1 bg-white/20 rounded-full"><Check className="w-3 h-3" /></div>
                            <span>Verified Jobs</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-blue-100">
                            <div className="p-1 bg-white/20 rounded-full"><Check className="w-3 h-3" /></div>
                            <span>Instant Hiring</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-blue-100">
                            <div className="p-1 bg-white/20 rounded-full"><Check className="w-3 h-3" /></div>
                            <span>Secure Payments</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-3/5 p-6 sm:p-10 lg:p-12 overflow-y-auto bg-gray-50/50">
                    <AnimatePresence mode="wait">
                        {step === 'PHONE' && (
                            <motion.div
                                key="phone"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="h-full flex flex-col justify-center"
                            >
                                <div className="text-center md:text-left mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900">Login or Signup</h3>
                                    <p className="text-gray-500 mt-2">Enter your mobile number to continue</p>
                                </div>
                                <form onSubmit={handleSendOtp} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <span className="text-gray-500 font-medium border-r border-gray-300 pr-2 mr-2">+91</span>
                                            </div>
                                            <input
                                                type="tel"
                                                required
                                                className="block w-full pl-16 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#101D58] focus:border-transparent transition-all outline-none text-lg font-medium shadow-sm"
                                                placeholder="98765 43210"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={phoneNumber.length < 10}
                                        className={`w-full py-4 px-6 bg-[#101D58] hover:bg-[#0B1120] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${phoneNumber.length < 10 ? 'opacity-50 cursor-not-allowed transform-none hover:shadow-none' : ''}`}
                                    >
                                        Send OTP <ArrowRight className="w-5 h-5" />
                                    </button>
                                    <p className="text-xs text-center text-gray-500 mt-4">
                                        By continuing, you agree to our <a href="#" className="underline">Terms</a> & <a href="#" className="underline">Privacy Policy</a>
                                    </p>
                                </form>
                            </motion.div>
                        )}

                        {step === 'OTP' && (
                            <motion.div
                                key="otp"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="h-full flex flex-col justify-center"
                            >
                                <div className="mb-8">
                                    <button onClick={handleBack} className="text-sm text-gray-500 hover:text-[#101D58] mb-4 flex items-center gap-1">← Back</button>
                                    <h3 className="text-2xl font-bold text-gray-900">Enter Verification Code</h3>
                                    <p className="text-gray-500 mt-2">Sent to +91 {phoneNumber}</p>
                                </div>
                                <form onSubmit={handleVerifyOtp} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">6-Digit Code</label>
                                        <input
                                            type="text"
                                            maxLength={6}
                                            autoFocus
                                            className="block w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#101D58] focus:border-transparent transition-all outline-none text-2xl font-bold tracking-[0.5em] text-center shadow-sm"
                                            placeholder="••••••"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={otp.length < 6}
                                        className={`w-full py-4 px-6 bg-[#101D58] hover:bg-[#0B1120] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer ${otp.length < 6 ? 'opacity-50 cursor-not-allowed transform-none hover:shadow-none' : ''}`}
                                    >
                                        Verify & Continue
                                    </button>
                                    <div className="text-center">
                                        <button type="button" className="text-sm text-[#101D58] font-medium hover:underline">Resend Code</button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {step === 'ONBOARDING_1' && (
                            <motion.div
                                key="onboarding1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Tell Us About You</h3>
                                    <p className="text-gray-500 mt-1">Basic details to set up your profile</p>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#101D58] outline-none text-gray-900" placeholder="John Doe"
                                            value={onboardingData.fullName} onChange={e => setOnboardingData({ ...onboardingData, fullName: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email (Optional)</label>
                                        <input type="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#101D58] outline-none text-gray-900" placeholder="john@example.com"
                                            value={onboardingData.email} onChange={e => setOnboardingData({ ...onboardingData, email: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                                        <div className="flex gap-4">
                                            {['Male', 'Female', 'Other'].map(g => (
                                                <label key={g} className={`flex-1 py-3 px-4 rounded-lg border cursor-pointer text-center transition-all ${onboardingData.gender === g ? 'border-[#101D58] bg-blue-50 text-[#101D58]' : 'border-gray-200 hover:border-gray-300 text-gray-700'}`}>
                                                    <input type="radio" name="gender" className="hidden" checked={onboardingData.gender === g} onChange={() => setOnboardingData({ ...onboardingData, gender: g })} />
                                                    {g}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth</label>
                                        <input type="date" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#101D58] outline-none text-gray-900 placeholder-gray-400"
                                            value={onboardingData.dob} onChange={e => setOnboardingData({ ...onboardingData, dob: e.target.value })} />
                                    </div>
                                    <button
                                        onClick={() => handleOnboardingNext(1)}
                                        disabled={!onboardingData.fullName || !onboardingData.gender || !onboardingData.dob}
                                        className={`w-full py-3.5 bg-[#101D58] text-white rounded-xl font-medium mt-4 hover:bg-[#0B1120] cursor-pointer ${(!onboardingData.fullName || !onboardingData.gender || !onboardingData.dob) ? 'opacity-50 cursor-not-allowed hover:bg-[#101D58]' : ''}`}
                                    >
                                        Continue
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 'ONBOARDING_2' && (
                            <motion.div
                                key="onboarding2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div>
                                    <button onClick={handleBack} className="text-sm text-gray-500 mb-2">← Back</button>
                                    <h3 className="text-2xl font-bold text-gray-900">Work Preferences</h3>
                                    <p className="text-gray-500 mt-1">Help us find the right jobs for you</p>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Languages</label>
                                        <div className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg flex justify-between items-center cursor-pointer hover:border-gray-300">
                                            <span className="text-gray-500">Select languages</span>
                                            <ChevronDown className="w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">How did you hear about us?</label>
                                        <div className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg flex justify-between items-center cursor-pointer hover:border-gray-300">
                                            <span className="text-gray-500">Select an option</span>
                                            <ChevronDown className="w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Referral Code</label>
                                        <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#101D58] outline-none text-gray-900" placeholder="Optional"
                                            value={onboardingData.referral} onChange={e => setOnboardingData({ ...onboardingData, referral: e.target.value })} />
                                    </div>
                                    <label className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100 cursor-pointer">
                                        <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center shrink-0 ${onboardingData.whatsapp ? 'bg-green-600 border-green-600' : 'border-gray-300 bg-white'}`}>
                                            {onboardingData.whatsapp && <Check className="w-3.5 h-3.5 text-white" />}
                                        </div>
                                        <input type="checkbox" className="hidden" checked={onboardingData.whatsapp} onChange={() => setOnboardingData({ ...onboardingData, whatsapp: !onboardingData.whatsapp })} />
                                        <span className="text-sm text-gray-700">Get important updates and job alerts on <span className="font-semibold text-green-700">WhatsApp</span></span>
                                    </label>
                                    <button onClick={() => handleOnboardingNext(2)} className="w-full py-3.5 bg-[#101D58] text-white rounded-xl font-medium mt-4 hover:bg-[#0B1120] cursor-pointer">Continue</button>
                                </div>
                            </motion.div>
                        )}

                        {step === 'ONBOARDING_3' && (
                            <motion.div
                                key="onboarding3"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-4xl">🎉</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">You're All Set!</h3>
                                <p className="text-gray-500 mb-8 max-w-xs mx-auto">Thanks for setting up your profile. We're ready to help you find your next job.</p>

                                <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm mb-8 text-left space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"><Check className="w-4 h-4 text-blue-600" /></div>
                                        <div><p className="font-medium text-gray-900">Phone Verified</p><p className="text-xs text-gray-500">+91 {phoneNumber}</p></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"><Check className="w-4 h-4 text-blue-600" /></div>
                                        <div><p className="font-medium text-gray-900">Profile Created</p><p className="text-xs text-gray-500">{onboardingData.fullName || 'User'}</p></div>
                                    </div>
                                </div>

                                <button onClick={() => handleOnboardingNext(3)} className="w-full py-4 bg-[#101D58] text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                                    Go to Dashboard
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div >
        </div >
    );
}
