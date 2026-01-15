import { motion } from "framer-motion";

const events = [
    { year: 1992, title: "Rio Earth Summit" },
    { year: 1997, title: "Kyoto Protocol" },
    { year: 2015, title: "Paris Agreement" },
    { year: 2026, title: "ES2026 Summit" },
];

export const PolicyTimeline = () => {
    return (
        <div className="relative h-40 w-full mt-6 flex items-center justify-between px-8 bg-amber-50 rounded-xl border border-amber-100 overflow-hidden">

            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-amber-200 -translate-y-1/2" />

            {events.map((event, idx) => (
                <motion.div
                    key={idx}
                    className="relative z-10 flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                >
                    <div className="w-4 h-4 rounded-full bg-amber-600 border-4 border-amber-100 mb-2" />
                    <span className="text-xl font-bold text-amber-900 font-serif">{event.year}</span>
                    <span className="text-[10px] uppercase font-semibold text-amber-700 tracking-wider absolute top-14 w-24 text-center">{event.title}</span>
                </motion.div>
            ))}
        </div>
    );
};
