import { Button } from "../components/ui/Button"
import Section from "../components/ui/Section"
import { FileText, Users } from "lucide-react"
import { HeroBackground } from "../components/ui/HeroBackground"
import { useState } from "react"
import { Modal } from "../components/ui/Modal"
import { AbstractSubmissionWizard } from "../components/wizards/AbstractSubmissionWizard"
import { RegistrationWizard } from "../components/wizards/RegistrationWizard"
import { CONFERENCE_DATA } from "../data/conference"

const Hero = () => {
    const [wizardOpen, setWizardOpen] = useState<'abstract' | 'register' | null>(null);

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Overlay - Abstract Academic */}
            <HeroBackground />

            <Section className="relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 backdrop-blur-sm border border-slate-200 mb-8 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                            International Conference • {CONFERENCE_DATA.year}
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight relative">
                        <span className="relative inline-block">
                            <span className="text-primary">E</span>
                            nviro
                        </span>
                        <span className="text-primary">Summit</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light text-balance max-w-2xl mx-auto leading-relaxed">
                        Bridging the gap between academic research, policy frameworks, and sustainable community action.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Button
                            size="lg"
                            className="group relative overflow-hidden w-full sm:w-auto min-w-[200px]"
                            onClick={() => setWizardOpen('abstract')}
                        >
                            <FileText size={20} className="mr-2" />
                            Submit Abstract
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto min-w-[200px] border-slate-300 hover:bg-white/50 backdrop-blur-sm"
                            onClick={() => setWizardOpen('register')}
                        >
                            <Users size={20} className="mr-2" />
                            Register as Participant
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-500 max-w-2xl mx-auto border-t border-slate-200/60 pt-8">
                        <div className="flex flex-col items-center">
                            <span className="font-semibold text-slate-900">Hybrid Mode</span>
                            <span>{CONFERENCE_DATA.mode}</span>
                        </div>
                        <div className="flex flex-col items-center border-l md:border-l border-slate-200/60 border-t md:border-t-0 pt-4 md:pt-0">
                            <span className="font-semibold text-slate-900">{CONFERENCE_DATA.venue.split(',')[0]}</span>
                            <span>{CONFERENCE_DATA.venue.split(',')[1]}</span>
                        </div>
                        <div className="flex flex-col items-center border-l md:border-l border-slate-200/60 border-t md:border-t-0 pt-4 md:pt-0">
                            <span className="font-semibold text-slate-900">{CONFERENCE_DATA.dates}</span>
                            <span className="text-emerald-600 font-medium">Reg Ends: {CONFERENCE_DATA.deadlines.registration}</span>
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

export default Hero
