import { motion } from "framer-motion";

export const CityscapeParallax = () => {
    return (
        <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-200 to-white">
            {/* Sun */}
            <motion.div
                className="absolute top-4 right-8 w-12 h-12 bg-yellow-300 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Back Layer Clouds */}
            <motion.div
                className="absolute top-10 left-0 w-full"
                animate={{ x: [-20, 0, -20] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <svg className="w-full h-32 opacity-30 text-white" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 50 Q 20 40 40 50 T 80 50 T 120 50 V 100 H 0 Z" />
                </svg>
            </motion.div>

            {/* City Silhouette - Back */}
            <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end opacity-20 text-indigo-900">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path d="M0 100 L0 60 L20 60 L20 40 L40 40 L40 70 L60 70 L60 20 L90 20 L90 100 Z M120 100 L120 50 L140 50 L140 80 L170 80 L170 45 L200 45 L200 100 Z M300 100 L300 30 L350 30 L350 100 Z" />
                </svg>
            </div>

            {/* City Silhouette - Front */}
            <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end opacity-40 text-blue-900">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path d="M10 100 L10 50 L30 50 L30 80 L60 80 L60 100 Z M80 100 L80 30 L110 30 L110 60 L130 60 L130 100 Z M220 100 L220 40 L260 40 L260 100 Z" />
                </svg>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>
    );
};
