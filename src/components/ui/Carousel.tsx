import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
    images: { src: string; alt: string; caption?: string }[];
}

export const Carousel = ({ images }: CarouselProps) => {
    const [index, setIndex] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const navigate = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setIndex((prev) => (prev + 1) % images.length);
        } else {
            setIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="relative w-full aspect-square md:aspect-[21/9] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                >
                    <img
                        src={images[index].src}
                        alt={images[index].alt}
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                    {images[index].caption && (
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                            <p className="text-white/90 text-lg md:text-xl font-light font-serif italic border-l-4 border-emerald-500 pl-4">
                                {images[index].caption}
                            </p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={() => navigate('prev')}
                    className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={() => navigate('next')}
                    className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 right-4 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-emerald-500 w-6" : "bg-white/50 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
