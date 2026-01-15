import { motion } from "framer-motion";

export const EnergyFlow = () => {
    return (
        <div className="relative h-48 w-full bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center border border-lime-900/50">
            {/* Source Node */}
            <div className="absolute left-8 w-12 h-12 rounded-full border-2 border-lime-500 flex items-center justify-center z-10 bg-slate-800">
                <span className="text-lime-500 text-xs font-bold">GEN</span>
            </div>

            {/* Usage Node */}
            <div className="absolute right-8 w-12 h-12 rounded-full border-2 border-cyan-500 flex items-center justify-center z-10 bg-slate-800">
                <span className="text-cyan-500 text-xs font-bold">USE</span>
            </div>

            {/* Connecting Animated Stream */}
            <svg className="absolute inset-0 w-full h-full">
                <defs>
                    <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#84cc16" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                </defs>
                <motion.path
                    d="M 60 96 L 260 96"
                    fill="none"
                    stroke="url(#flowGrad)"
                    strokeWidth="4"
                    strokeDasharray="10 5"
                    animate={{ strokeDashoffset: [0, -100] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="opacity-50"
                />

                {/* Particles */}
                <motion.circle r="3" fill="#fff"
                    animate={{
                        cx: [50, 270],
                        cy: [96, 96],
                        opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>

            {/* Circular indicator */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-lime-400 uppercase tracking-widest">
                Circular Energy Flow
            </div>
        </div>
    );
};
