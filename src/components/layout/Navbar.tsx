import React, { useState, useEffect } from "react"
import { Button } from "../ui/Button"
import { cn } from "../../lib/utils"
// import { Menu, X } from "lucide-react" // Will uncomment when deps are confirmed installed

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Tracks", href: "#tracks" },
        { name: "Speakers", href: "#speakers" },
        { name: "Participate", href: "#participate" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-slate-200 py-3 shadow-sm"
                    : "bg-white border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-2">
                    {/* Placeholder for Logo */}
                    <div className="h-10 w-10 bg-primary/10 rounded-md flex items-center justify-center text-primary font-bold">
                        ES
                    </div>
                    <div className="leading-tight">
                        <h1 className="font-serif font-bold text-xl text-slate-900 tracking-tight">EnviroSummit</h1>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">2025 • MIT-WPU</p>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Button variant="default" size="sm" className="hidden md:inline-flex shadow-sm">
                        Register Now
                    </Button>
                    {/* Mobile Menu Toggle would go here */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
