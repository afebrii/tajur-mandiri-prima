'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';


interface Slide {
    title: string;
    subtitle: string;
    cta: string;
    link?: string;
}


const backgroundImages = [
    '/images/carousel-hero/carousel1.avif',
    '/images/carousel-hero/carousel2.avif',
    '/images/carousel-hero/carousel3.avif',
    '/images/carousel-hero/carousel4.avif'
];

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slideData = slides[currentBg % slides.length] || { title: '', subtitle: '', cta: '', link: '' };

    const isInternalLink = slideData.link?.startsWith('/');


    const nextSlide = () => setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    const prevSlide = () => setCurrentBg((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);

    return (
        <div className="relative w-full h-[100vh] min-h-[600px] overflow-hidden bg-dark">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentBg}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1.5 } }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
                    />
                    <div className="absolute inset-0 bg-dark/60"></div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex flex-col justify-center z-10 pointer-events-none">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentBg}
                            className="max-w-3xl pointer-events-auto text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                            >
                                {slideData.title}
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg md:text-2xl text-gray-300 mb-8"
                            >
                                {slideData.subtitle}
                            </motion.p>
                            {isInternalLink ? (
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="inline-block"
                                >
                                    <Link
                                        href={slideData.link || '#'}
                                        className="px-8 py-4 bg-secondary text-primary font-bold text-lg rounded-sm hover:bg-white hover:text-primary transition-colors shadow-lg inline-block pointer-events-auto"
                                    >
                                        {slideData.cta}
                                    </Link>
                                </motion.div>
                            ) : (
                                <motion.a
                                    href={slideData.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="px-8 py-4 bg-secondary text-primary font-bold text-lg rounded-sm hover:bg-white hover:text-primary transition-colors shadow-lg inline-block cursor-pointer"
                                >
                                    {slideData.cta}
                                </motion.a>
                            )}


                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
                <ChevronLeft size={48} className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
                <ChevronRight size={48} className="w-8 h-8 md:w-12 md:h-12" />
            </button>
        </div>
    );
}
