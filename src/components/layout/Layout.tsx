
import Navbar from "./Navbar"
import Footer from "./Footer"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-background font-sans text-slate-900">
            <Navbar />
            <main className="flex-grow pt-20"> {/* pt-20 to offset fixed navbar */}
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
