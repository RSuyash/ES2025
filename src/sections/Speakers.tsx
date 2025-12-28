
import Section from "../components/ui/Section"

const speakers = [
    {
        name: "Dr. Prasad Kulkarni",
        role: "Sustainable Development Expert",
        institution: "Director, Environment Education",
        image: "/assets/images/speaker-placeholder-1.png"
    },
    {
        name: "Dr. Soma Mishra",
        role: "Founder, SustainOEarth",
        institution: "Environmental Scientist",
        image: "/assets/images/speaker-placeholder-3.png"
    },
    {
        name: "Dr. Pankaj Koparde",
        role: "Evolutionary Ecologist",
        institution: "Chatur Ullu Lab / MIT-WPU",
        image: "/assets/images/speaker-placeholder-2.png"
    }
]

const Speakers = () => {
    return (
        <Section id="speakers">
            <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Distinguished Mentors</h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                    Learning from the pioneers of environmental science and policy.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {speakers.map((speaker, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                        <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-slate-50 shadow-sm group-hover:border-primary/20 transition-colors">
                            <div className="w-full h-full bg-slate-200">
                                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-slate-900">{speaker.name}</h3>
                        <p className="text-xs font-bold text-primary uppercase tracking-wide mt-1 mb-2">{speaker.role}</p>
                        <p className="text-sm text-slate-500 font-light">{speaker.institution}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Speakers
