import { motion } from "framer-motion";
import Section from "../components/ui/Section";
import { Carousel } from "../components/ui/Carousel";
import { CONFERENCE_DATA } from "../data/conference";
import { Users, Globe, Map, History } from "lucide-react";

const PastSummit = () => {
    // Using placeholder images or reusing existing ones since generation failed
    const images = [
        {
            src: "/assets/images/es2024/Panel.png",
            alt: "EnviroSummit 2024 Panel",
            caption: "Experts deliberating on climate policy tracks."
        },
        {
            src: "/assets/images/es2024/auditorium-big.jpg",
            alt: "Opening Ceremony",
            caption: "The grand opening at the World Peace Auditorium."
        },
        // Renamed assets (Note to user: Ensure these are converted to real JPGs)
        ...Array.from({ length: 14 }).map((_, i) => ({
            src: `/assets/images/es2024/es24-${String(i + 1).padStart(2, '0')}.jpg`,
            alt: `Event Highlight ${i + 1}`,
            caption: "Moments from EnviroSummit 2024"
        }))
    ];

    const stats = [
        { icon: Users, value: CONFERENCE_DATA.history.stats.participants, label: "Participants", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
        { icon: Globe, value: CONFERENCE_DATA.history.stats.countries, label: "Countries", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
        { icon: Map, value: CONFERENCE_DATA.history.stats.states, label: "States", color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    ];

    return (
        <Section className="relative overflow-hidden py-24 bg-white" id="history">
            {/* Peacock Maximal Inspired Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.03),transparent_70%)]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <pattern id="history-hex" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10,0 L20,5 L20,15 L10,20 L0,15 L0,5 Z" fill="none" stroke="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#history-hex)" />
                </svg>
            </div>

            <div className="relative z-10 mb-16 text-center max-w-3xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6"
                >
                    <History size={14} className="text-slate-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Legacy
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 font-bold"
                >
                    EnviroSummit <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">{CONFERENCE_DATA.history.year}</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-slate-600 leading-relaxed font-light"
                >
                    {CONFERENCE_DATA.history.description}
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto px-4">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border ${stat.border} text-center group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
                    >
                        <div className={`absolute top-0 right-0 p-32 rounded-full blur-3xl opacity-20 -mr-16 -mt-16 transition-transform group-hover:scale-110 ${stat.bg.replace('/10', '/30')}`} />

                        <div className={`w-16 h-16 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-sm relative z-10`}>
                            <stat.icon size={28} />
                        </div>
                        <div className="text-4xl font-bold text-slate-900 mb-1 relative z-10">{stat.value}</div>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-widest relative z-10">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative p-2 rounded-3xl bg-gradient-to-b from-slate-200/50 to-white border border-slate-100 shadow-2xl"
                >
                    <div className="rounded-2xl overflow-hidden">
                        <Carousel images={images} />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default PastSummit;
