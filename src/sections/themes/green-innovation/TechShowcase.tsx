import { motion } from "framer-motion";

const techs = [
    { title: "Solar Glass", desc: "Transparent PV cells", color: "bg-lime-500" },
    { title: "Algal Biofuel", desc: "3rd gen renewables", color: "bg-emerald-500" },
    { title: "Carbon Capture", desc: "Direct air capture", color: "bg-sky-500" },
];

export const TechShowcase = () => {
    return (
        <div className="relative h-48 w-full mt-4 flex items-center gap-4 overflow-x-auto p-4 snap-x">
            {techs.map((tech, idx) => (
                <motion.div
                    key={idx}
                    className="min-w-[140px] h-32 bg-slate-900 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden shrink-0 snap-center cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                >
                    <div className={`absolute top-0 right-0 w-16 h-16 rounded-full blur-2xl opacity-40 ${tech.color}`} />

                    <div className="z-10">
                        <div className={`w-2 h-2 rounded-full mb-2 ${tech.color}`} />
                        <h4 className="text-white font-bold text-sm leading-tight">{tech.title}</h4>
                    </div>

                    <p className="text-[10px] text-slate-400 z-10">{tech.desc}</p>

                    {/* Tech Circuit Pattern */}
                    <svg className="absolute bottom-0 right-0 w-12 h-12 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                        <path d="M2 17L12 22L22 17" />
                        <path d="M2 12L12 17L22 12" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
};
