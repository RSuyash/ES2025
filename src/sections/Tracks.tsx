
import Section from "../components/ui/Section"
import { Building2, Leaf, Scale, Lightbulb } from "lucide-react"

const tracks = [
    {
        icon: <Building2 className="w-10 h-10 text-blue-600" />,
        title: "Sustainable Cities",
        description: "Urban planning, smart infrastructure, and waste management systems for resilient communities.",
        color: "border-blue-500"
    },
    {
        icon: <Leaf className="w-10 h-10 text-green-600" />,
        title: "Biodiversity",
        description: "Conservation strategies, ecosystem restoration, and the protection of biological heritage.",
        color: "border-green-500"
    },
    {
        icon: <Scale className="w-10 h-10 text-purple-600" />,
        title: "Climate Policy",
        description: "Governance frameworks, international treaties, and the legal aspects of environmental justice.",
        color: "border-purple-500"
    },
    {
        icon: <Lightbulb className="w-10 h-10 text-amber-600" />,
        title: "Green Innovation",
        description: "Renewable energy technologies, circular economy models, and sustainable industrial practices.",
        color: "border-amber-500"
    }
]

const Tracks = () => {
    return (
        <Section id="tracks" className="bg-slate-50">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <span className="text-primary font-bold tracking-widest uppercase text-xs">Call for Papers</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Conference Tracks</h2>
                <p className="text-slate-600">
                    We invite abstracts for oral and poster presentations under the following four thematic pillars.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {tracks.map((track, index) => (
                    <div key={index} className={`group bg-white p-8 rounded-xl border-l-4 ${track.color} shadow-sm hover:shadow-lg transition-all border-y border-r border-slate-100`}>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                {track.icon}
                            </div>
                            <div>
                                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{track.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-light">{track.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Tracks
