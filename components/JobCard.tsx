import { ChevronRight, BadgeCheck } from 'lucide-react';
import { IndianRupee } from 'lucide-react';

interface JobCardProps {
    title: string;
    type: string;
    salary: string;
    description: string; // This is actually use for the checkmark item now based on image
    tags: string[];
}

export default function JobCard({ title, type, salary, description, tags }: JobCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">

            {/* Header with Arrow Button */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-[#0B1120]">{title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{type}</p>
                </div>
                <button className="w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors cursor-pointer">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Salary */}
            <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <IndianRupee className="w-3 h-3 text-green-700" />
                </div>
                <span className="text-[#0B1120] font-bold text-sm tracking-wide">{salary}</span>
            </div>

            {/* Use Description as "Requirement" check item */}
            <div className="flex items-start gap-2 mb-6">
                <BadgeCheck className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm">{description}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#F3F4F6] text-gray-600 text-xs font-medium rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            <button className="w-full bg-[#101D58] text-white py-3.5 rounded-xl font-bold hover:bg-[#0B1120] transition-colors cursor-pointer text-sm tracking-wide shadow-sm">
                Explore Role
            </button>
        </div>
    );
}
