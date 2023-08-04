/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { motion, AnimatePresence } from 'framer-motion'
import { type ReactNode } from 'react';

// Create React component standard way
function AnimatedPresence({ children, activeTab }: { children?: ReactNode[], activeTab: string }) {
    return (
        <>
            <AnimatePresence mode={"wait"} initial={false}>
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}

// Convert React component to Qwik component
export const QAnimatedPresence = qwikify$(AnimatedPresence);