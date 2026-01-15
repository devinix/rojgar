import { ClipboardCheck, Briefcase, Users, Megaphone, Phone, Headphones } from 'lucide-react';

export default function JobRoles() {
    const roles = [
        {
            icon: <ClipboardCheck className="w-6 h-6" />,
            label: "Auditor",
            desc: "Conduct quality and compliance audits"
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            label: "Data Annotator",
            desc: "Label and categorize data for AI/ML"
        },
        {
            icon: <Users className="w-6 h-6" />,
            label: "Mentor",
            desc: "Guide and train workforce members"
        },
        {
            icon: <Megaphone className="w-6 h-6" />,
            label: "Promoter",
            desc: "Promote brands and generate leads"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Telecaller",
            desc: "Handle customer calls and support"
        },
        {
            icon: <Headphones className="w-6 h-6" />,
            label: "Invigilator",
            desc: "Monitor and supervise examinations"
        },
    ];

    return (
        <section className="py-24 bg-[#FFFFFF] text-[#0B1120]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B1120]">Explore Job Roles</h2>
                    <p className="text-gray-500 text-lg">Find opportunities across diverse sectors</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {roles.map((role, i) => (
                        <div key={i} className="flex flex-col items-start text-left group">
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#0B1120] mb-6 border border-gray-100">
                                {role.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#0B1120]">{role.label}</h3>
                            <p className="text-gray-500 leading-relaxed">{role.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
