import { Button } from "../../components/ui/Button"
import Section from "../../components/ui/Section"
import { FileText, Users, Droplets } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Modal } from "../../components/ui/Modal"
import { AbstractSubmissionWizard } from "../../components/wizards/AbstractSubmissionWizard"
import { RegistrationWizard } from "../../components/wizards/RegistrationWizard"
import { CONFERENCE_DATA } from "../../data/conference"

const FluidBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden bg-slate-900">
            {/* Deep Ocean / Forest Night Base */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-slate-900 to-emerald-950" />

            {/* Morphing Blobs */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-500/20 rounded-full blur-[80px] mix-blend-screen"
                animate={{
                    scale: [1, 1.2, 0.9, 1],
                    x: [0, 50, -30, 0],
                    y: [0, 30, -50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[100px] mix-blend-screen"
                animate={{
                    scale: [1.2, 1, 1.1, 1.2],
                    x: [0, -40, 20, 0],
                    y: [0, -30, 40, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* SVG Liquid Overlay */}
            <div className="absolute inset-0 opacity-30">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    <motion.path
                        d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
                        fill="url(#grad1)"
                        initial={{ d: "M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" }}
                        animate={{
                            d: [
                                "M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z",
                                "M0,50 Q25,70 50,50 T100,50 L100,100 L0,100 Z",
                                "M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
                            ]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#0d9488', stopOpacity: 0.2 }} />
                            <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 0.2 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export const FluidBioHero = () => {
    const [wizardOpen, setWizardOpen] = useState<'abstract' | 'register' | null>(null);

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-white">
            <FluidBackground />

            <Section className="relative z-10 w-full">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    {/* Left Content */}
                    <div className="flex-1 text-left">
                        {/* Bi-color Pill */}
                        <div className="inline-flex items-center gap-3 px-1 py-1 pr-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/20 transition-colors cursor-pointer">
                            <div className="bg-teal-500 rounded-full p-1.5">
                                <Droplets className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-teal-100">
                                {CONFERENCE_DATA.year} Edition
                            </span>
                        </div>

                        <h1 className="font-sans text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none">
                            <span className="block text-teal-200 opacity-80 text-4xl mb-2 font-light">The Future of</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-white to-emerald-200 drop-shadow-lg">
                                Life Sciences
                            </span>
                        </h1>

                        <p className="text-lg text-teal-100/80 mb-10 max-w-xl leading-relaxed font-light border-l-2 border-teal-500/50 pl-6">
                            Constructing a resilient tomorrow through the convergence of biological innovation and sustainable policy.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                className="rounded-xl bg-teal-500 hover:bg-teal-400 text-white shadow-[0_0_20px_rgba(20,184,166,0.5)] border-none h-14 px-8 text-base"
                                onClick={() => setWizardOpen('abstract')}
                            >
                                <FileText size={20} className="mr-2" />
                                Submit Abstract
                            </Button>
                            <Button
                                variant="ghost"
                                size="lg"
                                className="rounded-xl border border-white/20 text-teal-50 hover:bg-white/10 h-14 px-8 text-base"
                                onClick={() => setWizardOpen('register')}
                            >
                                <Users size={20} className="mr-2" />
                                Registration
                            </Button>
                        </div>
                    </div>

                    {/* Right Visual Stats */}
                    <div className="flex-1 w-full max-w-sm">
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden group hover:border-teal-500/30 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 blur-[50px] -mr-10 -mt-10" />

                            <div className="space-y-8 relative z-10">
                                <div>
                                    <h3 className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-1">Venue</h3>
                                    <p className="text-2xl font-light text-white">{CONFERENCE_DATA.venue.split(',')[0]}</p>
                                    <p className="text-white/50 text-sm">{CONFERENCE_DATA.venue.split(',')[1]}</p>
                                </div>

                                <div>
                                    <h3 className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-1">Date</h3>
                                    <p className="text-2xl font-light text-white">{CONFERENCE_DATA.dates}</p>
                                    <p className="text-emerald-400 text-sm mt-1">Deadline: {CONFERENCE_DATA.deadlines.registration}</p>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-500/30">
                                            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Hybrid Event</p>
                                            <p className="text-white/50 text-xs">{CONFERENCE_DATA.mode}</p>
                                        </div>
                                    </div>
                                </div>
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
