import { Button } from "../../components/ui/Button"
import Section from "../../components/ui/Section"
import { Play, Activity } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Modal } from "../../components/ui/Modal"
import { AbstractSubmissionWizard } from "../../components/wizards/AbstractSubmissionWizard"
import { RegistrationWizard } from "../../components/wizards/RegistrationWizard"
import { CONFERENCE_DATA } from "../../data/conference"

// Geometric Feather with Stat
const GeoFeather = ({ rotate, color, stat, label }: { rotate: number, color: string, stat?: string, label?: string }) => (
    <motion.div
        className="absolute bottom-[-50px] left-1/2 w-[160px] h-[70vh] origin-bottom rounded-t-full flex flex-col items-center justify-start pt-10"
        style={{
            background: color,
            transform: `translateX(-50%) rotate(${rotate}deg)`,
            border: '2px solid rgba(255,255,255,0.1)'
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: 'backOut', delay: Math.abs(rotate) / 200 }}
    >
        {stat && (
            <motion.div
                className="flex flex-col items-center -rotate-[15deg] group hover:scale-125 transition-transform cursor-pointer"
                style={{ transform: `rotate(${-rotate}deg)` }} // Counter-rotate to keep text upright
            >
                <span className="text-3xl font-bold text-white drop-shadow-md">{stat}</span>
                <span className="text-[10px] uppercase font-bold text-white/70 tracking-widest">{label}</span>
            </motion.div>
        )}
    </motion.div>
)

export const PeacockAbstractHero = () => {
    const [wizardOpen, setWizardOpen] = useState<'abstract' | 'register' | null>(null);
    const { stats } = CONFERENCE_DATA.history;

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Geometric Background */}
            <div className="absolute inset-0 bg-[#0f172a] overflow-hidden">
                {/* The Fan */}
                <div className="absolute bottom-[-100px] left-1/2 w-full h-full">
                    {/* Decorative Feathers */}
                    <GeoFeather rotate={-75} color="#1e293b" />
                    <GeoFeather rotate={75} color="#1e293b" />
                    <GeoFeather rotate={-60} color="#334155" />
                    <GeoFeather rotate={60} color="#334155" />

                    {/* Stat Feathers */}
                    <GeoFeather rotate={-45} color="#0f766e" stat={stats.participants} label="Attendees" />
                    <GeoFeather rotate={45} color="#0f766e" stat={stats.states} label="States" />
                    <GeoFeather rotate={-30} color="#0d9488" />
                    <GeoFeather rotate={30} color="#0d9488" />
                    <GeoFeather rotate={-15} color="#14b8a6" stat={stats.countries} label="Nations" />
                    <GeoFeather rotate={15} color="#14b8a6" stat={CONFERENCE_DATA.history.year} label="Heritage" />

                    {/* Center Plume */}
                    <GeoFeather rotate={0} color="#2dd4bf" stat="4.8" label="Rating" />
                </div>
            </div>

            <Section className="relative z-10 w-full pointer-events-none mt-[-10vh]">
                <div className="max-w-4xl mx-auto text-center pointer-events-auto">

                    <h1 className="font-sans text-7xl md:text-9xl font-black mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-teal-100 to-slate-400 drop-shadow-2xl">
                        ES<span className="text-teal-400">2026</span>
                    </h1>

                    <p className="text-2xl font-light text-slate-300 mb-8 uppercase tracking-widest">
                        International Enviro Summit
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            size="lg"
                            className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold px-8 h-14 rounded-none skew-x-[-10deg] hover:skew-x-0 transition-transform"
                            onClick={() => setWizardOpen('abstract')}
                        >
                            <span className="skew-x-[10deg] group-hover:skew-x-0 flex items-center">
                                <Activity className="mr-2" /> SUBMIT PAPER
                            </span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="text-teal-400 border border-teal-500/50 hover:bg-teal-500/10 h-14 rounded-none skew-x-[-10deg]"
                            onClick={() => setWizardOpen('register')}
                        >
                            <span className="skew-x-[10deg] flex items-center">
                                <Play className="mr-2" size={16} fill="currentColor" /> WATCH TRAILER
                            </span>
                        </Button>
                    </div>

                </div>
            </Section>

            {/* Wizards (Same) */}
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
