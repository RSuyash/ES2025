import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { themes } from "../../data/themes";
import { OrganicBackground } from "./shared/OrganicBackground";
import * as Icons from "lucide-react";

// NOTE: Visual components removed per user request to focus on clean, high-quality listings.

const ThemeCard = ({ theme, isActive, onClick }: { theme: any, isActive: boolean, onClick: () => void }) => {
    // Dynamic Icon
    const IconComponent = (Icons as any)[theme.icon] || Icons.HelpCircle;

    return (
        <motion.div
            layoutId={`card-${theme.id}`}
            onClick={onClick}
            className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 border border-slate-100 shadow-xl hover:shadow-2xl ${isActive ? "col-span-1 md:col-span-2 row-span-2 min-h-[600px]" : "col-span-1 h-[400px]"
                }`}
            initial={false}
        >
            {/* Background */}
            <div className="absolute inset-0 transition-colors duration-500" style={{ backgroundColor: theme.palette.background }}>
                <OrganicBackground colors={theme.palette} variant="flow" />
            </div>

            {/* Content Container */}
            <div className={`relative h-full flex flex-col z-10 p-6 md:p-10 ${isActive ? '' : 'justify-between'}`}>

                {/* Header Section */}
                <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-xl backdrop-blur-md shadow-sm border border-white/50`} style={{ backgroundColor: `${theme.palette.background}80` }}>
                        <IconComponent className="w-10 h-10" style={{ color: theme.palette.primary }} />
                    </div>
                    {isActive && (
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="p-3 rounded-full bg-slate-900/5 hover:bg-slate-900/10 transition-colors"
                        >
                            <Icons.X className="w-6 h-6 text-slate-700" />
                        </motion.button>
                    )}
                </div>

                <div>
                    <motion.h3
                        layoutId={`title-${theme.id}`}
                        className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight"
                    >
                        {theme.title}
                    </motion.h3>

                    <motion.p
                        className="text-slate-600 font-medium leading-relaxed max-w-2xl text-lg"
                        animate={{ opacity: isActive ? 1 : 0.9 }}
                    >
                        {theme.description}
                    </motion.p>

                    {/* Expanded Content - The "Listing" */}
                    <AnimatePresence>
                        {isActive && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                className="mt-12"
                            >
                                <div className="h-px w-full bg-slate-900/10 mb-8" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                    {theme.tracks.map((track: any, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + (idx * 0.1) }}
                                            className="group"
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-px bg-slate-900/20 group-hover:w-12 transition-all duration-300" style={{ backgroundColor: theme.palette.primary }} />
                                                <h4 className="font-serif font-bold text-xl text-slate-800">
                                                    {track.title}
                                                </h4>
                                            </div>

                                            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-shadow hover:bg-white/80">
                                                <ul className="grid grid-cols-1 gap-3">
                                                    {track.topics.map((topic: string, i: number) => (
                                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                                            <Icons.CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme.palette.accent }} />
                                                            <span className="text-sm font-medium leading-normal">{topic}</span>
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
                        className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
                        style={{ color: theme.palette.primary }}
                    >
                        <span>Explore Tracks</span>
                        <Icons.ArrowRight className="w-4 h-4" />
                    </motion.div>
                )}
            </div>

            {/* Inactive State Gradient Overlay */}
            {!isActive && (
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent pointer-events-none" />
            )}
        </motion.div>
    );
};

const ConferenceThemes = () => {
    const [activeThemeId, setActiveThemeId] = useState<string | null>(null);

    return (
        <section id="themes" className="py-24 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="text-center mb-20">
                    <span className="text-sm font-bold tracking-[0.2em] text-cyan-700 uppercase mb-4 block">Conference Pillars</span>
                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-8">
                        Thematic Framework
                    </h2>
                    <p className="text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed font-light">
                        A comprehensive exploration of our planet's future, structured across four interconnected domains of research and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
