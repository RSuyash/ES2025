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
        }, 5000); // Change slide every 5 seconds

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
        <Section id="advisory-committee" className="bg-slate-50 overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                    Research Advisory Committee
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    Distinguished scientists and experts guiding our research, conservation strategies, and policy frameworks.
                </p>
            </div>

            <div
                className="relative max-w-7xl mx-auto px-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Controls */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-12 z-10 hidden md:block">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-primary hover:scale-110 transition-all border border-slate-100"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-12 z-10 hidden md:block">
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-primary hover:scale-110 transition-all border border-slate-100"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Slider Content */}
                <div className="min-h-[450px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {visibleMembers.map((member, index) => (
                                <div key={`${currentIndex}-${index}`} className="group h-96 [perspective:1000px]">
                                    <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-2xl">

                                        {/* Front Face */}
                                        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-slate-100">

                                            {/* Image or Placeholder */}
                                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-slate-100 group-hover:border-primary/20 transition-colors bg-slate-50 relative">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        target.nextElementSibling?.classList.remove('hidden');
                                                    }}
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center bg-primary/5 text-primary hidden">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 leading-tight min-h-[3rem] flex items-center justify-center">
                                                {member.name}
                                            </h3>
                                            <div className="w-8 h-1 bg-primary/20 rounded-full mb-3"></div>
                                            <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">
                                                {member.role}
                                            </p>
                                            <p className="text-sm text-slate-500 font-medium leading-snug line-clamp-3">
                                                {member.institution}
                                            </p>

                                            <div className="absolute bottom-4 text-slate-400 text-[10px] flex items-center gap-1 opacity-60">
                                                <span>Hover for bio</span>
                                            </div>
                                        </div>

                                        {/* Back Face */}
                                        <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-slate-900 rounded-2xl p-6 flex flex-col items-center justify-center text-center text-white overflow-hidden">
                                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                                            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>

                                            <div className="relative z-10 w-full">
                                                <h4 className="font-serif text-base font-bold text-white/90 mb-3 border-b border-white/10 pb-2 inline-block">
                                                    Profile
                                                </h4>
                                                <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-6">
                                                    {member.bio}
                                                </p>

                                                <a
                                                    href={member.sourceUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-full transition-colors border border-white/10 group-hover:border-white/30"
                                                >
                                                    <span>View Profile</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
                                }`}
                            aria-label={`Go to page ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Mobile Controls (below) */}
                <div className="flex md:hidden justify-between mt-4">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-primary transition-all border border-slate-100"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-primary transition-all border border-slate-100"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default ResearchAdvisoryCommittee;
