
import { Button } from "../components/ui/Button"
import Section from "../components/ui/Section"
import { FileText, Users } from "lucide-react"
import { HeroBackground } from "../components/ui/HeroBackground"
import { Butterfly } from "../components/ui/Butterfly"
import { useEffect, useRef, useState } from "react"

const Hero = () => {
    const eRef = useRef<HTMLSpanElement>(null);
    const [targetPos, setTargetPos] = useState<{ x: number, y: number } | null>(null);

    useEffect(() => {
        // Delay to ensure layout is stable
        const timer = setTimeout(() => {
            if (eRef.current) {
                const rect = eRef.current.getBoundingClientRect();
                setTargetPos({ x: rect.left, y: rect.top });
            }
        }, 1000);

        const handleResize = () => {
            if (eRef.current) {
                const rect = eRef.current.getBoundingClientRect();
                setTargetPos({ x: rect.left, y: rect.top });
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Overlay - Abstract Academic */}
            {/* Background Overlay - Breathing Topography */}
            <HeroBackground />

            <Section className="relative z-10 text-center" width="narrow">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/20">
                    International Conference • 2026
                </span>

                <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight relative">
                    <span className="relative inline-block">
                        <span ref={eRef} className="text-primary">E</span>
                        nviro
                    </span>
                    <span className="text-primary">Summit</span>
                </h1>

                {/* The Butterfly Visitor */}
                <Butterfly targetPos={targetPos} />

                <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light text-balance max-w-2xl mx-auto leading-relaxed">
                    Bridging the gap between academic research, policy frameworks, and sustainable community action.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
                    {/* Presenter Path */}
                    <div className="flex flex-col items-center group">
                        <Button size="lg" className="w-full md:w-auto gap-2 shadow-lg hover:shadow-xl transition-all bg-primary text-white border-primary">
                            <FileText className="w-4 h-4" />
                            Submit Abstract
                        </Button>
                        <span className="text-xs text-slate-500 mt-2 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                            For Presenters (Oral/Poster)
                        </span>
                    </div>

                    <span className="text-slate-300 font-serif italic px-2">or</span>

                    {/* Participant Path */}
                    <div className="flex flex-col items-center group">
                        <Button size="lg" variant="outline" className="w-full md:w-auto gap-2 bg-white/50 backdrop-blur-sm border-slate-300">
                            <Users className="w-4 h-4" />
                            Register as Participant
                        </Button>
                        <span className="text-xs text-slate-500 mt-2 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                            For Attendees & Workshops
                        </span>
                    </div>
                </div>

                <div className="mt-16 flex items-center justify-center gap-8 text-slate-400 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Hybrid Mode
                    </div>
                    <div>•</div>
                    <div>Pune, India</div>
                    <div>•</div>
                    <div>Jan 2026</div>
                </div>
            </Section>
        </div>
    )
}

export default Hero
