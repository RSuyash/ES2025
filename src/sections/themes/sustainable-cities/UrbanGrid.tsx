import { motion } from "framer-motion";

const metrics = [
    { label: "Waste Reduction", value: "40%", icon: "♻️" },
    { label: "Energy Efficiency", value: "A+", icon: "⚡" },
    { label: "Green Spaces", value: "35%", icon: "🌳" },
    { label: "Air Quality", value: "Good", icon: "💨" },
];

export const UrbanGrid = () => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-6">
            {metrics.map((metric, idx) => (
                <motion.div
                    key={idx}
                    className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/30 flex flex-col items-center justify-center text-center cursor-pointer group"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.6)" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <span className="text-2xl mb-1 group-hover:scale-125 transition-transform">{metric.icon}</span>
                    <span className="font-bold text-slate-800 text-lg">{metric.value}</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-600 font-semibold">{metric.label}</span>

                    {/* Hover Pulse Effect */}
                    <div className="absolute inset-0 rounded-xl bg-sky-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
            ))}
        </div>
    );
};
