

import { motion } from "framer-motion"
import { Building2 } from "lucide-react"

const institutions = [
    "Wildlife Institute of India",
    "IUCN SSC",
    "SACON",
    "IISc Bangalore",
    "NUS Singapore",
    "MIT-WPU Pune",
    "Kerala Agricultural University",
    "Vidyabharati College",
    "EcoCaraga",
    "Sustaina Greens",
    "Shashwat Trust"
]

const SocialProof = () => {
    return (
        <section className="relative overflow-hidden py-16 bg-slate-950 border-y border-slate-900">
            {/* Peacock Dark Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.1),transparent_70%)]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 100 100">
                    <pattern id="social-hex" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10,0 L20,5 L20,15 L10,20 L0,15 L0,5 Z" fill="none" stroke="currentColor" className="text-teal-500" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#social-hex)" />
                </svg>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-slate-400 mb-3"
                    >
                        <Building2 size={16} className="text-teal-500" />
                        <span className="text-xs font-bold uppercase tracking-widest">Trusted By Researchers From</span>
                    </motion.div>
                </div>

                {/* Marquee Container */}
                <div className="relative flex overflow-hidden mask-linear-fade">
                    <motion.div
                        className="flex gap-12 items-center whitespace-nowrap"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {[...institutions, ...institutions, ...institutions].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 group cursor-default">
                                <span className="text-xl md:text-2xl font-serif font-bold text-slate-700 group-hover:text-teal-400 transition-colors duration-500">
                                    {item}
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Fade Edges for Marquee */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />
        </section>
    )
}

export default SocialProof
