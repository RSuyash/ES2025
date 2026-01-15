import { Button } from "../../components/ui/Button"
import Section from "../../components/ui/Section"
import { FileText, Users, MapPin, Globe, Clock, Calendar, Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Modal } from "../../components/ui/Modal"
import { AbstractSubmissionWizard } from "../../components/wizards/AbstractSubmissionWizard"
import { RegistrationWizard } from "../../components/wizards/RegistrationWizard"
import { CONFERENCE_DATA } from "../../data/conference"

// --- Components for the "Bento" Grid ---

const InfoCard = ({ className, children, delay = 0 }: { className?: string, children: React.ReactNode, delay?: number }) => (
    <motion.div
        className={`bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-4 relative overflow-hidden group hover:bg-white/90 hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] transition-all duration-500 ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
        {children}
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
    </motion.div>
)



const MaximalBackground = () => (
    <div className="absolute inset-0 overflow-hidden bg-slate-50">
        {/* Soft Gold/Teal Mesh Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(20,184,166,0.15),transparent_50%)]" />

        {/* Complex Geometric Pattern (The "Dense" Texture) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
            <pattern id="hex" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10,0 L20,5 L20,15 L10,20 L0,15 L0,5 Z" fill="none" stroke="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>

        {/* The "Divine" Fan - Rotating Mandala */}
        <motion.div
            className="absolute top-[-50%] left-[-20%] w-[150vh] h-[150vh] rounded-full border-[2px] border-teal-500/5 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(20,184,166,0.05)_180deg,transparent_360deg)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
            className="absolute bottom-[-20%] right-[-10%] w-[100vh] h-[100vh] rounded-full border-[1px] border-amber-500/10 bg-[conic-gradient(from_180deg,transparent_0deg,rgba(251,191,36,0.05)_180deg,transparent_360deg)]"
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Feathers (Dense) */}
        {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-64 h-64 bg-gradient-to-br from-teal-500/5 to-amber-500/5 rounded-full blur-3xl"
                style={{
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                }}
                animate={{
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    delay: i * 0.5,
                }}
            />
        ))}
    </div>
)

export const PeacockMaximalHero = () => {
    const [wizardOpen, setWizardOpen] = useState<'abstract' | 'register' | null>(null);
    const { stats } = CONFERENCE_DATA.history;

    return (
        <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden py-8 lg:py-0">
            <MaximalBackground />

            <Section className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">

                    {/* --- LEFT COLUMN: Main Text (Span 7) --- */}
                    <div className="lg:col-span-7 flex flex-col gap-6 text-left">

                        {/* Super Badge */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="inline-flex items-center gap-2 self-start mb-2"
                        >
                            <div className="px-3 py-1 rounded-full bg-slate-900 flex items-center gap-1.5 shadow-lg">
                                <Sparkles size={10} className="text-amber-400" />
                                <span className="text-[9px] font-bold uppercase tracking-widest text-white">4th Edition</span>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-white/60 border border-white/60 backdrop-blur-sm text-[9px] font-bold uppercase tracking-widest text-slate-700 shadow-sm">
                                {CONFERENCE_DATA.year}
                            </div>
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[0.95] tracking-tight"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            Enviro<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-amber-500">Summit</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-slate-600 font-light leading-relaxed max-w-lg"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Orchestrating the dialogue between <strong className="text-teal-700">biosphere resilience</strong> and <strong className="text-amber-600">technological innovation</strong>.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-3 mt-2"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Button
                                size="lg"
                                className="rounded-xl bg-slate-900 text-white h-12 px-6 text-sm font-medium hover:scale-105 transition-transform shadow-xl shadow-slate-900/20"
                                onClick={() => setWizardOpen('abstract')}
                            >
                                <FileText className="mr-2" size={16} />
                                Submit Abstract
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-xl border-2 border-slate-200 bg-white/60 text-slate-800 h-12 px-6 text-sm font-medium hover:border-teal-500 hover:text-teal-700 hover:bg-white"
                                onClick={() => setWizardOpen('register')}
                            >
                                <span className="mr-2">Register</span>
                                <ArrowRight size={16} />
                            </Button>
                        </motion.div>

                        {/* Quick Info Strip */}
                        <motion.div
                            className="flex flex-wrap items-center gap-5 mt-4 pt-5 border-t border-slate-200/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-amber-100/50 rounded-lg">
                                    <MapPin size={14} className="text-amber-600" />
                                </div>
                                <div className="text-xs leading-tight">
                                    <div className="font-bold text-slate-900">Pune, India</div>
                                    <div className="text-slate-500 text-[10px]">MIT-WPU Campus</div>
                                </div>
                            </div>
                            <div className="hidden sm:block w-px h-6 bg-slate-200" />
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-teal-100/50 rounded-lg">
                                    <Calendar size={14} className="text-teal-600" />
                                </div>
                                <div className="text-xs leading-tight">
                                    <div className="font-bold text-slate-900">{CONFERENCE_DATA.dates}</div>
                                    <div className="text-slate-500 text-[10px]">Hybrid Mode</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- RIGHT COLUMN: The "Bento" Grid (Span 5) --- */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-full content-center">

                        {/* Card 1: Main Count (Participants) - Spans 2 cols */}
                        <InfoCard className="col-span-2 bg-gradient-to-br from-teal-500 to-emerald-600 text-white border-none p-4" delay={0.5}>
                            <div className="flex justify-between items-start mb-2">
                                <Users size={18} className="text-teal-100" />
                                <span className="bg-white/20 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">Impact</span>
                            </div>
                            <div className="text-4xl font-bold mb-0.5">{stats.participants}</div>
                            <div className="text-teal-100 font-medium text-xs">Global Researchers & Delegates</div>
                        </InfoCard>

                        {/* Card 2: Countries */}
                        <InfoCard className="p-4" delay={0.6}>
                            <Globe size={18} className="text-sky-500 mb-2" />
                            <div className="text-2xl font-bold text-slate-900">{stats.countries}</div>
                            <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Nations</div>
                        </InfoCard>

                        {/* Card 3: States */}
                        <InfoCard className="p-4" delay={0.7}>
                            <MapPin size={18} className="text-amber-500 mb-2" />
                            <div className="text-2xl font-bold text-slate-900">{stats.states}</div>
                            <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">States</div>
                        </InfoCard>

                        {/* Card 4: Countdown / Deadline - Spans 2 cols */}
                        <InfoCard className="col-span-2 flex items-center justify-between p-4" delay={0.8}>
                            <div>
                                <div className="flex items-center gap-1.5 mb-1">
                                    <Clock size={12} className="text-rose-500" />
                                    <span className="text-[9px] font-bold uppercase text-rose-500 tracking-wider">Deadline Approaching</span>
                                </div>
                                <div className="text-base font-bold text-slate-900">Abstract Submission</div>
                                <div className="text-xs text-slate-500">{CONFERENCE_DATA.deadlines.abstract}</div>
                            </div>
                            <div className="h-8 w-8 rounded-full border-[3px] border-rose-100 border-t-rose-500 animate-spin" /> {/* Abstract visual timer */}
                        </InfoCard>

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
