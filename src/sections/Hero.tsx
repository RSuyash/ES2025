import React from "react"
import { Button } from "../ui/Button"
import Section from "../ui/Section"
import { ArrowRight, FileText, Users } from "lucide-react"

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center justify-center bg-slate-50 overflow-hidden">
            {/* Background Overlay - Abstract Academic */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for the blurry academic shot */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 to-slate-100/90 z-10"></div>
                {/* This image src should be replaced by real asset */}
                <img
                    src="/assets/images/hero-bg-placeholder.jpg"
                    alt="EnviroSummit Background"
                    className="w-full h-full object-cover opacity-20 filter grayscale"
                />
            </div>

            <Section className="relative z-10 text-center" width="narrow">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/20">
                    International Conference • 2025
                </span>

                <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                    Enviro<span className="text-primary">Summit</span>
                </h1>

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
                    <div>Jan 2025</div>
                </div>
            </Section>
        </div>
    )
}

export default Hero
