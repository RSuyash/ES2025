import { Button } from "../../components/ui/Button"
import Section from "../../components/ui/Section"
import { FileText, Users, Sprout } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Modal } from "../../components/ui/Modal"
import { AbstractSubmissionWizard } from "../../components/wizards/AbstractSubmissionWizard"
import { RegistrationWizard } from "../../components/wizards/RegistrationWizard"
import { CONFERENCE_DATA } from "../../data/conference"

const EcoMinimalBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden bg-white">
            {/* Base Texture: Subtle Paper Grain */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />

            {/* Watercolor Stains - Soft organic blobs */}
            <motion.div
                className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-emerald-100/60 rounded-full blur-[100px] mix-blend-multiply"
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -30, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-sky-100/60 rounded-full blur-[80px] mix-blend-multiply"
                animate={{
                    scale: [1.1, 1, 1.1],
                    y: [0, 40, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-teal-50/80 rounded-full blur-[80px] mix-blend-multiply"
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Minimalist Floating Elements (Stroke Only) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <motion.circle cx="85%" cy="20%" r="50" stroke="#10b981" strokeWidth="1.5" fill="none"
                    animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect x="10%" y="60%" width="60" height="60" rx="20" stroke="#0ea5e9" strokeWidth="1.5" fill="none" transform="rotate(15)"
                    animate={{ rotate: [15, 25, 15], y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path d="M50 50 L70 90 L30 90 Z" stroke="#fbbf24" strokeWidth="1.5" fill="none"
                    style={{ x: '50%', y: '50%' }}
                    animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
            </svg>
        </div>
    )
}

export const EcoMinimalHero = () => {
    const [wizardOpen, setWizardOpen] = useState<'abstract' | 'register' | null>(null);

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <EcoMinimalBackground />

            <Section className="relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge - Minimalist Outline */}
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-emerald-600/20 bg-emerald-50/50 mb-10 transition-colors hover:bg-emerald-50">
                        <div className="p-1.5 bg-emerald-100 rounded-full">
                            <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-900/80">
                            {CONFERENCE_DATA.year} Edition
                        </span>
                    </div>

                    <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9] text-slate-900">
                        Enviro<br />
                        <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">Summit</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 mb-12 font-light max-w-2xl mx-auto leading-relaxed text-balance">
                        Where <span className="font-normal text-slate-800 underline decoration-sky-300 underline-offset-4 decoration-2">innovation</span> meets nature to architect a resilient future.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
                        <Button
                            size="lg"
                            className="rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto min-w-[180px] h-14 text-base font-medium"
                            onClick={() => setWizardOpen('abstract')}
                        >
                            <FileText size={18} className="mr-2" />
                            Submit Work
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full border-2 border-slate-200 bg-white hover:border-emerald-500 hover:text-emerald-700 text-slate-600 shadow-sm w-full sm:w-auto min-w-[180px] h-14 text-base font-medium"
                            onClick={() => setWizardOpen('register')}
                        >
                            <Users size={18} className="mr-2" />
                            Join Us
                        </Button>
                    </div>

                    {/* Minimal Stats */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-slate-100 pt-10">
                        <div className="text-center group cursor-default">
                            <div className="text-3xl font-serif text-slate-900 group-hover:text-emerald-600 transition-colors">{CONFERENCE_DATA.dates.split(' ')[0]}</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Date</div>
                        </div>
                        <div className="text-center group cursor-default">
                            <div className="text-3xl font-serif text-slate-900 group-hover:text-sky-600 transition-colors">Hybrid</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Format</div>
                        </div>
                        <div className="text-center group cursor-default">
                            <div className="text-3xl font-serif text-slate-900 group-hover:text-amber-500 transition-colors">Pune</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Location</div>
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
