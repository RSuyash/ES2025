import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary"
    size?: "default" | "sm" | "lg" | "icon"
    asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

        // Using simple switch or obj map
        const getVariantClass = (v: string) => {
            switch (v) {
                case "primary": return "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                case "destructive": return "bg-red-500 text-destructive-foreground hover:bg-red-500/90"
                case "outline": return "border border-input bg-background hover:bg-secondary/10 hover:text-accent-foreground border-slate-200"
                case "secondary": return "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                case "ghost": return "hover:bg-slate-100 hover:text-slate-900"
                case "link": return "text-primary underline-offset-4 hover:underline"
                default: return "bg-primary text-primary-foreground hover:bg-primary/90"
            }
        }

        const getSizeClass = (s: string) => {
            switch (s) {
                case "sm": return "h-9 rounded-md px-3"
                case "lg": return "h-11 rounded-md px-8 text-base"
                case "icon": return "h-10 w-10"
                default: return "h-10 px-4 py-2"
            }
        }

        return (
            <button
                className={cn(baseStyles, getVariantClass(variant), getSizeClass(size), className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
