import React from "react"
import { cn } from "../../lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean
    width?: "default" | "narrow" | "full"
}

const Section = ({
    className,
    children,
    container = true,
    width = "default",
    ...props
}: SectionProps) => {
    return (
        <section className={cn("py-16 md:py-24", className)} {...props}>
            {container ? (
                <div className={cn(
                    "container mx-auto px-4",
                    width === "narrow" && "max-w-4xl",
                    width === "full" && "max-w-none px-0"
                )}>
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    )
}

export default Section
