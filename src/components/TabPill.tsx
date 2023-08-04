/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { motion } from 'framer-motion'

// Create React component standard way
function TabPill({ activeTab, route }: { activeTab: string, route: string }) {
    return (
        <>
            {activeTab === route && (
                <motion.div
                    layoutId="activePill"
                    transition={{ duration: 0.5, type: "spring" }}
                    className="absolute inset-0 rounded-md bg-neutral-800 mix-blend-lighten"
                ></motion.div>
            )}
        </>
    )
}

// Convert React component to Qwik component
export const QTabPill = qwikify$(TabPill);