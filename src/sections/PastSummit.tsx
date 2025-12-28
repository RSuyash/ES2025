import Section from "../components/ui/Section";
import { Carousel } from "../components/ui/Carousel";
import { CONFERENCE_DATA } from "../data/conference";
import { Users, Globe, Map } from "lucide-react";

const PastSummit = () => {
    // Using placeholder images or reusing existing ones since generation failed
    const images = [
        {
            src: "/assets/images/es2024/Panel.png",
            alt: "EnviroSummit 2024 Panel",
            caption: "Experts deliberating on climate policy tracks."
        },
        {
            src: "/assets/images/es2024/auditorium-big.jpg",
            alt: "Opening Ceremony",
            caption: "The grand opening at the World Peace Auditorium."
        },
        // Renamed assets (Note to user: Ensure these are converted to real JPGs)
        ...Array.from({ length: 14 }).map((_, i) => ({
            src: `/assets/images/es2024/es24-${String(i + 1).padStart(2, '0')}.jpg`,
            alt: `Event Highlight ${i + 1}`,
            caption: "Moments from EnviroSummit 2024"
        }))
    ];

    return (
        <Section className="bg-slate-50 border-y border-slate-200" id="history">
            <div className="mb-12 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Legacy
                    </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6 font-bold">
                    EnviroSummit {CONFERENCE_DATA.history.year}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                    {CONFERENCE_DATA.history.description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center group hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Users size={24} />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{CONFERENCE_DATA.history.stats.participants}</div>
                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Participants</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center group hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Globe size={24} />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{CONFERENCE_DATA.history.stats.countries}</div>
                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Countries Represented</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center group hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Map size={24} />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{CONFERENCE_DATA.history.stats.states}</div>
                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">States of India</div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto">
                <Carousel images={images} />
            </div>
        </Section>
    );
};

export default PastSummit;
