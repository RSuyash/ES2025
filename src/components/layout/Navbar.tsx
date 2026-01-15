import { useState, useEffect } from "react"
import { Button } from "../ui/Button"
import { cn } from "../../lib/utils"
import { useSummit } from "../../context/SummitContext"
// import { Menu, X } from "lucide-react" 

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const { openWizard } = useSummit();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Mission", href: "#mission" },
        { name: "Themes", href: "#themes" },
        { name: "Committee", href: "#advisory-committee" },
        { name: "Participate", href: "#participate" },
    ]

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                isScrolled
                    ? "bg-white/80 backdrop-blur-2xl border-white/50 py-3 shadow-lg shadow-teal-900/5"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <div className="relative">
                        <div className="absolute inset-0 bg-teal-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                        <img
                            src="/assets/icons/logo_1.png"
                            alt="EnviroSummit Logo"
                            className="relative h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
                        />
                    </div>
                    <div className="leading-none">
                        <h1 className="font-serif font-bold text-xl text-slate-900 tracking-tight">EnviroSummit</h1>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-teal-600 font-bold mt-0.5">2026 • MIT-WPU</p>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/50 shadow-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-teal-700 px-5 py-2 rounded-full hover:bg-white transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Button
                        size="sm"
                        className="hidden md:inline-flex shadow-lg shadow-teal-500/20 bg-slate-900 hover:bg-teal-700 text-white rounded-xl px-6 transition-all duration-300 hover:scale-105"
                        onClick={() => openWizard('register')}
                    >
                        Register Now
                    </Button>
                    {/* Mobile Menu Toggle would go here */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
