import { Button } from "../../components/ui/Button"
import Section from "../../components/ui/Section"
import { FileText, Users, Leaf } from "lucide-react"
import { LivelyHeroBackground } from "../../components/ui/LivelyHeroBackground"
import { useState } from "react"
import { Modal } from "../../components/ui/Modal"
import { AbstractSubmissionWizard } from "../../components/wizards/AbstractSubmissionWizard"
import { RegistrationWizard } from "../../components/wizards/RegistrationWizard"
import { CONFERENCE_DATA } from "../../data/conference"

export const LivelyHero = () => {
    const [wizardOpen, setWizardOpen] = useState<'abstract' | 'register' | null>(null);

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Overlay - Lively Organic */}
            <LivelyHeroBackground />

            <Section className="relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge - Organic Pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50/90 backdrop-blur-md border border-emerald-200 mb-8 animate-fade-in-up shadow-sm hover:shadow-md transition-shadow cursor-default">
                        <Leaf className="w-4 h-4 text-emerald-600 animate-pulse" />
                        <span className="text-sm font-bold uppercase tracking-widest text-emerald-800">
                            International Conference • {CONFERENCE_DATA.year}
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-none">
                        <span className="relative inline-block">
                            Enviro
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Summit</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 mb-10 font-medium text-balance max-w-2xl mx-auto leading-relaxed">
                        Bridging the gap between <span className="text-emerald-700 font-bold decoration-emerald-200 decoration-2 underline-offset-4">academic research</span>, policy frameworks, and sustainable community action.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
                        <Button
                            size="lg"
                            className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-200/50 transition-all duration-300 w-full sm:w-auto min-w-[200px] h-14"
                            onClick={() => setWizardOpen('abstract')}
                        >
                            <FileText size={20} className="mr-2" />
                            Submit Abstract
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full border-2 border-slate-300 bg-white/60 hover:bg-white/90 hover:border-emerald-400 text-slate-700 shadow-sm w-full sm:w-auto min-w-[200px] h-14 backdrop-blur-sm"
                            onClick={() => setWizardOpen('register')}
                        >
                            <Users size={20} className="mr-2" />
                            Register as Participant
                        </Button>
                    </div>

                    {/* Stats / Info - Floating Card Style */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600 max-w-3xl mx-auto">
                        <div className="flex flex-col items-center p-4 rounded-2xl bg-white/40 border border-white/60 shadow-sm backdrop-blur-sm">
                            <span className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">Mode</span>
                            <span className="text-lg font-serif italic text-emerald-800">{CONFERENCE_DATA.mode}</span>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-2xl bg-white/40 border border-white/60 shadow-sm backdrop-blur-sm">
                            <span className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">Venue</span>
                            <span className="text-center leading-tight">
                                <span className="block font-bold text-emerald-800">{CONFERENCE_DATA.venue.split(',')[0]}</span>
                                <span className="text-xs">{CONFERENCE_DATA.venue.split(',')[1]}</span>
                            </span>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-2xl bg-white/40 border border-white/60 shadow-sm backdrop-blur-sm">
                            <span className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">Dates</span>
                            <div className="text-center">
                                <span className="block font-bold text-emerald-800">{CONFERENCE_DATA.dates}</span>
                                <span className="text-xs text-rose-600 font-bold mt-1 block bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                                    Deadline: {CONFERENCE_DATA.deadlines.registration}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Wizards */}
            <Modal
                isOpen={wizardOpen === 'abstract'}
                onClose={() => setWizardOpen(null)}
                title="Submit Your Abstract"
            >
                <AbstractSubmissionWizard onClose={() => setWizardOpen(null)} />
            </Modal>

            <Modal
                isOpen={wizardOpen === 'register'}
                onClose={() => setWizardOpen(null)}
                title="Conference Registration"
            >
                <RegistrationWizard onClose={() => setWizardOpen(null)} />
            </Modal>
        </div>
    )
}
