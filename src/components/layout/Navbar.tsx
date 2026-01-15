import { useState, useEffect } from "react"
import { Button } from "../ui/Button"
import { cn } from "../../lib/utils"
import { useSummit } from "../../context/SummitContext"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { openWizard } = useSummit();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Mission", href: "/#mission", type: "anchor" },
        { name: "Themes", href: "/#themes", type: "anchor" },
        { name: "Committee", href: "/#advisory-committee", type: "anchor" },
        // { name: "Participate", href: "/#participate", type: "anchor" },
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
                <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
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
                </Link>

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

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-left py-2 font-medium text-slate-600 border-b border-slate-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col gap-3 mt-2">
                        <Button className="w-full justify-center" onClick={() => { setIsMobileMenuOpen(false); openWizard('abstract'); }}>Submit Abstract</Button>
                        <Button
                            className="w-full bg-slate-900 text-white rounded-xl"
                            onClick={() => { setIsMobileMenuOpen(false); openWizard('register'); }}
                        >
                            Register Now
                        </Button>
                    </div>
                </div>
            )
            }
        </nav >
    )
}

export default Navbar
