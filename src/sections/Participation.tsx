
import Section from "../components/ui/Section"
import { Button } from "../components/ui/Button"
import { Check, ArrowRight } from "lucide-react"

const Participation = () => {
    return (
        <Section id="participate" className="bg-slate-50">
            <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">How to Participate</h2>
                <p className="text-slate-600">Choose your pathway to join the summit.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Presenter Card */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="text-9xl font-serif font-bold">A</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">For Presenters</h3>
                    <p className="text-slate-500 text-sm mb-6">Submit your research abstract for Oral or Poster presentation.</p>

                    <ul className="space-y-3 mb-8">
                        {["ISBN Abstract Book publication", "Certificate of Presentation", "Competitions & Awards", "Expert Feedback"].map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Button className="w-full gap-2" size="lg">
                        Submit Abstract <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>

                {/* Attendee Card */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="text-9xl font-serif font-bold">B</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">For Attendees</h3>
                    <p className="text-slate-500 text-sm mb-6">Join as a delegate to listen, learn, and network.</p>

                    <ul className="space-y-3 mb-8">
                        {["Access to all sessions", "Certificate of Participation", "Networking Lunch", "Conference Kit"].map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-blue-500 mt-0.5" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Button variant="outline" className="w-full gap-2 border-slate-300" size="lg">
                        Register Now <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </Section>
    )
}

export default Participation
