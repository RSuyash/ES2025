import { Button } from "../../components/ui/Button"
import Section from "../../components/ui/Section"
import { FileText, Users, Feather } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Modal } from "../../components/ui/Modal"
import { AbstractSubmissionWizard } from "../../components/wizards/AbstractSubmissionWizard"
import { RegistrationWizard } from "../../components/wizards/RegistrationWizard"
import { CONFERENCE_DATA } from "../../data/conference"

const PeacockBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden bg-[#020617]">
            {/* Base: Deep Royal Blue */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#111827]" />

            {/* The "Eye" (Ocellus) - Central Radiant Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(16,185,129,0.3)_0%,rgba(59,130,246,0.2)_40%,transparent_70%)] blur-[60px]" />

            {/* Iridescent Feathers - Fanning Out */}
            {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bottom-[-20%] left-1/2 w-[200px] h-[120vh] origin-bottom rounded-full opacity-30 mix-blend-screen"
                    style={{
                        background: `linear-gradient(to top, transparent, ${i % 2 === 0 ? '#3b82f6' : '#10b981'}, transparent)`,
                        transform: `translateX(-50%) rotate(${(i - 5.5) * 12}deg)`,
                    }}
                    animate={{
                        rotate: [
                            (i - 5.5) * 12,
                            (i - 5.5) * 12 + (i % 2 === 0 ? 2 : -2),
                            (i - 5.5) * 12
                        ],
                        scaleY: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 8 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Gold Dust / Sparkles */}
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={`dust-${i}`}
                    className="absolute bg-amber-400 rounded-full blur-[1px]"
                    style={{
                        width: Math.random() * 3 + 1 + 'px',
                        height: Math.random() * 3 + 1 + 'px',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                    }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}

            {/* Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 mix-blend-overlay pointer-events-none" />
        </div>
    )
}

export const PeacockHero = () => {
    const [wizardOpen, setWizardOpen] = useState<'abstract' | 'register' | null>(null);

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-white">
            <PeacockBackground />

            <Section className="relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Crown Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-950/50 backdrop-blur-md border border-indigo-500/30 mb-10 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:scale-105 transition-transform duration-500 cursor-default">
                        <Feather className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-100 bg-clip-text">
                            {CONFERENCE_DATA.year} Edition
                        </span>
                    </div>

                    <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-blue-300 to-indigo-300 drop-shadow-2xl">
                        Enviro Summit
                    </h1>

                    <p className="text-lg md:text-xl text-indigo-100/80 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                        Unfolding the spectrum of <span className="text-amber-300 font-medium">sustainable innovation</span> and ecological resilience.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                        <Button
                            size="lg"
                            className="rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-lg border border-indigo-400/20 w-full sm:w-auto min-w-[200px] h-14"
                            onClick={() => setWizardOpen('abstract')}
                        >
                            <FileText size={20} className="mr-2" />
                            Submit Abstract
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-100 hover:bg-emerald-900/40 hover:border-emerald-400/50 w-full sm:w-auto min-w-[200px] h-14 backdrop-blur-sm"
                            onClick={() => setWizardOpen('register')}
                        >
                            <Users size={20} className="mr-2" />
                            Register Now
                        </Button>
                    </div>

                    {/* Footer Info Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-indigo-500/20 pt-8 max-w-3xl mx-auto text-indigo-200/60 text-sm">
                        <div className="text-center">
                            <h4 className="uppercase tracking-widest text-[10px] font-bold text-indigo-400 mb-1">Date</h4>
                            <span>{CONFERENCE_DATA.dates}</span>
                        </div>
                        <div className="text-center border-l border-indigo-500/20">
                            <h4 className="uppercase tracking-widest text-[10px] font-bold text-indigo-400 mb-1">Venue</h4>
                            <span>{CONFERENCE_DATA.venue.split(',')[0]}</span>
                        </div>
                        <div className="text-center border-l border-indigo-500/20">
                            <h4 className="uppercase tracking-widest text-[10px] font-bold text-indigo-400 mb-1">Deadline</h4>
                            <span className="text-amber-400/90">{CONFERENCE_DATA.deadlines.registration}</span>
                        </div>
                        <div className="text-center border-l border-indigo-500/20">
                            <h4 className="uppercase tracking-widest text-[10px] font-bold text-indigo-400 mb-1">Mode</h4>
                            <span>Hybrid Event</span>
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
