import { Button } from "../../components/ui/Button"
import Section from "../../components/ui/Section"
import { FileText, Users, MapPin, Globe, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Modal } from "../../components/ui/Modal"
import { AbstractSubmissionWizard } from "../../components/wizards/AbstractSubmissionWizard"
import { RegistrationWizard } from "../../components/wizards/RegistrationWizard"
import { CONFERENCE_DATA } from "../../data/conference"

const FeatherLightBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden bg-slate-50">
            {/* Base: Pearl Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-teal-50" />

            {/* Abstract White Peacock Feathers - Large Strokes */}
            {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-[600px] h-[800px] origin-bottom rounded-[100%] border border-teal-100/40 bg-gradient-to-t from-white/80 to-teal-50/20 backdrop-blur-sm"
                    style={{
                        transform: `translate(-50%, -20%) rotate(${(i - 2.5) * 30}deg)`,
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [0.95, 1, 0.95],
                        opacity: 1,
                        rotate: [(i - 2.5) * 30 - 2, (i - 2.5) * 30 + 2, (i - 2.5) * 30 - 2]
                    }}
                    transition={{
                        duration: 8 + i,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* The "Eye" of the feather - Pearl/Gold */}
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-32 h-40 rounded-[50%] bg-gradient-to-br from-teal-100/50 to-amber-100/50 border border-white shadow-sm" />
                </motion.div>
            ))}

            {/* Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-30 pointer-events-none" />
        </div>
    )
}

const StatFloatingCard = ({ icon: Icon, value, label, delay, position }: any) => (
    <motion.div
        className={`absolute hidden lg:flex flex-col items-center justify-center w-32 h-32 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-lg ${position}`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
    >
        <div className="p-2 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full mb-1 text-white shadow-inner">
            <Icon size={16} />
        </div>
        <span className="text-xl font-bold text-slate-800">{value}</span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{label}</span>
    </motion.div>
)

export const PeacockLightHero = () => {
    const [wizardOpen, setWizardOpen] = useState<'abstract' | 'register' | null>(null);
    const { stats } = CONFERENCE_DATA.history;

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <FeatherLightBackground />

            {/* Floating Stats - The "Hook" */}
            <StatFloatingCard icon={Users} value={stats.participants} label="Participants" delay={0} position="top-[15%] left-[15%]" />
            <StatFloatingCard icon={Globe} value={stats.countries} label="Countries" delay={1.5} position="top-[20%] right-[15%]" />
            <StatFloatingCard icon={MapPin} value={stats.states} label="States" delay={0.8} position="bottom-[20%] left-[10%]" />
            <StatFloatingCard icon={Trophy} value="25+" label="Awards" delay={2.2} position="bottom-[25%] right-[10%]" />


            <Section className="relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-teal-100 shadow-sm mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
                            {CONFERENCE_DATA.year} International Edition
                        </span>
                    </motion.div>

                    <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none text-slate-900">
                        Enviro<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-amber-400">Summit</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                        Join the global convergence of <span className="font-medium text-teal-700">scientific minds</span> shaping a resilient future.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
                        <Button
                            size="lg"
                            className="rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto min-w-[200px] h-14"
                            onClick={() => setWizardOpen('abstract')}
                        >
                            <FileText size={20} className="mr-2" />
                            Submit Work
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full border border-slate-200 bg-white/50 text-slate-700 hover:bg-white/80 hover:border-teal-300 w-full sm:w-auto min-w-[200px] h-14"
                            onClick={() => setWizardOpen('register')}
                        >
                            <Users size={20} className="mr-2" />
                            Join Now
                        </Button>
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
