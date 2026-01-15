import { ArrowRight } from 'lucide-react';

export default function SidebarWidget() {
    return (

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-[#0B1120] mb-2">Dream Application</h3>
            <p className="text-gray-500 text-xs mb-6 leading-relaxed">
                Let us know your professional details so that we can match you with the perfect fit opportunities!
            </p>

            <div className="mb-6">
                <div className="flex justify-between text-xs font-bold mb-2 text-[#0B1120]">
                    <span>50% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#101D58] h-2.5 rounded-full w-1/2" />
                </div>
            </div>

            <button className="w-full bg-[#101D58] text-white py-3 rounded-lg font-bold hover:bg-[#0B1120] transition-colors cursor-pointer text-sm shadow-md">
                Complete Profile
            </button>
        </div>
    );

}
