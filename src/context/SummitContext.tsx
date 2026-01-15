import { createContext, useContext, useState, type ReactNode } from 'react';

type WizardType = 'abstract' | 'register' | null;

interface SummitContextType {
    wizardOpen: WizardType;
    openWizard: (type: WizardType) => void;
    closeWizard: () => void;
}

const SummitContext = createContext<SummitContextType | undefined>(undefined);

export const SummitProvider = ({ children }: { children: ReactNode }) => {
    const [wizardOpen, setWizardOpen] = useState<WizardType>(null);

    const openWizard = (type: WizardType) => setWizardOpen(type);
    const closeWizard = () => setWizardOpen(null);

    return (
        <SummitContext.Provider value={{ wizardOpen, openWizard, closeWizard }}>
            {children}
        </SummitContext.Provider>
    );
};

export const useSummit = () => {
    const context = useContext(SummitContext);
    if (!context) {
        throw new Error('useSummit must be used within a SummitProvider');
    }
    return context;
};
