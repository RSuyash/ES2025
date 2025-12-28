import { Wizard } from "../ui/Wizard";
import { CONFERENCE_DATA } from "../../data/conference";
import { FileText, CheckCircle, ShieldCheck, MapPin } from "lucide-react";

export const AbstractSubmissionWizard = ({ onClose }: { onClose: () => void }) => {
    const steps = [
        {
            id: "guidelines",
            title: "Submission Guidelines",
            content: (
                <div className="space-y-6">
                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex gap-4">
                        <FileText className="text-primary shrink-0 mt-1" />
                        <div>
                            <h4 className="font-semibold text-primary mb-1">Abstract Norms</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Submissions must be original research. The abstract should be between <span className="font-semibold text-slate-800">250-300 words</span>.
                                Please include Title, Author(s), Affiliation, and Keywords (3-5).
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg font-semibold text-slate-800 mb-3">Select a Track</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {CONFERENCE_DATA.tracks.map((track) => (
                                <div key={track.id} className="p-3 rounded-lg border border-slate-200 bg-white hover:border-primary/50 transition-colors text-sm text-slate-600 flex items-start gap-2">
                                    <span className="bg-primary/10 text-primary text-xs font-bold px-1.5 py-0.5 rounded mt-0.5">{track.id}</span>
                                    {track.title}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-orange-600 bg-orange-50 px-3 py-2 rounded-lg border border-orange-100">
                        <span className="font-bold">Deadline:</span> {CONFERENCE_DATA.deadlines.abstract}
                    </div>
                </div>
            )
        },
        {
            id: "benefits",
            title: "Presenter Experience",
            content: (
                <div className="space-y-6">
                    <h3 className="text-xl font-serif text-slate-800">What to expect at {CONFERENCE_DATA.venue}</h3>

                    <div className="grid gap-4">
                        <div className="flex gap-4 items-start p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                            <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-600">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800">Verified ID Card</h4>
                                <p className="text-sm text-slate-600 mt-1">
                                    Upon acceptance, you will receive a digital acceptance letter. At the venue, you will be issued an ID card for campus access, session tracking, and cafeteria privileges.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                            <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800">Navigate with Ease</h4>
                                <p className="text-sm text-slate-600 mt-1">
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
                <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-serif text-slate-800 mb-3">Excellent Decision</h3>
                    <p className="text-slate-600 max-w-md mx-auto mb-8">
                        You are about to join a community of 250+ researchers. Please have your abstract file (DOCX/PDF) ready before proceeding to the Google Form.
                    </p>

                    <div className="bg-slate-50 p-4 rounded-lg max-w-sm mx-auto text-sm text-slate-500 mb-6">
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
