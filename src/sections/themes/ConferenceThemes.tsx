import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { themes } from "../../data/themes";
import * as Icons from "lucide-react";

// Peacock Themed Card
const ThemeCard = ({ theme, isActive, onClick }: { theme: any, isActive: boolean, onClick: () => void }) => {
    // Dynamic Icon
    const IconComponent = (Icons as any)[theme.icon] || Icons.HelpCircle;

    return (
        <motion.div
            layoutId={`card-${theme.id}`}
            onClick={onClick}
            className={`relative overflow-hidden rounded-[2.5rem] cursor-pointer transition-all duration-700 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group bg-white ${isActive ? "col-span-1 md:col-span-2 row-span-2 min-h-[600px] ring-2 ring-teal-500/10" : "col-span-1 h-[420px]"
                }`}
            initial={false}
        >
            {/* Card Background Gradient - Peacock Style */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 transition-transform duration-1000 group-hover:scale-110 -mr-20 -mt-20`}
                    style={{ backgroundColor: theme.palette.primary }}
                />
                <div
                    className={`absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[80px] opacity-5 transition-transform duration-1000 group-hover:scale-110 -ml-10 -mb-10`}
                    style={{ backgroundColor: theme.palette.accent }}
                />

                {/* Subtle Hex Pattern inside card */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500" viewBox="0 0 100 100">
                    <pattern id={`hex-${theme.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10,0 L20,5 L20,15 L10,20 L0,15 L0,5 Z" fill="none" stroke="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#hex-${theme.id})`} />
                </svg>
            </div>

            {/* Content Container */}
            <div className={`relative h-full flex flex-col z-10 p-8 md:p-12 ${isActive ? '' : 'justify-between'}`}>

                {/* Header Section */}
                <div className="flex justify-between items-start mb-8">
                    <div
                        className={`p-5 rounded-2xl backdrop-blur-md shadow-sm border border-white/60 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                        style={{ backgroundColor: `${theme.palette.background}` }}
                    >
                        <IconComponent className="w-10 h-10" style={{ color: theme.palette.primary }} />
                    </div>
                    {isActive && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                        >
                            <Icons.X className="w-6 h-6 text-slate-700" />
                        </motion.button>
                    )}
                </div>

                <div>
                    <motion.h3
                        layoutId={`title-${theme.id}`}
                        className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight transition-colors duration-300"
                        whileHover={{ color: theme.palette.primary }}
                    >
                        {theme.title}
                    </motion.h3>

                    <motion.p
                        className="text-slate-600 font-medium leading-relaxed max-w-2xl text-lg md:text-xl font-light"
                        animate={{ opacity: isActive ? 1 : 0.8 }}
                    >
                        {theme.description}
                    </motion.p>

                    {/* Expanded Content - The "Listing" */}
                    <AnimatePresence>
                        {isActive && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                                className="mt-16"
                            >
                                <div className="h-px w-full bg-slate-100 mb-10" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                    {theme.tracks.map((track: any, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + (idx * 0.1) }}
                                            className="group/track"
                                        >
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-10 h-1 rounded-full group-hover/track:w-16 transition-all duration-300" style={{ backgroundColor: theme.palette.primary }} />
                                                <h4 className="font-serif font-bold text-2xl text-slate-800">
                                                    {track.title}
                                                </h4>
                                            </div>

                                            <div className="bg-slate-50/80 backdrop-blur-xl rounded-[1.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-white hover:-translate-y-1">
                                                <ul className="grid grid-cols-1 gap-4">
                                                    {track.topics.map((topic: string, i: number) => (
                                                        <li key={i} className="flex items-start gap-4 text-slate-600">
                                                            <Icons.CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: theme.palette.accent }} />
                                                            <span className="text-base font-medium leading-relaxed">{topic}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {!isActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-8 flex items-center gap-3 text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300"
                        style={{ color: theme.palette.primary }}
                    >
                        <span>Explore Tracks</span>
                        <Icons.ArrowRight className="w-4 h-4" />
                    </motion.div>
                )}
            </div>

            {/* Hover Shine Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none ${isActive ? 'hidden' : ''}`} />
        </motion.div>
    );
};

const ConferenceThemes = () => {
    const [activeThemeId, setActiveThemeId] = useState<string | null>(null);

    return (
        <section id="themes" className="py-32 bg-slate-50 min-h-screen relative overflow-hidden">
            {/* Peacock Maximal Inspired Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.05),transparent_70%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.05),transparent_70%)]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <pattern id="themes-hex" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10,0 L20,5 L20,15 L10,20 L0,15 L0,5 Z" fill="none" stroke="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#themes-hex)" />
                </svg>
                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-[1400px]">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm"
                    >
                        <Icons.Layers size={14} className="text-teal-600" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            Conference Pillars
                        </span>
                    </motion.div>

                    <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8">
                        Thematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-amber-500">Framework</span>
                    </h2>
                    <p className="text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed font-light">
                        A comprehensive exploration of our planet's future, structured across four interconnected domains of research and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {themes.map((theme) => (
                        <ThemeCard
                            key={theme.id}
                            theme={theme}
                            isActive={activeThemeId === theme.id}
                            onClick={() => setActiveThemeId(activeThemeId === theme.id ? null : theme.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConferenceThemes;
