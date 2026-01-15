
import { motion } from "framer-motion"
import { Target, Leaf, Sparkles, Quote } from "lucide-react"
import Section from "../components/ui/Section"

const Mission = () => {
    return (
        <Section id="mission" className="relative overflow-hidden py-24 bg-slate-50">
            {/* Peacock Maximal Inspired Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.05),transparent_70%),radial-gradient(circle_at_bottom_left,_rgba(251,191,36,0.05),transparent_70%)]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <pattern id="mission-hex" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10,0 L20,5 L20,15 L10,20 L0,15 L0,5 Z" fill="none" stroke="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#mission-hex)" />
                </svg>
                {/* Decorative Blobs */}
                <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-[-10%] w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-teal-50 border border-teal-100/50 rounded-full">
                        <Target size={14} className="text-teal-600" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-teal-800">Our Purpose</span>
                    </div>

                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-8 font-bold leading-tight">
                        Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Wisdom</span> <br />
                        & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Action</span>
                    </h2>

                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                        <p className="flex gap-4">
                            <span className="shrink-0 mt-1">
                                <Leaf size={20} className="text-teal-500" />
                            </span>
                            <span>
                                <strong className="font-semibold text-slate-800">EnviroSummit</strong> is not just a conference; it is a convergence of academic rigor and on-the-ground environmental action.
                                Hosted by the <span className="text-teal-700 font-medium">Department of Environmental Studies at MIT-WPU</span>, this platform brings together the brightest minds in ecology, policy, and sustainable development.
                            </span>
                        </p>
                        <p className="flex gap-4">
                            <span className="shrink-0 mt-1">
                                <Sparkles size={20} className="text-amber-500" />
                            </span>
                            <span>
                                Our mission is to move beyond conversation. We provide a stage for students to present peer-reviewed research, for experts to challenge policy frameworks, and for the community to witness the real-world impact of environmental science.
                            </span>
                        </p>
                    </div>
                </motion.div>

                {/* Visual / Context */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Image Container */}
                    <div className="relative z-10 aspect-video md:aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700">
                        <img src="/assets/images/es2024/Panel.png" alt="Past Panel Discussion" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                    </div>

                    {/* Decorative Frame */}
                    <div className="absolute inset-0 border-2 border-teal-500/10 rounded-2xl transform -rotate-3 z-0 scale-105" />

                    {/* Quote Card */}
                    <motion.div
                        className="relative mt-6 md:absolute md:-bottom-12 md:-left-12 max-w-sm z-20"
                        whileHover={{ y: -5 }}
                    >
                        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/60 relative overflow-hidden">
                            <Quote className="absolute top-4 right-4 text-slate-100 -rotate-12 transform scale-150" size={64} />

                            <p className="font-serif italic text-slate-700 text-lg leading-relaxed relative z-10">
                                "A unique platform where student research stands shoulder-to-shoulder with expert insights."
                            </p>
                            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100 relative z-10">
                                <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                                    <img src="https://ui-avatars.com/api/?name=Dr+Wanner&background=0D9488&color=fff" alt="Dr. Wanner" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Dr. Wanner</div>
                                    <div className="text-[10px] text-teal-600 font-medium">Keynote Speaker 2024</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    )
}

export default Mission
