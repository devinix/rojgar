import { MapPin, Clock, ArrowRight } from 'lucide-react';

export default function JobListings() {
    const jobs = [
        {
            title: "Field Sales Exec",
            location: "Delhi, Mumbai",
            salary: "₹18k - ₹25k / month",
            type: "Full Time"
        },
        {
            title: "Telecaller",
            location: "Remote / WFH",
            salary: "₹15k - ₹22k / month",
            type: "Part Time"
        },
        {
            title: "Content Moderator",
            location: "Bangalore",
            salary: "₹20k - ₹30k / month",
            type: "Full Time"
        },
        {
            title: "Promoter",
            location: "Pune, Hyderabad",
            salary: "₹500 - ₹800 / day",
            type: "Contract"
        },
        {
            title: "System Operator",
            location: "Chennai",
            salary: "₹12k - ₹18k / month",
            type: "Full Time"
        },
        {
            title: "Analytical Lead",
            location: "Gurgaon",
            salary: "₹35k - ₹50k / month",
            type: "Full Time"
        }
    ];

    return (
        <section className="py-24 bg-white text-[#0B1120]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Browse Job Categories</h2>
                    <p className="text-gray-600">Discover trending opportunities and get hired fast.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job, i) => (
                        <div key={i} className="bg-white border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-all hover:border-gray-300">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900">{job.title}</h3>
                                    <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                                        <MapPin className="w-3 h-3" /> {job.location}
                                    </div>
                                </div>
                                <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">{job.type}</span>
                            </div>

                            <div className="flex items-center gap-2 text-green-600 font-bold mb-6">
                                <span className="text-sm bg-green-50 px-2 py-1 rounded">💰 {job.salary}</span>
                            </div>

                            <button className="w-full bg-[#0B1120] text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group">
                                Apply Now
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <button className="border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
                        View All Jobs
                    </button>
                </div>
            </div>
        </section>
    );
}
