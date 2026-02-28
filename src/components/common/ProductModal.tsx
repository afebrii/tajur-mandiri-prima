'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Tag, Box, Info } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import WhatsAppButton from '@/components/common/WhatsAppButton';

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

interface ProductModalProps {
    product: Product | null;
    locale: string;
    onClose: () => void;
}

export default function ProductModal({ product, locale, onClose }: ProductModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (product) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [product]);

    if (!product) return null;

    const description = locale === 'id' ? product.description_id : product.description_en;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-[60] flex items-center justify-center p-4 pt-24 pb-10 bg-black/60 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-4xl max-h-[calc(100vh-8rem)] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-[70] flex items-center justify-center w-10 h-10 bg-white/80 p-2 text-gray-800 rounded-full hover:bg-white hover:text-primary transition-colors shadow-md backdrop-blur-md"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>

                    <div className="overflow-y-auto w-full">
                        <div className="flex flex-col">
                            <div className="w-full relative bg-gray-50 flex items-center justify-center p-8 aspect-[4/3] sm:aspect-video border-b border-gray-100">
                                {product.image ? (
                                    <div className="relative w-full h-full max-w-sm max-h-64">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full text-gray-400">
                                        No Image Available
                                    </div>
                                )}
                            </div>

                            <div className="w-full p-6 md:p-10 flex flex-col">
                                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                                    <h2 className="text-3xl font-bold text-dark leading-tight">{product.name}</h2>
                                    <span className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg whitespace-nowrap">
                                        {product.brand}
                                    </span>
                                </div>

                                <div className="space-y-6 mb-8 mt-2">
                                    <div className="flex items-center gap-3">
                                        <Tag className="w-5 h-5 text-gray-400 shrink-0" />
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-500 font-medium">Kategori:</span>
                                            <span className="font-semibold text-dark">{product.category}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                    {/* Description Section */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Info className="w-5 h-5 text-primary" />
                                            <h3 className="text-lg font-bold text-dark">
                                                {locale === 'id' ? 'Deskripsi Produk' : 'Product Description'}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {description}
                                        </p>
                                    </div>

                                    {/* Specifications Section */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Box className="w-5 h-5 text-primary" />
                                            <h3 className="text-lg font-bold text-dark">
                                                {locale === 'id' ? 'Spesifikasi Teknis' : 'Technical Specifications'}
                                            </h3>
                                        </div>
                                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                                            <dl className="divide-y divide-gray-200">
                                                {Object.entries(product.technical_specs).map(([key, value]) => {
                                                    // Format key slightly (e.g. voltage_rating -> Voltage Rating)
                                                    const formattedKey = key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                                                    return (
                                                        <div key={key} className="py-3 flex justify-between gap-4">
                                                            <dt className="text-gray-500 font-medium">{formattedKey}</dt>
                                                            <dd className="text-dark font-semibold text-right">{value}</dd>
                                                        </div>
                                                    );
                                                })}
                                            </dl>
                                        </div>
                                    </div>
                                </div>

                                {/* WhatsApp CTA */}
                                <div className="mt-10 pt-6 border-t border-dashed border-gray-200">
                                    <WhatsAppButton
                                        href="https://wa.me/6285219452921?text=Hello%20Tajur%20Mandiri%20Prima!%20I%20would%20like%20to%20consult%20regarding%20electrical%20products%2C%20can%20you%20help%20me%3F"
                                        className="w-full md:w-max mx-auto px-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
