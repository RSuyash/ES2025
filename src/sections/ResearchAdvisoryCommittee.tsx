import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import Section from "../components/ui/Section";
import { committeeMembers } from "../data/committee";

const ResearchAdvisoryCommittee = () => {
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Responsive itemsPerPage logic
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(4);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Reset current index if validation fails after resize (optional but safer)
    useEffect(() => {
        const maxPage = Math.ceil(committeeMembers.length / itemsPerPage) - 1;
        if (currentIndex > maxPage) {
            setCurrentIndex(0);
        }
    }, [itemsPerPage, currentIndex]);

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
        <Section id="advisory-committee" className="relative overflow-hidden py-24 bg-slate-50">
            {/* Peacock Maximal Inspired Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.05),transparent_70%),radial-gradient(circle_at_bottom_left,_rgba(251,191,36,0.05),transparent_70%)]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100">
                    <pattern id="rac-hex" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10,0 L20,5 L20,15 L10,20 L0,15 L0,5 Z" fill="none" stroke="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#rac-hex)" />
                </svg>
                {/* Decorative Blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-amber-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative z-10 text-center mb-16 px-4">
                <span className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-3 block">Scientific Leadership</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Research Advisory Committee
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto rounded-full mb-6"></div>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                    Distinguished scientists and experts guiding our research, conservation strategies, and policy frameworks.
                </p>
            </div>

            <div
                className="relative max-w-[1400px] mx-auto px-4 md:px-8 z-10"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Controls - Floating & Modern */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-4 z-20 hidden lg:block">
                    <button
                        onClick={prevSlide}
                        className="p-4 rounded-full bg-white/80 backdrop-blur-md shadow-xl text-slate-800 hover:text-teal-600 hover:scale-110 transition-all border border-white/50 group"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-4 z-20 hidden lg:block">
                    <button
                        onClick={nextSlide}
                        className="p-4 rounded-full bg-white/80 backdrop-blur-md shadow-xl text-slate-800 hover:text-teal-600 hover:scale-110 transition-all border border-white/50 group"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>

                {/* Slider Content */}
                <div className="min-h-[480px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {visibleMembers.map((member, index) => (
                                <div
                                    key={`${currentIndex}-${index}`}
                                    className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-default transition-all duration-500 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(20,184,166,0.15)] hover:border-teal-100/50"
                                >
                                    {/* Image Layer */}
                                    <div className="absolute inset-0 h-full">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                target.nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                        {/* Fallback pattern */}
                                        <div className="absolute inset-0 bg-slate-100 hidden flex items-center justify-center">
                                            <Users className="w-20 h-20 text-slate-300" />
                                        </div>

                                        {/* Gradient Overlay - Cinematic Fade */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-100"></div>

                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                                    </div>

                                    {/* Content Layer */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                                            <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-amber-400 mb-4 rounded-full"></div>

                                            <h3 className="font-serif text-2xl font-bold text-white leading-tight mb-2 drop-shadow-md">
                                                {member.name}
                                            </h3>

                                            <p className="text-[10px] font-bold text-teal-300 uppercase tracking-widest mb-1.5">
                                                {member.role}
                                            </p>

                                            <p className="text-sm text-slate-300 font-light truncate mb-2 group-hover:opacity-0 transition-opacity duration-300 absolute w-full pr-12">
                                                {member.institution.split(',')[0]}
                                            </p>

                                            {/* Hidden Bio & Link - Reveals on Hover */}
                                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                                                <div className="overflow-hidden">
                                                    <div className="h-6"></div>
                                                    <p className="text-sm text-slate-200 leading-relaxed font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-4">
                                                        {member.bio}
                                                    </p>
                                                    <a
                                                        href={member.sourceUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-slate-900 bg-white hover:bg-teal-50 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg transition-all opacity-0 group-hover:opacity-100 duration-500 delay-200 hover:scale-105"
                                                    >
                                                        <span>View Profile</span>
                                                        <ChevronRight size={14} className="text-teal-600" />
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
                <div className="flex justify-center items-center gap-2 mt-10">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`rounded-full transition-all duration-500 ease-out ${idx === currentIndex
                                ? "w-8 h-2 bg-gradient-to-r from-teal-500 to-amber-500"
                                : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                                }`}
                            aria-label={`Go to page ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Mobile Controls (below) */}
                <div className="flex lg:hidden justify-center items-center gap-6 mt-6">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-teal-600 transition-all border border-slate-100 active:scale-95"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-teal-600 transition-all border border-slate-100 active:scale-95"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default ResearchAdvisoryCommittee;
