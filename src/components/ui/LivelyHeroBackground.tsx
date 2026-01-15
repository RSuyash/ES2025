import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Particle = ({ delay, color }: { delay: number; color: string }) => {
    // Randomize initial positions elements
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;

    return (
        <motion.div
            className="absolute rounded-full blur-[2px] opacity-60 mix-blend-multiply"
            style={{
                backgroundColor: color,
                width: Math.random() * 20 + 10 + 'px',
                height: Math.random() * 20 + 10 + 'px',
                left: `${randomX}%`,
                top: `${randomY}%`,
            }}
            animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.2, 1],
            }}
            transition={{
                duration: 10 + Math.random() * 10, // Slow organic movement
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
            }}
        />
    );
};

export const LivelyHeroBackground = () => {
    // Distinctly "biological" colors: Cell Green, Pollen Yellow, Aqua Life
    const colors = ["#86efac", "#fde047", "#2dd4bf", "#bef264"];
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden bg-[#f0fdf4]">
            {/* Organic Fluid Gradient Overlay */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,_rgba(134,239,172,0.2),transparent_70%)]" />

            {/* Floating "Spores" / "Cells" */}
            {mounted && Array.from({ length: 25 }).map((_, i) => (
                <Particle
                    key={i}
                    delay={i * 0.5}
                    color={colors[i % colors.length]}
                />
            ))}

            {/* Large Organic Shape Blur (Background Blobs) */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -30, 0],
                    y: [0, 20, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Texture Overlay - "Microscope Slide" feel */}
            <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            {/* Glass effect gradient at bottom to blend with next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
    );
};
