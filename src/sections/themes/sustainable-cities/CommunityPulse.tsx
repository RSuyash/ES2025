import { motion } from "framer-motion";

export const CommunityPulse = () => {
    return (
        <div className="relative h-20 w-full mt-4 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm border border-white/20 flex items-center justify-center">
            {/* Pulsing Core */}
            <motion.div
                className="absolute w-64 h-64 bg-sky-500/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Moving connectivity lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30">
                <motion.path
                    d="M-10,40 Q 50,10 100,40 T 200,40 T 300,40 T 400,40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-sky-600"
                    animate={{ x: [-100, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
            </svg>

            <div className="relative z-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-sky-900 tracking-widest uppercase">Community Live Pulse</span>
            </div>
        </div>
    );
};
