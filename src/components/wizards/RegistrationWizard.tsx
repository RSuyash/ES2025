import { Wizard } from "../ui/Wizard";
import { CONFERENCE_DATA } from "../../data/conference";
import { Users, CreditCard, Coffee, CheckCircle } from "lucide-react";

export const RegistrationWizard = ({ onClose }: { onClose: () => void }) => {
    const steps = [
        {
            id: "categories",
            title: "Who are you?",
            content: (
                <div className="space-y-8 px-8 py-6">
                    <p className="text-slate-600 text-lg leading-relaxed font-light">
                        Choose your registration category. All fees act as a contribution towards the conference kit, meals, and certification.
                    </p>

                    <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50/80 text-slate-500 font-bold uppercase tracking-wider text-xs border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4 text-right">Fee</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-800">UG / PG / PhD Students</td>
                                    <td className="px-6 py-4 text-right text-teal-600 font-bold text-base">{CONFERENCE_DATA.fees.student}</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-800">Faculty / Postdoc</td>
                                    <td className="px-6 py-4 text-right text-teal-600 font-bold text-base">{CONFERENCE_DATA.fees.faculty}</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-800">Working Professionals</td>
                                    <td className="px-6 py-4 text-right text-teal-600 font-bold text-base">{CONFERENCE_DATA.fees.professional}</td>
                                </tr>
                                <tr className="hover:bg-amber-50/30 transition-colors bg-amber-50/10">
                                    <td className="px-6 py-4 font-medium text-slate-800">Foreign Nationals</td>
                                    <td className="px-6 py-4 text-right text-amber-600 font-bold text-base">{CONFERENCE_DATA.fees.foreign}</td>
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
                <div className="space-y-8 px-8 py-6">
                    <h3 className="text-2xl font-serif font-bold text-slate-800">Your All-Access Pass</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="p-6 border border-teal-100 bg-teal-50/30 rounded-2xl hover:shadow-lg hover:border-teal-200 transition-all duration-300">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-teal-600 mb-4"><Users size={24} /></div>
                            <h4 className="font-bold text-lg text-slate-800 mb-2">Networking</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">Access to all keynote sessions, panel discussions, and the exclusive networking gala.</p>
                        </div>
                        <div className="p-6 border border-amber-100 bg-amber-50/30 rounded-2xl hover:shadow-lg hover:border-amber-200 transition-all duration-300">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-amber-600 mb-4"><Coffee size={24} /></div>
                            <h4 className="font-bold text-lg text-slate-800 mb-2">Hospitality</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">Includes high tea, networking lunch, and a premium conference kit with sustainable goodies.</p>
                        </div>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-2xl text-center shadow-lg shadow-slate-900/10 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h5 className="font-medium text-slate-300 text-sm mb-1 uppercase tracking-widest">Registration Deadline</h5>
                            <p className="text-3xl font-serif font-bold text-teal-400">{CONFERENCE_DATA.deadlines.registration}</p>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl -mr-10 -mt-10" />
                    </div>
                </div>
            )
        },
        {
            id: "payment",
            title: "Secure your Spot",
            content: (
                <div className="text-center py-12 px-8">
                    <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                        <CreditCard size={40} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Registration Form</h3>
                    <p className="text-slate-600 max-w-md mx-auto mb-10 text-lg font-light leading-relaxed">
                        The form includes payment gateway details. Please keep your transaction ID handy after payment to complete the form.
                    </p>

                    <div className="flex justify-center gap-6 text-sm font-medium text-slate-500 bg-slate-50 p-4 rounded-xl inline-flex mx-auto border border-slate-100">
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Instant Confirmation</span>
                        <div className="w-px h-4 bg-slate-300 my-auto" />
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Automated Receipt</span>
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
