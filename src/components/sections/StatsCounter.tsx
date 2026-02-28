'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Stat {
    label: string;
    value: number;
    suffix?: string;
}

export default function StatsCounter({ stats }: { stats: Stat[] }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="relative bg-dark text-white py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-dark to-dark opacity-90 z-0"></div>
            {/* Subtle overlay pattern */}
            <div className="absolute inset-0 bg-[url('/images/pattern-dots.png')] bg-repeat opacity-10 z-0 mix-blend-overlay"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                        >
                            <Counter value={stat.value} animate={isInView} />
                            {stat.suffix && <span className="text-4xl md:text-5xl font-bold text-secondary">{stat.suffix}</span>}
                            <p className="mt-2 text-gray-300 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Counter({ value, animate }: { value: number, animate: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!animate) return;

        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value, animate]);

    return <span className="text-4xl md:text-5xl font-bold text-secondary">{count}</span>;
}
