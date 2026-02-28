'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import ScrollReveal from '@/components/common/ScrollReveal';
import ProductModal from '@/components/common/ProductModal';
import productsData from '@/data/products.json';

type Product = {
    id: string;
    name: string;
    brand: string;
    category: string;
    description_id: string;
    description_en: string;
    technical_specs: Record<string, string | undefined>;
    image: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductHighlight({ dict }: { dict: any }) {
    const locale = useLocale();
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    // Feature first 6 products
    const featuredProducts = productsData.slice(0, 6);

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
        <section className="relative bg-gray-50  py-24 overflow-hidden transition-colors duration-300">
            {/* Top wave/divider effect could go here, for now a soft gradient top border */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300  to-transparent"></div>
            <ScrollReveal animation="slideLeft" className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-block px-3 py-1 bg-primary/10  text-primary  font-semibold text-sm rounded-full mb-4">Katalog Unggulan</div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-dark  mb-4 tracking-tight">{dict.title}</h2>
                        <p className="text-gray-600  max-w-2xl mx-auto text-lg">{dict.subtitle}</p>
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
                            {featuredProducts.map((p, i) => (
                                <motion.div
                                    key={i}
                                    className="w-[280px] md:w-[320px] bg-white p-6 rounded-lg shadow border border-gray-100 text-center hover:shadow-lg transition-shadow flex-shrink-0 flex flex-col"
                                >
                                    <div className="w-full h-48 bg-gray-50 flex items-center justify-center rounded mb-4 overflow-hidden relative">
                                        <Image src={p.image} alt={p.name} fill className="object-contain p-2 pointer-events-none" sizes="(max-width: 768px) 100vw, 320px" draggable={false} />
                                    </div>
                                    <span className="text-xs font-semibold text-secondary bg-primary px-2 py-1 rounded inline-block mb-2 shadow-sm">{p.category}</span>
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
