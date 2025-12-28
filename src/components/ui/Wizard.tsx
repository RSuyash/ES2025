import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import { Button } from "./Button";
import { clsx } from "clsx";

interface Step {
    id: string;
    title: string;
    content: ReactNode;
}

interface WizardProps {
    steps: Step[];
    onComplete?: () => void;
    onClose: () => void;
    completeLabel?: string;
    completeLink?: string; // If the final step is a link
}

export const Wizard = ({ steps, onClose, completeLabel = "Finish", completeLink }: WizardProps) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(1);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setDirection(1);
            setCurrentStep((prev) => prev + 1);
        } else if (completeLink) {
            window.open(completeLink, "_blank");
            onClose();
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setDirection(-1);
            setCurrentStep((prev) => prev - 1);
        }
    };

    const isLastStep = currentStep === steps.length - 1;

    return (
        <div className="flex flex-col h-full min-h-[400px]">
            {/* Progress Bar */}
            <div className="px-8 pt-6 pb-2">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Step {currentStep + 1} of {steps.length}
                    </span>
                    <span className="text-xs font-medium text-primary">
                        {steps[currentStep].title}
                    </span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary to-emerald-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative overflow-hidden px-8 py-6">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentStep}
                        custom={direction}
                        initial={{ x: direction * 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction * -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="h-full"
                    >
                        {steps[currentStep].content}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            <div className="sticky bottom-0 z-20 flex items-center justify-between px-8 py-6 bg-slate-50/95 backdrop-blur-sm border-t border-slate-100 mt-auto shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <Button
                    variant="ghost"
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className={clsx(currentStep === 0 && "opacity-0 pointer-events-none")}
                >
                    <ArrowLeft size={16} className="mr-2" /> Back
                </Button>

                <Button onClick={handleNext} className="min-w-[120px]">
                    {isLastStep ? (
                        <>
                            {completeLabel} {completeLink ? <ArrowRight size={16} className="ml-2" /> : <Check size={16} className="ml-2" />}
                        </>
                    ) : (
                        <>
                            Next <ArrowRight size={16} className="ml-2" />
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
};
