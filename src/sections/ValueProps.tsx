import React from "react"
import Section from "../ui/Section"
import { Mic2, Award, Users, Globe2 } from "lucide-react"

const benefits = [
    {
        icon: <Mic2 className="w-8 h-8 text-primary" />,
        title: "Present Your Work",
        description: "Showcase your research via oral or poster presentations to a distinguished panel."
    },
    {
        icon: <Award className="w-8 h-8 text-primary" />,
        title: "Get Certified",
        description: "Receive officially recognized certificates and publication opportunities (ISBN Abstract Book)."
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Expert Mentorship",
        description: "Gain critical feedback from leading academicians and industry professionals."
    },
    {
        icon: <Globe2 className="w-8 h-8 text-primary" />,
        title: "Global Network",
        description: "Connect with 250+ delegates from across India and 6+ countries."
    }
]

const ValueProps = () => {
    return (
        <Section id="benefits">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why EnviroSummit?</h2>
                <p className="text-lg text-slate-600">
                    A definitive platform for students and researchers to transition from
                    learning to leading in the environmental sector.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={index} className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="mb-4 p-3 bg-primary/5 rounded-lg inline-block group-hover:bg-primary/10 transition-colors">
                            {benefit.icon}
                        </div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed font-light">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default ValueProps
