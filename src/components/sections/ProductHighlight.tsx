'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function ProductHighlight({ dict }: { dict: any }) {
    const products = [
        { name: "ACB (Air Circuit Breaker)", brand: "Schneider Electric", category: "Breaker", img: "/images/produk/produk1.avif" },
        { name: "Inverter 3-Phase", brand: "Mitsubishi", category: "Drive", img: "/images/produk/produk2.avif" },
        { name: "Kabel NYY 4x95mm", brand: "Supreme", category: "Cable", img: "/images/produk/produk3.avif" },
        { name: "Magnetic Contactor", brand: "Chint", category: "Control", img: "/images/produk/produk4.avif" },
        { name: "MCCB 3 Pole 250A", brand: "ABB", category: "Breaker", img: "/images/produk/produk5.avif" },
        { name: "Relay Timer", brand: "Omron", category: "Control", img: "/images/produk/produk6.avif" }
    ];

    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    const updateWidth = () => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    };

    useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);
        const timeout = setTimeout(updateWidth, 500); // Timeout to accommodate image loading/layout shift
        return () => {
            window.removeEventListener('resize', updateWidth);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <section className="bg-neutral py-20 border-t border-gray-200 overflow-hidden">
            <ScrollReveal animation="slideLeft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">{dict.title}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">{dict.subtitle}</p>
                    </div>
                </div>

                {/* Slider / Carousel Container */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div ref={carouselRef} className="cursor-grab overflow-hidden active:cursor-grabbing w-full">
                        <motion.div
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            whileTap={{ cursor: "grabbing" }}
                            className="flex gap-6 w-max"
                        >
                            {products.map((p, i) => (
                                <motion.div
                                    key={i}
                                    className="w-[280px] md:w-[320px] bg-white p-6 rounded-lg shadow border border-gray-100 text-center hover:shadow-md transition-shadow flex-shrink-0"
                                >
                                    <div className="w-full h-48 bg-gray-50 flex items-center justify-center rounded mb-4 overflow-hidden relative">
                                        <Image src={p.img} alt={p.name} fill className="object-cover pointer-events-none" sizes="(max-width: 768px) 100vw, 320px" draggable={false} />
                                    </div>
                                    <span className="text-xs font-semibold text-secondary bg-primary px-2 py-1 rounded inline-block mb-2">{p.category}</span>
                                    <h3 className="font-bold text-dark truncate">{p.name}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{p.brand}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mt-12 text-center">
                        <Link href="/products" className="inline-block px-6 py-3 border-2 border-primary text-primary font-bold rounded hover:bg-primary hover:text-white transition-colors">
                            {dict.viewAll}
                        </Link>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
