import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "../components/ui/Section";
import { committeeMembers } from "../data/committee";

const ResearchAdvisoryCommittee = () => {
    const itemsPerPage = 4;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const totalPages = Math.ceil(committeeMembers.length / itemsPerPage);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalPages);
        }, 6000);

        return () => clearInterval(interval);
    }, [totalPages, isPaused]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const visibleMembers = committeeMembers.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    return (
        <Section id="advisory-committee" className="bg-slate-50 overflow-hidden py-24">
            <div className="text-center mb-16 px-4">
                <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">Scientific Leadership</span>
                <h2 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                    Research Advisory Committee
                </h2>
                <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                    Distinguished scientists and experts guiding our research, conservation strategies, and policy frameworks.
                </p>
            </div>

            <div
                className="relative max-w-[1400px] mx-auto px-4 md:px-8"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Controls - Floating & Modern */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-4 z-20 hidden lg:block">
                    <button
                        onClick={prevSlide}
                        className="p-4 rounded-full bg-white/80 backdrop-blur-md shadow-xl text-slate-800 hover:text-primary hover:scale-110 transition-all border border-white/50 group"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-4 z-20 hidden lg:block">
                    <button
                        onClick={nextSlide}
                        className="p-4 rounded-full bg-white/80 backdrop-blur-md shadow-xl text-slate-800 hover:text-primary hover:scale-110 transition-all border border-white/50 group"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>

                {/* Slider Content */}
                <div className="min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {visibleMembers.map((member, index) => (
                                <div key={`${currentIndex}-${index}`} className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-default shadow-lg hover:shadow-2xl transition-all duration-500">
                                    {/* Image Layer */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                target.nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                        {/* Fallback pattern */}
                                        <div className="absolute inset-0 bg-slate-800 hidden flex items-center justify-center">
                                            <svg className="w-20 h-20 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </div>

                                        {/* Gradient Overlay - Always present but gets darker on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                                        {/* Extra dark overlay for bio readability on hover */}
                                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]"></div>
                                    </div>

                                    {/* Content Layer */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                                            <div className="w-12 h-1 bg-primary mb-4 rounded-full"></div>
                                            <h3 className="font-serif text-2xl font-bold text-white leading-tight mb-2 drop-shadow-md">
                                                {member.name}
                                            </h3>
                                            <p className="text-xs font-bold text-primary-foreground/90 uppercase tracking-widest mb-1">
                                                {member.role}
                                            </p>
                                            <p className="text-sm text-slate-300 font-light truncate mb-2 group-hover:opacity-0 transition-opacity duration-300 absolute w-full">
                                                {member.institution.split(',')[0]}
                                            </p>

                                            {/* Hidden Bio & Link - Reveals on Hover */}
                                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                                                <div className="overflow-hidden">
                                                    {/* Spacer to push content down initially */}
                                                    <div className="h-6"></div>
                                                    <p className="text-sm text-slate-200 leading-relaxed font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-4">
                                                        {member.bio}
                                                    </p>
                                                    <a
                                                        href={member.sourceUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-primary hover:border-primary px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm border border-white/20 transition-all opacity-0 group-hover:opacity-100 duration-500 delay-200 hover:scale-105"
                                                    >
                                                        <span>View Profile</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center gap-3 mt-12">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`rounded-full transition-all duration-500 ease-out ${idx === currentIndex
                                ? "w-10 h-3 bg-primary"
                                : "w-3 h-3 bg-slate-200 hover:bg-slate-300"
                                }`}
                            aria-label={`Go to page ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Mobile Controls (below) */}
                <div className="flex lg:hidden justify-center items-center gap-6 mt-8">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-primary transition-all border border-slate-100 active:scale-95"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-primary transition-all border border-slate-100 active:scale-95"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default ResearchAdvisoryCommittee;
