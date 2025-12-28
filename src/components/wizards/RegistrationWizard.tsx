import { Wizard } from "../ui/Wizard";
import { CONFERENCE_DATA } from "../../data/conference";
import { Users, CreditCard, Coffee } from "lucide-react";

export const RegistrationWizard = ({ onClose }: { onClose: () => void }) => {
    const steps = [
        {
            id: "categories",
            title: "Who are you?",
            content: (
                <div className="space-y-6">
                    <p className="text-slate-600">
                        Choose your registration category. All fees act as a contribution towards the conference kit, meals, and certification.
                    </p>

                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                                <tr>
                                    <th className="px-4 py-3">Category</th>
                                    <th className="px-4 py-3 text-right">Fee</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-4 py-3 font-medium text-slate-800">UG / PG / PhD Students</td>
                                    <td className="px-4 py-3 text-right text-primary font-bold">{CONFERENCE_DATA.fees.student}</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-4 py-3 font-medium text-slate-800">Faculty / Postdoc</td>
                                    <td className="px-4 py-3 text-right text-primary font-bold">{CONFERENCE_DATA.fees.faculty}</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-4 py-3 font-medium text-slate-800">Working Professionals</td>
                                    <td className="px-4 py-3 text-right text-primary font-bold">{CONFERENCE_DATA.fees.professional}</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 bg-amber-50/30">
                                    <td className="px-4 py-3 font-medium text-slate-800">Foreign Nationals</td>
                                    <td className="px-4 py-3 text-right text-amber-700 font-bold">{CONFERENCE_DATA.fees.foreign}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        },
        {
            id: "perks",
            title: "What you get",
            content: (
                <div className="space-y-6">
                    <h3 className="text-xl font-serif text-slate-800">Your All-Access Pass</h3>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 border border-slate-100 bg-white shadow-sm rounded-xl hover:shadow-md transition-shadow">
                            <div className="text-primary mb-3"><Users size={24} /></div>
                            <h4 className="font-semibold text-slate-800 mb-1">Networking</h4>
                            <p className="text-xs text-slate-500">Access to all keynote sessions, panel discussions, and the gala.</p>
                        </div>
                        <div className="p-4 border border-slate-100 bg-white shadow-sm rounded-xl hover:shadow-md transition-shadow">
                            <div className="text-emerald-600 mb-3"><Coffee size={24} /></div>
                            <h4 className="font-semibold text-slate-800 mb-1">Hospitality</h4>
                            <p className="text-xs text-slate-500">Includes high tea, lunch, and conference kit with sustainable goodies.</p>
                        </div>
                    </div>

                    <div className="bg-slate-100 p-4 rounded-xl text-center">
                        <h5 className="font-semibold text-slate-900 mb-1">Registration Deadline</h5>
                        <p className="text-primary text-lg font-bold">{CONFERENCE_DATA.deadlines.registration}</p>
                    </div>
                </div>
            )
        },
        {
            id: "payment",
            title: "Secure your Spot",
            content: (
                <div className="text-center py-8">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CreditCard size={32} />
                    </div>
                    <h3 className="text-2xl font-serif text-slate-800 mb-3">Registration Form</h3>
                    <p className="text-slate-600 max-w-md mx-auto mb-8">
                        The form includes payment gateway details. Please keep your transaction ID handy after payment to complete the form.
                    </p>

                    <div className="flex justify-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Instant Confirmation</span>
                        <span className="flex items-center gap-1"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Automated Receipt</span>
                    </div>
                </div>
            )
        }
    ];

    return (
        <Wizard
            steps={steps}
            onClose={onClose}
            completeLabel="Proceed to Payment"
            completeLink={CONFERENCE_DATA.links.registrationForm}
        />
    );
};

// Helper Icon
const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);
