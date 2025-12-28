

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800" id="contact">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-white p-1.5 rounded-lg w-fit">
                                <img
                                    src="/assets/icons/logo_1.png"
                                    alt="EnviroSummit Logo"
                                    className="h-10 w-auto"
                                />
                            </div>
                            <h2 className="font-serif text-xl text-white font-bold leading-tight">EnviroSummit<br /><span className="text-primary font-sans text-sm">2025</span></h2>
                        </div>
                        <p className="text-sm text-slate-400 mb-6">
                            Bridging the gap between academic research and sustainable action.
                        </p>
                        <div className="text-xs text-slate-500">
                            Department of Environmental Studies<br />
                            MIT World Peace University, Pune
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Summit</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#tracks" className="hover:text-white transition-colors">Tracks & Themes</a></li>
                            <li><a href="#speakers" className="hover:text-white transition-colors">Speakers</a></li>
                            <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
                        </ul>
                    </div>

                    {/* Participation */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Participate</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#abstract" className="hover:text-white transition-colors">Submit Abstract</a></li>
                            <li><a href="#register" className="hover:text-white transition-colors">Register as Attendee</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Download Brochure</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li><span className="block text-slate-500 text-xs">Email</span> envirosummit@mitwpu.edu.in</li>
                            <li><span className="block text-slate-500 text-xs mt-2">Phone</span> +91 98765 43210</li>
                            <li><span className="block text-slate-500 text-xs mt-2">Social</span> @ecolenviron</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
                    © 2025 EnviroSummit · MIT-WPU. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
