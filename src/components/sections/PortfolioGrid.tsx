'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from '@/components/common/ScrollReveal';

type Project = {
    id: string;
    title_id: string;
    title_en: string;
    client: string;
    location: string;
    year: number;
    category: string;
    description_id: string;
    description_en: string;
    images: string[];
};

export default function PortfolioGrid({ data, locale, dict }: { data: Project[], locale: string, dict: any }) {
    const [filter, setFilter] = useState('All');

    // Extract unique categories for filter buttons
    const categories = ['All', ...Array.from(new Set(data.map(item => item.category)))];

    // Filter data based on selected category
    const filteredProjects = filter === 'All'
        ? data
        : data.filter(project => project.category === filter);

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

            {/* Projects Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 0.1} animation="slideUp">
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden group h-full flex flex-col"
                            >
                                <div className="relative h-64 w-full bg-gray-200 overflow-hidden shrink-0">
                                    {project.images[0] ? (
                                        <Image
                                            src={project.images[0]}
                                            alt={locale === 'id' ? project.title_id : project.title_en}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">Image Placeholder</div>
                                    )}
                                    <div className="absolute top-4 right-4 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">
                                        {project.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-dark mb-2">
                                        {locale === 'id' ? project.title_id : project.title_en}
                                    </h3>
                                    <div className="text-sm text-gray-500 mb-4 flex gap-4">
                                        <span>🏢 {project.client}</span>
                                        <span>📍 {project.location}</span>
                                    </div>
                                    <p className="text-gray-600 line-clamp-3">
                                        {locale === 'id' ? project.description_id : project.description_en}
                                    </p>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    {dict.noProjectsFound || "No projects found for this category."}
                </div>
            )}
        </div>
    );
}
