import { motion } from "framer-motion";

const species = [
    { id: 1, name: "Predators", x: 20, y: 20 },
    { id: 2, name: "Herbivores", x: 80, y: 30 },
    { id: 3, name: "Plants", x: 50, y: 70 },
    { id: 4, name: "Soil", x: 30, y: 90 },
];

export const SpeciesNetwork = () => {
    return (
        <div className="relative h-48 w-full mt-6 bg-white/40 rounded-xl backdrop-blur-sm border border-emerald-100 p-4">
            <h4 className="text-xs font-bold text-emerald-800 mb-2 uppercase tracking-wide">Ecosystem Interdependence</h4>

            {/* Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-emerald-400 stroke-2 opacity-30">
                <line x1="20%" y1="20%" x2="80%" y2="30%" />
                <line x1="80%" y1="30%" x2="50%" y2="70%" />
                <line x1="50%" y1="70%" x2="30%" y2="90%" />
                <line x1="30%" y1="90%" x2="20%" y2="20%" />
                <line x1="20%" y1="20%" x2="50%" y2="70%" />
            </svg>

            {/* Nodes */}
            <div className="relative w-full h-full">
                {species.map((s) => (
                    <motion.div
                        key={s.id}
                        className="absolute w-16 h-8 bg-white border border-emerald-200 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-700 shadow-sm cursor-pointer z-10"
                        style={{ left: `${s.x}%`, top: `${s.y}%`, x: "-50%", y: "-50%" }}
                        whileHover={{ scale: 1.2, backgroundColor: "#ecfdf5", borderColor: "#10b981", zIndex: 20 }}
                    >
                        {s.name}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
