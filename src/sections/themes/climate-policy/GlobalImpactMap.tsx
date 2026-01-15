import { motion } from "framer-motion";

export const GlobalImpactMap = () => {
    return (
        <div className="relative h-64 w-full overflow-hidden rounded-xl bg-[#e8e4dc] border border-stone-200">
            {/* Stylized Map SVG */}
            <svg className="w-full h-full opacity-40 text-stone-400" fill="currentColor" viewBox="0 0 200 100">
                <path d="M20 30 Q 40 10 60 30 T 100 30 T 140 30 Q 160 50 180 30 V 80 H 20 Z" />
            </svg>

            {/* Impact Hotspots */}
            {[
                { x: 30, y: 40, color: "text-red-500" },
                { x: 80, y: 50, color: "text-amber-500" },
                { x: 140, y: 30, color: "text-orange-500" },
            ].map((spot, idx) => (
                <div key={idx} className="absolute" style={{ left: `${spot.x}px`, top: `${spot.y}px` }}>
                    <motion.div
                        className={`w-3 h-3 rounded-full opacity-80 ${spot.color.replace('text', 'bg')}`}
                        animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx }}
                    />
                    <div className={`w-3 h-3 rounded-full ${spot.color.replace('text', 'bg')}`} />
                </div>
            ))}

            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-stone-600 uppercase">
                Priority Zones
            </div>
        </div>
    );
};
