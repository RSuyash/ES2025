import { motion } from "framer-motion";

interface OrganicBackgroundProps {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
    };
    variant?: "flow" | "geometric" | "particles";
}

export const OrganicBackground = ({ colors, variant = "flow" }: OrganicBackgroundProps) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ backgroundColor: colors.background }}>
            {variant === "flow" && (
                <>
                    <motion.div
                        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[100px] opacity-20"
                        style={{ backgroundColor: colors.primary }}
                        animate={{
                            x: [0, 50, -50, 0],
                            y: [0, 30, -30, 0],
                            scale: [1, 1.1, 0.9, 1],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-15"
                        style={{ backgroundColor: colors.accent }}
                        animate={{
                            x: [0, -30, 30, 0],
                            y: [0, 50, -50, 0],
                            scale: [1, 1.2, 0.8, 1],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}
                    />
                </>
            )}

            {/* Additional geometric overlay (optional) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent mix-blend-overlay"></div>
        </div>
    );
};
