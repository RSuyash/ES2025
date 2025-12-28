import React from "react"
import Section from "../ui/Section"

const Mission = () => {
    return (
        <Section id="about" className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                {/* Text Content */}
                <div>
                    <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6 font-bold">
                        Bridging Wisdom & Action
                    </h2>
                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                        <p>
                            <strong className="font-semibold text-slate-800">EnviroSummit</strong> is not just a conference; it is a convergence of academic rigor and on-the-ground environmental action.
                            Hosted by the <span className="text-primary font-medium">Department of Environmental Studies at MIT-WPU</span>, this platform brings together the brightest minds in ecology, policy, and sustainable development.
                        </p>
                        <p>
                            Our mission is to move beyond conversation. We provide a stage for students to present peer-reviewed research, for experts to challenge policy frameworks, and for the community to witness the real-world impact of environmental science.
                        </p>
                    </div>
                </div>

                {/* Visual / Context */}
                <div className="relative">
                    {/* Decorative Element */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full z-0"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/5 rounded-full z-0"></div>

                    {/* Image Container */}
                    <div className="relative z-10 aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden shadow-sm border border-slate-100">
                        {/* Real image of a past panel discussion goes here */}
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-50">
                            <span className="text-xs uppercase tracking-widest">Image: Past Panel Discussion</span>
                        </div>
                        {/* <img src="/assets/images/mission-panel.jpg" className="w-full h-full object-cover" /> */}
                    </div>

                    {/* Quote Card */}
                    <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg max-w-xs border border-slate-100 hidden md:block">
                        <p className="font-serif italic text-slate-700 text-sm">
                            "A unique platform where student research stands shoulder-to-shoulder with expert insights."
                        </p>
                        <p className="text-xs text-slate-400 mt-3 font-semibold uppercase tracking-wider">
                            — Dr. Wanner, Keynote 2024
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Mission
