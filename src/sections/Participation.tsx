
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, Mic2, Users, Sparkles } from "lucide-react"
import Section from "../components/ui/Section"
import { Button } from "../components/ui/Button"
import { Modal } from "../components/ui/Modal"
import { AbstractSubmissionWizard } from "../components/wizards/AbstractSubmissionWizard"
import { RegistrationWizard } from "../components/wizards/RegistrationWizard"

const Participation = () => {
    const [wizardOpen, setWizardOpen] = useState<'abstract' | 'register' | null>(null);

    return (
        <Section id="participate" className="relative overflow-hidden py-24 bg-slate-50">
            {/* Peacock Maximal Inspired Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(20,184,166,0.05),transparent_70%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.05),transparent_70%)]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <pattern id="part-hex" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10,0 L20,5 L20,15 L10,20 L0,15 L0,5 Z" fill="none" stroke="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#part-hex)" />
                </svg>
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6 shadow-sm"
                    >
                        <Sparkles size={14} className="text-amber-500" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            Join The Summit
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
                    >
                        How to <span className="underline decoration-4 decoration-teal-500/20 underline-offset-8">Participate</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 font-light text-xl"
                    >
                        Choose your pathway to join the dialogue.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Presenter Card - Teal Theme */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group relative bg-white/60 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-teal-500/10 transition-colors" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                <Mic2 size={32} />
                            </div>

                            <h3 className="font-serif text-3xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">For Presenters</h3>
                            <p className="text-slate-500 text-lg mb-8 font-light">Submit your research abstract for Oral or Poster presentation.</p>

                            <ul className="space-y-4 mb-10">
                                {["ISBN Abstract Book publication", "Certificate of Presentation", "Competitions & Awards", "Expert Feedback"].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-slate-700">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-teal-100/50 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-teal-600" />
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className="w-full h-14 rounded-2xl bg-slate-900 hover:bg-teal-700 text-white text-base font-medium transition-all shadow-lg shadow-slate-900/10 hover:shadow-teal-700/20 group-hover:scale-[1.02]"
                                onClick={() => setWizardOpen('abstract')}
                            >
                                <span className="mr-2">Submit Abstract</span>
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Attendee Card - Amber Theme */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="group relative bg-white/60 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(251,191,36,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-amber-500/10 transition-colors" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                <Users size={32} />
                            </div>

                            <h3 className="font-serif text-3xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">For Attendees</h3>
                            <p className="text-slate-500 text-lg mb-8 font-light">Join as a delegate to listen, learn, and network.</p>

                            <ul className="space-y-4 mb-10">
                                {["Access to all sessions", "Certificate of Participation", "Networking Lunch", "Conference Kit"].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-slate-700">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-amber-100/50 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-amber-600" />
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant="outline"
                                className="w-full h-14 rounded-2xl border-2 border-slate-200 bg-white/50 text-slate-900 hover:border-amber-500 hover:text-amber-700 hover:bg-white text-base font-medium transition-all group-hover:scale-[1.02]"
                                onClick={() => setWizardOpen('register')}
                            >
                                <span className="mr-2">Register Now</span>
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

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
        </Section>
    )
}

export default Participation
