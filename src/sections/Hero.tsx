import { useState } from "react"
import { LivelyHero } from "./hero-experiments/LivelyHero"
import { FluidBioHero } from "./hero-experiments/FluidBioHero"
import { PeacockHero } from "./hero-experiments/PeacockHero"
import { EcoMinimalHero } from "./hero-experiments/EcoMinimalHero"
import { PeacockLightHero } from "./hero-experiments/PeacockLightHero"
import { PeacockAbstractHero } from "./hero-experiments/PeacockAbstractHero"
import { PeacockMaximalHero } from "./hero-experiments/PeacockMaximalHero"
import { Palette } from "lucide-react"

const Hero = () => {
    // Styles: lively, fluid, peacock (dark), minimal, peacock-light, peacock-abstract, peacock-maximal
    const [style, setStyle] = useState<'lively' | 'fluid' | 'peacock' | 'minimal' | 'peacock-light' | 'peacock-abstract' | 'peacock-maximal'>('peacock-maximal');

    const toggleStyle = () => {
        if (style === 'lively') setStyle('fluid');
        else if (style === 'fluid') setStyle('peacock');
        else if (style === 'peacock') setStyle('peacock-abstract');
        else if (style === 'peacock-abstract') setStyle('peacock-light');
        else if (style === 'peacock-light') setStyle('peacock-maximal');
        else if (style === 'peacock-maximal') setStyle('minimal');
        else setStyle('lively');
    }

    const getNextStyleName = () => {
        if (style === 'lively') return 'Fluid Bio';
        if (style === 'fluid') return 'Peacock (Dark)';
        if (style === 'peacock') return 'Peacock (Abstract)';
        if (style === 'peacock-abstract') return 'Peacock (Light)';
        if (style === 'peacock-light') return 'Peacock (Maximal)';
        if (style === 'peacock-maximal') return 'Eco Minimal';
        return 'Lively';
    }

    return (
        <div className="relative">
            {/* Style Switcher (Floating) */}
            <button
                onClick={toggleStyle}
                className="fixed top-24 right-4 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/20 transition-all group"
                title="Switch Hero Style"
            >
                <Palette className="w-5 h-5 text-emerald-600" />
                <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                    Try {getNextStyleName()} Style
                </span>
            </button>

            {style === 'lively' && <LivelyHero />}
            {style === 'fluid' && <FluidBioHero />}
            {style === 'peacock' && <PeacockHero />}
            {style === 'minimal' && <EcoMinimalHero />}
            {style === 'peacock-light' && <PeacockLightHero />}
            {style === 'peacock-abstract' && <PeacockAbstractHero />}
            {style === 'peacock-maximal' && <PeacockMaximalHero />}
        </div>
    )
}

export default Hero
