import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface ButterflyProps {
    targetPos?: { x: number; y: number } | null;
}

export const Butterfly = ({ targetPos }: ButterflyProps) => {
    const controls = useAnimation();
    const [isLanded, setIsLanded] = useState(false);

    useEffect(() => {
        if (!targetPos) return;

        const flightPath = async () => {
            // 1. Initial Spawn
            await controls.set({
                x: -150,
                y: window.innerHeight * 0.9,
                rotate: 0,
                rotateX: 0,
                rotateY: 0,
                scale: 0.5,
                zIndex: 50,
                opacity: 0
            });

            await controls.start({ opacity: 1, transition: { duration: 0.5 } });

            // 2. 3D Flight
            await controls.start({
                x: [
                    -50,
                    window.innerWidth * 0.3,
                    window.innerWidth * 0.6,
                    targetPos.x - 80
                ],
                y: [
                    window.innerHeight * 0.8,
                    window.innerHeight * 0.4,
                    window.innerHeight * 0.7,
                    targetPos.y - 150
                ],
                rotate: [45, 10, -10, 20],
                rotateY: [0, 180, 0, 20],
                rotateX: [10, 30, -10, 30],
                scale: [0.6, 1, 0.7, 1],
                transition: {
                    duration: 8,
                    ease: "easeInOut",
                    times: [0, 0.3, 0.7, 1]
                }
            });

            // 3. Hover Check
            await controls.start({
                x: targetPos.x + 5,
                y: targetPos.y - 80,
                rotate: 0,
                rotateY: 0,
                rotateX: 60, // Angle body to look down at landing spot
                scale: 1,
                transition: { duration: 1.5, ease: "easeOut" }
            });

            // 4. Perch Landing
            setIsLanded(true);
            await controls.start({
                x: targetPos.x + 4,
                y: targetPos.y - 45, // Land ON TOP of the E
                rotate: 0,
                rotateX: 75, // High angle - looks like it's standing on the top edge
                transition: { duration: 0.8, ease: "easeOut" }
            });
        };

        flightPath();
    }, [targetPos, controls]);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50"
            style={{ perspective: "600px" }} // Stronger 3D perspective
            animate={controls}
            initial={{ opacity: 0 }}
        >
            <svg width="60" height="60" viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
                <g transform="translate(50, 50)">

                    {/* LEFT WING GROUP */}
                    <motion.g
                        style={{ originX: "0px" }} // Hinge at center
                        animate={isLanded
                            ? { rotateY: [0, 60, 0] } // Landed: Slow gentle beat (folds up slightly)
                            : { rotateY: [60, -60, 60] } // Flight: Full flap
                        }
                        transition={{
                            duration: isLanded ? 2 : 0.15,
                            repeat: Infinity,
                            ease: isLanded ? "easeInOut" : "linear"
                        }}
                    >
                        {/* Wing visual (Shifted left so origin is at right edge) */}
                        <g transform="translate(-2, 0)">
                            <path
                                d="M0,0 C-25,-40 -65,-50 -60,-5 C-55,30 -25,20 0,5"
                                fill="url(#wingGradient)" stroke="#a5f3fc" strokeWidth="0.5"
                            />
                            <path
                                d="M0,5 C-25,10 -50,40 -40,55 C-25,65 -5,40 0,10"
                                fill="url(#wingGradient)" stroke="#a5f3fc" strokeWidth="0.5"
                            />
                        </g>
                    </motion.g>

                    {/* RIGHT WING GROUP */}
                    <motion.g
                        style={{ originX: "0px" }} // Hinge at center relative to group
                        animate={isLanded
                            ? { rotateY: [0, -60, 0] }
                            : { rotateY: [-60, 60, -60] } // Mirror of left
                        }
                        transition={{
                            duration: isLanded ? 2 : 0.15,
                            repeat: Infinity,
                            ease: isLanded ? "easeInOut" : "linear"
                        }}
                    >
                        {/* Wing visual (Shifted right) */}
                        <g transform="translate(2, 0)">
                            <path
                                d="M0,0 C25,-40 65,-50 60,-5 C55,30 25,20 0,5"
                                fill="url(#wingGradient)" stroke="#a5f3fc" strokeWidth="0.5"
                            />
                            <path
                                d="M0,5 C25,10 50,40 40,55 C25,65 5,40 0,10"
                                fill="url(#wingGradient)" stroke="#a5f3fc" strokeWidth="0.5"
                            />
                        </g>
                    </motion.g>

                    {/* BODY (Central Axis) */}
                    <path d="M0,-15 L0,25" stroke="#0f5a6b" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="0" cy="-18" r="3.5" fill="#0f5a6b" /> {/* Head */}

                    {/* Antennae */}
                    <path d="M0,-18 Q-8,-30 -12,-35" stroke="#0f5a6b" strokeWidth="1" fill="none" />
                    <path d="M0,-18 Q8,-30 12,-35" stroke="#0f5a6b" strokeWidth="1" fill="none" />

                    {/* Legs (Gripping the air/surface) */}
                    <path d="M-2,10 Q-10,20 -8,25" stroke="#0f5a6b" strokeWidth="1.5" fill="none" />
                    <path d="M2,10 Q10,20 8,25" stroke="#0f5a6b" strokeWidth="1.5" fill="none" />

                    <path d="M-2,18 Q-8,28 -5,32" stroke="#0f5a6b" strokeWidth="1.5" fill="none" opacity={0.7} />
                    <path d="M2,18 Q8,28 5,32" stroke="#0f5a6b" strokeWidth="1.5" fill="none" opacity={0.7} />
                </g>

                <defs>
                    <linearGradient id="wingGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="rgba(15, 90, 107, 0.9)" />
                        <stop offset="50%" stopColor="rgba(236, 72, 153, 0.6)" />
                        <stop offset="100%" stopColor="rgba(165, 243, 252, 0.5)" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    );
};
