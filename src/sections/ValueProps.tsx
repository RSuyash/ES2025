import { motion } from "framer-motion"
import Section from "../components/ui/Section"
import { Mic2, Award, Users, Globe2, Sparkles } from "lucide-react"

const benefits = [
    {
        icon: Mic2,
        title: "Present Your Work",
        description: "Showcase your research via oral or poster presentations to a distinguished panel.",
        color: "from-teal-400 to-emerald-500",
        shadow: "shadow-teal-500/20"
    },
    {
        icon: Award,
        title: "Get Certified",
        description: "Receive officially recognized certificates and publication opportunities (ISBN Abstract Book).",
        color: "from-amber-400 to-orange-500",
        shadow: "shadow-amber-500/20"
    },
    {
        icon: Users,
        title: "Expert Mentorship",
        description: "Gain critical feedback from leading academicians and industry professionals.",
        color: "from-blue-400 to-indigo-500",
        shadow: "shadow-blue-500/20"
    },
    {
        icon: Globe2,
        title: "Global Network",
        description: "Connect with 250+ delegates from across India and 6+ countries.",
        color: "from-rose-400 to-pink-500",
        shadow: "shadow-rose-500/20"
    }
]

const ValueProps = () => {
    return (
        <Section id="benefits" className="relative overflow-hidden py-24 bg-slate-50">
            {/* Peacock Maximal Inspired Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.05),transparent_70%),radial-gradient(circle_at_top_left,_rgba(251,191,36,0.05),transparent_70%)]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <pattern id="value-hex" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10,0 L20,5 L20,15 L10,20 L0,15 L0,5 Z" fill="none" stroke="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#value-hex)" />
                </svg>
            </div>

            <div className="relative z-10 text-center mb-20 max-w-3xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6 shadow-sm"
                >
                    <Sparkles size={14} className="text-amber-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Why Attend?
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
                >
                    Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">EnviroSummit</span>?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-slate-600 font-light leading-relaxed"
                >
                    A definitive platform for students and researchers to transition from
                    learning to leading in the environmental sector.
                </motion.p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden relative"
                    >
                        {/* Gradient Blob on Hover */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${benefit.color} opacity-0 group-hover:opacity-10 rounded-bl-[4rem] transition-opacity duration-500 ease-out pointer-events-none`} />

                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} ${benefit.shadow} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <benefit.icon size={26} />
                        </div>

                        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                            {benefit.title}
                        </h3>

                        <p className="text-sm text-slate-500 leading-relaxed font-light">
                            {benefit.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}

export default ValueProps
