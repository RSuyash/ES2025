
import Section from "../components/ui/Section"

interface Speaker {
    name: string;
    role: string;
    institution: string;
    image?: string;
}

const speakers: Speaker[] = [
    {
        name: "Dr. Arun Varma",
        role: "Policy & Governance Lead",
        institution: "Director, Institute of Green Policy",
    },
    {
        name: "Dr. Priya Singh",
        role: "Climate Scientist",
        institution: "Senior Researcher, National Science Centre",
    },
    {
        name: "Dr. Rahul Deshmukh",
        role: "Conservation Biologist",
        institution: "Wildlife Research Foundation",
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
                            <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                                {/* @ts-ignore - 'image' property might be missing */}
                                {speaker.image ? (
                                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                                ) : (
                                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )}
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
