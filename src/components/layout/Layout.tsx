import Navbar from "./Navbar"
import Footer from "./Footer"
import { Modal } from "../ui/Modal"
import { AbstractSubmissionWizard } from "../wizards/AbstractSubmissionWizard"
import { RegistrationWizard } from "../wizards/RegistrationWizard"
import { useSummit } from "../../context/SummitContext"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const { wizardOpen, closeWizard } = useSummit()

    return (
        <div className="flex flex-col min-h-screen bg-background font-sans text-slate-900">
            <Navbar />
            <main className="flex-grow pt-20"> {/* pt-20 to offset fixed navbar */}
                {children}
            </main>
            <Footer />

            {/* Global Wizards - Accessible from anywhere via SummitContext */}
            <Modal
                isOpen={wizardOpen === 'abstract'}
                onClose={closeWizard}
                title="Submit Your Abstract"
            >
                <AbstractSubmissionWizard onClose={closeWizard} />
            </Modal>
            <Modal
                isOpen={wizardOpen === 'register'}
                onClose={closeWizard}
                title="Conference Registration"
            >
                <RegistrationWizard onClose={closeWizard} />
            </Modal>
        </div>
    )
}

export default Layout
