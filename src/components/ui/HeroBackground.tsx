import { motion } from "framer-motion";

export const HeroBackground = () => {
    // "Living Isolines" Concept Restoration
    // Organic, distinctive elevation layers drifting independently.
    // Colors: Deep Teal (#0f5a6b) & Environmental Green (#15803d)

    // We use distinct organic paths to simulate a topographic map.

    return (
        <div className="absolute inset-0 overflow-hidden bg-slate-50">
            {/* Base Texture: Subtle noise for paper feel */}
            <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#0f5a6b_0.5px,transparent_0.5px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]" />

            {/* Main SVG Container - Scaled up to allow movement without edges showing */}
            <svg
                className="absolute inset-0 w-full h-full min-w-[150%] min-h-[150%] -translate-x-[25%] -translate-y-[25%] opacity-100"
                viewBox="0 0 200 200"
                preserveAspectRatio="xMidYMid slice"
            >
                {/* Layer 1: Lowest Elevation (Deep Teal) - Slow, Heavy Drift */}
                <motion.path
                    d="M45.7,2.8C59.6,4.7,73.1,10.6,83,20.2c9.9,9.6,16.5,22.8,17.4,36.5c0.9,13.7-3.9,28-13.4,38.8 c-9.5,10.8-23.7,18.3-38.3,19.3c-14.6,1-29.6-4.4-40.4-14.5C-2.5,90.3-9.1,75.4-9.8,60.6c-0.7-14.8,4.3-29.6,14.6-39.8 C15.1,10.6,31.8,0.9,45.7,2.8z"
                    fill="#0f5a6b"
                    fillOpacity="0.03"
                    stroke="#0f5a6b"
                    strokeWidth="0.3"
                    strokeOpacity="0.1"
                    initial={{ rotate: 0, scale: 1.4 }}
                    animate={{
                        rotate: 360,
                        scale: [1.4, 1.5, 1.4],
                    }}
                    transition={{
                        rotate: { duration: 150, repeat: Infinity, ease: "linear" },
                        scale: { duration: 25, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                />

                {/* Layer 2: Mid Elevation (Teal/Slate mix) - Medium Speed */}
                <motion.path
                    d="M39.6,11.8C52.1,14.3,64.1,19.8,72.6,28.6c8.5,8.8,13.7,20.5,14,32.7c0.3,12.2-4.3,23.8-12.7,32.7 c-8.4,8.9-20.6,15.1-33.3,15.7c-12.7,0.6-25.8-4.4-34.9-13.8C-3.4,76.5-8.4,62.7-7.9,49.6c0.5-13.1,6.5-25.5,16.2-34.2 C14,6.7,27.1,9.3,39.6,11.8z"
                    fill="#0f5a6b"
                    fillOpacity="0.04"
                    stroke="#0f5a6b"
                    strokeWidth="0.3"
                    strokeOpacity="0.15"
                    initial={{ rotate: 90, scale: 1.2 }}
                    animate={{
                        rotate: -270, // Counter rotate
                        scale: [1.2, 1.1, 1.3, 1.2],
                    }}
                    transition={{
                        rotate: { duration: 120, repeat: Infinity, ease: "linear" },
                        scale: { duration: 20, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                />

                {/* Layer 3: High Elevation (Environmental Green) - Distinct Accent */}
                <motion.path
                    d="M34.5,18.9c10,2.1,19.8,6.8,26.8,14.3c7,7.5,11.2,17.4,11.2,27.7c0,10.3-4.2,20.2-11.2,27.7 c-7,7.5-16.8,12.2-26.8,14.3c-10,2.1-20.4-1.4-27.7-9.5c-7.3-8.1-10.9-19.3-10.2-30.5c0.7-11.2,6.1-21.5,14.5-28.4 C19.9,17.6,29.5,17.9,34.5,18.9z"
                    fill="#15803d"
                    fillOpacity="0.05"
                    stroke="#15803d"
                    strokeWidth="0.4"
                    strokeOpacity="0.2"
                    initial={{ rotate: 45, scale: 1 }}
                    animate={{
                        rotate: [45, 405],
                        scale: [1, 0.9, 1.1, 1],
                        x: [0, 5, -5, 0]
                    }}
                    transition={{
                        rotate: { duration: 90, repeat: Infinity, ease: "linear" },
                        scale: { duration: 18, repeat: Infinity, ease: "easeInOut" },
                        x: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                />

                {/* Layer 4: The Peak (Topographic Stroke Only) - The "Map" Data Line */}
                <motion.path
                    d="M32.1,25.6c6.8,1.6,13.4,5.1,18.1,10.6c4.7,5.5,7.5,12.8,7.3,20.3c-0.2,7.5-3.3,14.7-8.3,20.1 c-5,5.4-12.1,8.7-19.3,10c-7.2,1.3-14.8-1.5-19.8-7.7c-5-6.2-7.1-14.5-6.3-22.7s5-15.8,11.3-20.6C21.4,20.8,28,21.9,32.1,25.6z"
                    fill="none"
                    stroke="#15803d"
                    strokeWidth="0.3"
                    strokeDasharray="1 1.5"
                    strokeOpacity="0.4"
                    initial={{ rotate: -45, scale: 0.8 }}
                    animate={{
                        rotate: [-45, 315],
                        scale: [0.8, 0.9, 0.8],
                    }}
                    transition={{
                        rotate: { duration: 180, repeat: Infinity, ease: "linear" },
                        scale: { duration: 15, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                />
            </svg>

            {/* Texture Overlay: Clean Grain */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none mix-blend-multiply" />
        </div>
    );
};
