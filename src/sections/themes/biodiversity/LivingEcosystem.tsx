import { motion } from "framer-motion";

export const LivingEcosystem = () => {
    return (
        <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gradient-to-b from-emerald-100 to-emerald-50">
            {/* Animated Sun Dapples */}
            <div className="absolute inset-0 opacity-30">
                <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
            </div>

            {/* SVG Plants - Layer 1 (Back) */}
            <div className="absolute bottom-0 left-10 text-emerald-800 opacity-20">
                <motion.svg width="60" height="100" viewBox="0 0 60 100" preserveAspectRatio="none"
                    animate={{ skewX: [0, 2, 0, -1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <path d="M30 100 Q 30 50 10 10 Q 30 50 50 10 Q 30 60 30 100" fill="currentColor" />
                </motion.svg>
            </div>
            <div className="absolute bottom-0 right-20 text-emerald-800 opacity-20">
                <motion.svg width="80" height="120" viewBox="0 0 80 120" preserveAspectRatio="none"
                    animate={{ skewX: [0, -2, 0, 1, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <path d="M40 120 Q 40 60 10 20 Q 40 70 70 20 Q 40 80 40 120" fill="currentColor" />
                </motion.svg>
            </div>

            {/* Flying Butterfly */}
            <motion.div
                className="absolute text-yellow-500"
                animate={{
                    x: [0, 50, 100, 150, 200, 250],
                    y: [100, 80, 110, 70, 90, 60],
                    rotate: [0, 10, -5, 10, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 2 10 5 8 5C6 5 2 3 2 7C2 11 6 12 8 12C6 12 2 13 2 17C2 21 6 19 8 19C10 19 12 22 12 22C12 22 14 19 16 19C18 19 22 21 22 17C22 13 18 12 16 12C18 12 22 11 22 7C22 3 18 5 16 5C14 5 12 2 12 2Z" />
                </svg>
            </motion.div>

            {/* SVG Plants - Layer 2 (Front) */}
            <div className="absolute bottom-0 left-0 w-full flex justify-around items-end opacity-40 text-emerald-700">
                <motion.div animate={{ rotate: [0, 2, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}>
                    <svg width="40" height="60" viewBox="0 0 40 60" fill="currentColor"><path d="M20 60 C 20 30 0 0 0 0 C 10 20 20 30 20 60 Z" /></svg>
                </motion.div>
                <motion.div animate={{ rotate: [0, -3, 0] }} transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}>
                    <svg width="50" height="80" viewBox="0 0 50 80" fill="currentColor"><circle cx="25" cy="10" r="10" /><path d="M25 80 L25 10" stroke="currentColor" strokeWidth="2" /></svg>
                </motion.div>
                <motion.div animate={{ rotate: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}>
                    <svg width="40" height="50" viewBox="0 0 40 50" fill="currentColor"><path d="M20 50 Q 0 20 20 0 Q 40 20 20 50" /></svg>
                </motion.div>
            </div>
        </div>
    );
};
