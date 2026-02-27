'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type AnimationType = 'fade' | 'slideUp' | 'slideRight' | 'slideLeft' | 'scale';

export default function ScrollReveal({
    children,
    className = "",
    delay = 0,
    animation = 'slideUp'
}: {
    children: React.ReactNode,
    className?: string,
    delay?: number,
    animation?: AnimationType
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const variants = {
        fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
        slideUp: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
        slideRight: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
        slideLeft: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
        scale: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } }
    };

    return (
        <motion.div
            ref={ref}
            initial={variants[animation].initial}
            animate={isInView ? variants[animation].animate : variants[animation].initial}
            transition={{ duration: 0.8, delay: delay, ease: [0.17, 0.55, 0.55, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
