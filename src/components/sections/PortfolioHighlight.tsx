'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import ScrollReveal from '@/components/common/ScrollReveal';
import Image from 'next/image';
import ProjectModal from '@/components/common/ProjectModal';
import portfolioData from '@/data/portfolio.json';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PortfolioHighlight({ dict }: { dict: any }) {
    const locale = useLocale();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const projects = portfolioData.slice(0, 3); // Get top 3 projects

    return (
        <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
            {/* Decorative background blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>

            <ScrollReveal animation="fade" className="relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4 tracking-tight">{dict.title}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">{dict.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((p, i) => (
                            <ScrollReveal key={p.id} delay={i * 0.2} animation="scale">
                                <div
                                    onClick={() => setSelectedProject(p)}
                                    className="group rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow bg-neutral cursor-pointer h-full flex flex-col"
                                >
                                    <div className="h-48 bg-gray-200 relative overflow-hidden shrink-0">
                                        <Image src={p.images[0]} alt={locale === 'id' ? p.title_id : p.title_en} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="bg-white text-primary font-bold px-4 py-2 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                {locale === 'id' ? 'Lihat Detail' : 'View Detail'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="font-bold text-xl text-dark group-hover:text-primary transition-colors">{locale === 'id' ? p.title_id : p.title_en}</h3>
                                        <p className="text-sm text-gray-500 mt-2">{p.client} • {p.location}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link href="/portfolio" className="inline-block px-6 py-3 bg-secondary text-primary font-bold rounded hover:bg-white hover:text-primary border hover:border-primary transition-colors">
                            {dict.viewAll}
                        </Link>
                    </div>
                </div>
            </ScrollReveal>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                locale={locale}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
