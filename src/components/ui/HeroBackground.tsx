import { motion } from "framer-motion";

export const HeroBackground = () => {
    // We use your brand colors defined in tailwind.config.js
    // But we hardcode them here for the SVG fill to ensure they match perfectly with opacity.
    // Primary: #0f5a6b (Deep Teal)
    // Secondary: #15803d (Environmental Green)

    return (
        <div className="absolute inset-0 overflow-hidden bg-slate-50">
            {/* Optional: A subtle gradient mesh base */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,90,107,0.05),rgba(255,255,255,0))]" />

            <svg
                className="absolute w-full h-full opacity-30"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {/* Layer 1: The Deep Base (Slowest, Darkest) */}
                <motion.path
                    // Real Blob Shape
                    d="M30,10 Q50,0 70,10 T90,30 T90,70 T70,90 T30,90 T10,70 T10,30 T30,10"
                    fill="#0f5a6b"
                    fillOpacity="0.15"
                    initial={{ scale: 1.2, rotate: 0, x: -10, y: -10 }}
                    animate={{
                        rotate: [0, 360],
                        scale: [1.2, 1.4, 1.2],
                        x: [-10, 10, -10],
                        y: [-10, 0, -10],
                    }}
                    transition={{
                        rotate: { duration: 120, repeat: Infinity, ease: "linear" },
                        scale: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                        x: { duration: 25, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                />

                {/* Layer 2: The Middle Elevation (Medium Speed, Teal) */}
                <motion.path
                    d="M20,20 Q50,5 80,20 T95,50 T80,80 T50,95 T20,80 T5,50 T20,20"
                    fill="#0f5a6b"
                    fillOpacity="0.2"
                    stroke="#0f5a6b"
                    strokeWidth="0.1"
                    strokeOpacity="0.4"
                    initial={{ scale: 1, rotate: 0 }}
                    animate={{
                        rotate: [360, 0], // Counter-rotation
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        rotate: { duration: 90, repeat: Infinity, ease: "linear" },
                        scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                />

                {/* Layer 3: The Active Green Zone (Faster, Green Accent) */}
                <motion.path
                    d="M40,40 Q50,30 60,40 T70,50 T60,60 T50,70 T40,60 T30,50 T40,40"
                    fill="#15803d"
                    fillOpacity="0.15"
                    initial={{ scale: 0.8, rotate: 45 }}
                    animate={{
                        rotate: [45, 405],
                        scale: [0.8, 1.2, 0.8],
                        x: [0, 5, -5, 0]
                    }}
                    transition={{
                        rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                        scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                        x: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                />

                {/* Layer 4: Isoline Outlines (Stroke Only - The "Map" Look) */}
                <motion.path
                    d="M10,50 Q25,25 50,10 T90,50 T50,90 T10,50"
                    fill="none"
                    stroke="#64748b" // Slate
                    strokeWidth="0.2"
                    strokeDasharray="1 1" // Dotted line like a map trail
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                />
            </svg>

            {/* Texture Overlay (Optional noise to make it feel like paper) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
        </div>
    );
};
