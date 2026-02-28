'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from '@/components/common/ScrollReveal';
import ProductModal from '@/components/common/ProductModal';

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

export default function ProductGrid({ data, locale, dict }: { data: Product[], locale: string, dict: Record<string, string> }) {
    const [filter, setFilter] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // Extract unique categories for filter buttons
    const categories = ['All', ...Array.from(new Set(data.map(item => item.category)))];

    // Filter data based on selected category
    const filteredProducts = filter === 'All'
        ? data
        : data.filter(product => product.category === filter);

    return (
        <div>
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === category
                            ? 'bg-primary text-secondary shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                <AnimatePresence>
                    {filteredProducts.map((product, index) => (
                        <ScrollReveal key={product.id} delay={index * 0.1} animation="scale">
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedProduct(product)}
                                className="bg-white p-6 rounded-lg shadow border border-gray-100 flex flex-col group hover:shadow-lg transition-shadow h-full cursor-pointer"
                            >
                                <div className="w-full h-48 bg-gray-50 flex items-center justify-center rounded mb-4 overflow-hidden relative">
                                    {product.image ? (
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <span className="text-gray-400 text-sm">Image</span>
                                    )}
                                    <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
                                        <span className="text-xs font-semibold text-secondary bg-primary px-2 py-1 rounded inline-block shadow-sm">{product.category}</span>
                                    </div>
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                                        <span className="bg-white text-primary font-bold px-4 py-2 rounded shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-sm">
                                            {dict.viewDetails || 'View Details'}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="font-bold text-dark text-lg mb-1 leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                                <p className="text-sm font-semibold text-primary mb-3">{product.brand}</p>

                                <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                                    {locale === 'id' ? product.description_id : product.description_en}
                                </p>

                                <button className="w-full py-2 bg-neutral text-primary border border-primary/20 font-semibold rounded group-hover:bg-primary group-hover:text-white transition-colors mt-auto pointer-events-none">
                                    {dict.viewDetails || "View Details"}
                                </button>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </AnimatePresence>
            </motion.div>

            {
                filteredProducts.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        {dict.noProductsFound || "No products found for this category."}
                    </div>
                )
            }

            {/* Product Modal */}
            <ProductModal
                product={selectedProduct}
                locale={locale}
                onClose={() => setSelectedProduct(null)}
            />
        </div>
    );
}
