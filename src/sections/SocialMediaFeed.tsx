import { useEffect } from "react"
import { motion } from "framer-motion"
import Section from "../components/ui/Section"
import { Instagram, Linkedin, Share2 } from "lucide-react"
import { Button } from "../components/ui/Button"

const SocialMediaFeed = () => {
    // Load Instagram Embed Script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <Section className="relative overflow-hidden py-24 bg-slate-50">
            {/* Peacock Maximal Inspired Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.05),transparent_70%),radial-gradient(circle_at_bottom_left,_rgba(251,191,36,0.05),transparent_70%)]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <pattern id="social-hex-bg" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10,0 L20,5 L20,15 L10,20 L0,15 L0,5 Z" fill="none" stroke="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#social-hex-bg)" />
                </svg>
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6 shadow-sm"
                    >
                        <Share2 size={14} className="text-teal-600" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            Community
                        </span>
                    </motion.div>

                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Live from the <span className="underline decoration-4 decoration-amber-500/20 underline-offset-8">Community</span>
                    </h2>
                    <p className="text-slate-600 text-lg font-light">
                        Follow the conversation <span className="font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-md">@ecolenviron</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* 1. Instagram Post - @ecolenviron */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 p-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden h-[580px] overflow-y-auto custom-scrollbar"
                    >
                        <blockquote
                            className="instagram-media"
                            data-instgrm-captioned
                            data-instgrm-permalink="https://www.instagram.com/p/C3ZDEG1KwXO/?utm_source=ig_embed&amp;utm_campaign=loading"
                            data-instgrm-version="14"
                            style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: 'none', margin: '0', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)' }}
                        >
                            {/* Instagram embed fallback content omitted for brevity, script handles it */}
                        </blockquote>
                    </motion.div>

                    {/* 2. LinkedIn Post - MIT WPU Official */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 p-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden h-[580px]"
                    >
                        <iframe
                            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7406672939456049152?collapsed=1"
                            height="550"
                            width="100%"
                            frameBorder="0"
                            allowFullScreen
                            title="Embedded post"
                            className="w-full min-w-[320px] max-w-[504px] rounded-xl"
                        />
                    </motion.div>

                    {/* 3. LinkedIn Post - Ecol Environ */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 p-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden h-[580px]"
                    >
                        <iframe
                            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7330114460591845377?collapsed=1"
                            height="550"
                            width="100%"
                            frameBorder="0"
                            allowFullScreen
                            title="Embedded post"
                            className="w-full min-w-[320px] max-w-[504px] rounded-xl"
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center mt-16 gap-4"
                >
                    <Button
                        variant="outline"
                        className="h-12 px-6 rounded-xl border-slate-200 hover:border-pink-500 hover:text-pink-600 hover:bg-pink-50 gap-2 transition-all duration-300"
                        onClick={() => window.open('https://www.instagram.com/ecolenviron', '_blank')}
                    >
                        <Instagram size={18} />
                        <span className="font-medium">Follow on Instagram</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="h-12 px-6 rounded-xl border-slate-200 hover:border-blue-600 hover:text-blue-700 hover:bg-blue-50 gap-2 transition-all duration-300"
                        onClick={() => window.open('https://www.linkedin.com/in/ecol-environ', '_blank')}
                    >
                        <Linkedin size={18} />
                        <span className="font-medium">Connect on LinkedIn</span>
                    </Button>
                </motion.div>
            </div>
        </Section>
    )
}

export default SocialMediaFeed
