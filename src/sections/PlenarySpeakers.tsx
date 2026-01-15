import { motion } from "framer-motion";
import { plenarySpeakers } from "../data/plenary";
import { User } from "lucide-react";

export const PlenarySpeakerCard = ({ speaker, index }: { speaker: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex flex-col items-center text-center"
        >
            {/* Image Container */}
            <div className="relative w-48 h-48 mb-6 rounded-full p-1 bg-gradient-to-br from-amber-300 via-yellow-500 to-orange-500 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-slate-100 relative">
                    <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                            // Fallback if image fails
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                    />
                    {/* Fallback Icon */}
                    <div className="hidden absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-300">
                        <User className="w-20 h-20" />
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-full border-2 border-emerald-500 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {speaker.name}
                </h3>
                <p className="text-slate-600 font-medium text-sm max-w-[200px] mx-auto leading-tight">
                    {speaker.institution}
                </p>
                {speaker.role && (
                    <p className="text-amber-600 text-xs font-bold uppercase tracking-wider mt-2">
                        {speaker.role}
                    </p>
                )}
            </div>

            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-2xl scale-110 blur-xl" />
        </motion.div>
    );
};

const PlenarySpeakers = () => {
    return (
        <section id="plenary-speakers" className="py-24 bg-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="text-center mb-20">
                    <span className="text-sm font-bold tracking-[0.2em] text-amber-600 uppercase mb-4 block">Keynote Address</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 relative inline-block">
                        Plenary Speakers
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {plenarySpeakers.map((speaker, index) => (
                        <PlenarySpeakerCard key={index} speaker={speaker} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlenarySpeakers;
