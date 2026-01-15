import { ChevronRight, DollarSign, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function JobCategories() {
    const jobs = [
        {
            title: "Data Annotator",
            type: "Work from Home",
            salary: "₹15,000 - ₹25,000/month",
            requirement: "Basic computer skills required",
            tags: ["Remote", "Flexible Hours", "Part-time"]
        },
        {
            title: "Field Auditor",
            type: "On-field",
            salary: "₹20,000 - ₹35,000/month",
            requirement: "Smartphone & transportation",
            tags: ["Full-time", "Travel Required", "Incentives"]
        },
        {
            title: "Telecaller",
            type: "Office/Remote",
            salary: "₹18,000 - ₹30,000/month",
            requirement: "Good communication skills",
            tags: ["Remote", "Full-time", "Voice Process"]
        },
        {
            title: "Promoter",
            type: "On-field",
            salary: "₹12,000 - ₹25,000/month",
            requirement: "Good interpersonal skills",
            tags: ["Part-time", "Weekends", "Events"]
        },
        {
            title: "Content Moderator",
            type: "Work from Home",
            salary: "₹16,000 - ₹28,000/month",
            requirement: "Attention to detail",
            tags: ["Remote", "Flexible Hours", "Full-time"]
        },
        {
            title: "Invigilator",
            type: "On-site",
            salary: "₹10,000 - ₹20,000/month",
            requirement: "Graduate degree",
            tags: ["Part-time", "Project-based", "Education"]
        }
    ];

    return (
        <section className="py-24 bg-[#FFFFFF] text-[#0B1120]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Browse Job Categories</h2>
                    <p className="text-gray-500 text-lg">Find the perfect opportunity that matches your skills</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {jobs.map((job, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100 group">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-[#0B1120]">{job.title}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{job.type}</p>
                                </div>
                                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-[#0B1120] group-hover:text-white transition-colors">
                                    <ChevronRight className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="space-y-3 mt-6 mb-6">
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-green-600 fill-current" />
                                    <span className="font-bold text-sm text-[#0B1120]">{job.salary}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-gray-400" />
                                    <span className="text-gray-500 text-sm">{job.requirement}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                                {job.tags.map((tag, j) => (
                                    <span key={j} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button className="w-full bg-[#0B1120] text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                                Explore Role
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="#" className="inline-block px-8 py-3 border border-[#0B1120] rounded-full text-[#0B1120] font-bold hover:bg-[#0B1120] hover:text-white transition-colors">
                        View All Jobs
                    </Link>
                </div>
            </div>
        </section>
    );
}
