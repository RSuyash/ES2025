import { Wizard } from "../ui/Wizard";
import { CONFERENCE_DATA } from "../../data/conference";
import { FileText, CheckCircle, ShieldCheck, MapPin } from "lucide-react";

export const AbstractSubmissionWizard = ({ onClose }: { onClose: () => void }) => {
    const steps = [
        {
            id: "guidelines",
            title: "Submission Guidelines",
            content: (
                <div className="space-y-8 px-8 py-6">
                    <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-100 flex gap-5">
                        <FileText className="text-teal-600 shrink-0 mt-1" size={28} />
                        <div>
                            <h4 className="font-bold text-lg text-teal-800 mb-2">Abstract Norms</h4>
                            <p className="text-slate-600 text-sm leading-relaxed font-light">
                                Submissions must be original research. The abstract should be between <span className="font-bold text-slate-800">250-300 words</span>.
                                Please include Title, Author(s), Affiliation, and Keywords (3-5).
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-serif text-xl font-bold text-slate-800 mb-4">Select a Track</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {CONFERENCE_DATA.tracks.map((track) => (
                                <div key={track.id} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-500 hover:ring-1 hover:ring-teal-500/20 transition-all cursor-pointer group flex items-start gap-3">
                                    <span className="bg-slate-100 text-slate-600 group-hover:bg-teal-100 group-hover:text-teal-700 text-xs font-bold px-2 py-1 rounded transition-colors mt-0.5">{track.id}</span>
                                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{track.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-amber-700 bg-amber-50 px-5 py-3 rounded-xl border border-amber-100">
                        <span className="font-bold uppercase tracking-wide text-xs">Submission Deadline</span>
                        <span className="font-bold text-base">{CONFERENCE_DATA.deadlines.abstract}</span>
                    </div>
                </div>
            )
        },
        {
            id: "benefits",
            title: "Presenter Experience",
            content: (
                <div className="space-y-8 px-8 py-6">
                    <h3 className="text-2xl font-serif text-slate-800 font-bold">What to expect at {CONFERENCE_DATA.venue}</h3>

                    <div className="grid gap-5">
                        <div className="flex gap-5 items-start p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
                                <ShieldCheck size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-slate-800 mb-2">Verified ID Card</h4>
                                <p className="text-sm text-slate-600 leading-relaxed font-light">
                                    Upon acceptance, you will receive a digital acceptance letter. At the venue, you will be issued an ID card for campus access, session tracking, and cafeteria privileges.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5 items-start p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 shrink-0">
                                <MapPin size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-slate-800 mb-2">Navigate with Ease</h4>
                                <p className="text-sm text-slate-600 leading-relaxed font-light">
                                    Your ID provides access to all 4 track venues, the central auditorium, and the networking gala.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "submit",
            title: "Ready to Submit?",
            content: (
                <div className="text-center py-12 px-8">
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_0_8px_rgba(220,252,231,0.5)]">
                        <CheckCircle size={40} />
                    </div>
                    <h3 className="text-3xl font-serif text-slate-800 mb-4 font-bold">Excellent Decision</h3>
                    <p className="text-slate-600 max-w-md mx-auto mb-10 text-lg font-light">
                        You are about to join a community of 250+ researchers. Please have your abstract file (DOCX/PDF) ready before proceeding to the Google Form.
                    </p>

                    <div className="bg-slate-50 p-4 rounded-xl max-w-xs mx-auto text-sm text-slate-500 mb-6 border border-slate-100 font-medium">
                        Estimated time: 3-5 minutes
                    </div>
                </div>
            )
        }
    ];

    return (
        <Wizard
            steps={steps}
            onClose={onClose}
            completeLabel="Open Google Form"
            completeLink={CONFERENCE_DATA.links.abstractForm}
        />
    );
};
