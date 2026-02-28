'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Building, Tag } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import WhatsAppButton from '@/components/common/WhatsAppButton';

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

interface ProjectModalProps {
    project: Project | null;
    locale: string;
    onClose: () => void;
}

export default function ProjectModal({ project, locale, onClose }: ProjectModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    if (!project) return null;

    const title = locale === 'id' ? project.title_id : project.title_en;
    const description = locale === 'id' ? project.description_id : project.description_en;

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
                            <div className="w-full relative bg-gray-100 aspect-video md:aspect-[16/7]">
                                {project.images && project.images.length > 0 ? (
                                    <Image
                                        src={project.images[0]}
                                        alt={title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full text-gray-400">
                                        No Image Available
                                    </div>
                                )}
                            </div>

                            <div className="w-full p-6 md:p-10 flex flex-col">
                                <h2 className="text-3xl font-bold text-dark mb-6 leading-tight">{title}</h2>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <Building className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Client</p>
                                            <p className="text-gray-800 font-medium">{project.client}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Location</p>
                                            <p className="text-gray-800 font-medium">{project.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Year</p>
                                            <p className="text-gray-800 font-medium">{project.year}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Tag className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Category</p>
                                            <span className="inline-block bg-secondary/30 text-primary text-xs font-bold px-3 py-1 rounded-full">{project.category}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-6 mt-auto">
                                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                        {description}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-dashed border-gray-200">
                                        <WhatsAppButton
                                            href="https://wa.me/6285219452921?text=Hello%20Tajur%20Mandiri%20Prima!%20I%20would%20like%20to%20consult%20regarding%20electrical%20products%2C%20can%20you%20help%20me%3F"
                                            className="w-full sm:w-max px-10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
