"use client";

import { useState } from 'react';
import AuthenticatedHeader from "@/components/AuthenticatedHeader";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import SidebarWidget from "@/components/SidebarWidget";
import { Filter } from 'lucide-react';

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('active');

    const jobs = [
        {
            title: "Data Annotator",
            type: "Work from Home",
            salary: "₹15,000 - ₹25,000/month",
            description: "Basic computer skills required",
            tags: ["Remote", "Entry Level", "Flexible Hours"]
        },
        {
            title: "Field Auditor",
            type: "On-field • Mumbai",
            salary: "₹20,000 - ₹35,000/month",
            description: "Smartphone & transportation",
            tags: ["On-site", "Travel", "Full-time"]
        },
        {
            title: "Telecaller",
            type: "Remote / Hybrid",
            salary: "₹12,000 - ₹18,000/month",
            description: "Make outbound calls to potential customers. Good communication skills in Hindi & English required.",
            tags: ["Remote", "Sales", "Part-time"]
        },
        {
            title: "Exam Invigilator",
            type: "On-site • Delhi",
            salary: "₹800 - ₹1,200/day",
            description: "Monitor students during examinations. Weekend availability is a plus. Trusted role.",
            tags: ["On-site", "Weekend", "Part-time"]
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <AuthenticatedHeader />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Main Content Area */}
                    <div className="flex-1">
                        {/* Header Section */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-[#0B1120]">Browse Job Categories</h1>
                                <p className="text-gray-500 text-base mt-2">Find the perfect opportunity that matches your skills</p>
                            </div>

                            <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-1.5">
                                <span className="text-sm font-bold text-[#0B1120] px-2">Active Jobs</span>
                                <div
                                    className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors ${activeTab === 'active' ? 'bg-[#101D58]' : 'bg-gray-300'}`}
                                    onClick={() => setActiveTab(activeTab === 'active' ? 'applied' : 'active')}
                                >
                                    <div className={`bg-white w-3.5 h-3.5 rounded-full shadow-md transform transition-transform ${activeTab === 'active' ? 'translate-x-5' : ''}`} />
                                </div>
                            </div>
                        </div>

                        {/* Job Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                            {jobs.map((job, index) => (
                                <JobCard key={index} {...job} />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="hidden lg:block w-80 flex-shrink-0 space-y-8 pt-4">
                        <SidebarWidget />

                        {/* Help Section Widget */}
                        <div className="bg-white rounded-2xl p-0">
                            <h3 className="font-bold text-[#0B1120] mb-2 text-lg">Need Help?</h3>
                            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                                Contact our support team if you have any questions about the application process.
                            </p>
                            <button className="text-[#101D58] text-sm font-bold cursor-pointer hover:underline">
                                Contact Support
                            </button>
                        </div>

                        {/* Footer Links (Mini) */}
                        <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-500 pt-4 border-t border-gray-100">
                            <a href="#" className="hover:text-[#0B1120]">For Workers</a>
                            <a href="#" className="hover:text-[#0B1120]">Our Solutions</a>
                            <a href="#" className="hover:text-[#0B1120]">How It Works</a>
                            <a href="#" className="hover:text-[#0B1120]">Enterprise Plans</a>
                            <a href="#" className="hover:text-[#0B1120]">Success Stories</a>
                            <a href="#" className="hover:text-[#0B1120]">Case Studies</a>
                        </div>
                        <div className="flex gap-4 pt-2">
                            {/* Social Icons Placeholder */}
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#101D58] hover:text-white cursor-pointer transition-colors">
                                <span className="font-bold text-xs">in</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#101D58] hover:text-white cursor-pointer transition-colors">
                                <span className="font-bold text-xs">tw</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-4">© 2026 Rojgar. All rights reserved.</p>
                    </div>

                </div>
            </div>

            {/* The main footer is usually not shown on dashboard if sidebar has links, but let's keep it minimal if needed, currently removing to match 'clean dashboard' look if intended, or keep it. The design shows footer at bottom. Keeping it. */}
            <div className="bg-[#101D58] text-white py-12 px-6 mt-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Rojgar</h2>
                        <p className="text-gray-300 text-sm max-w-xs">India's #1 Work-as-a-Service Platform connecting talent with opportunities.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold mb-4">For Workers</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>Browse Jobs</li>
                                <li>How It Works</li>
                                <li>Success Stories</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">For Business</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>Our Solutions</li>
                                <li>Enterprise Plans</li>
                                <li>Case Studies</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Contact Us</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>support@rojgar.com</li>
                                <li>+91 123 456 7890</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
