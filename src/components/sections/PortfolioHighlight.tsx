import { Link } from '@/i18n/routing';
import ScrollReveal from '@/components/common/ScrollReveal';
import Image from 'next/image';

export default function PortfolioHighlight({ dict }: { dict: any }) {
    const projects = [
        { title: "Instalasi Panel LVMDP", client: "PT. XYZ Manufacturing", loc: "Cikarang", img: "/images/portfolio/project1.avif" },
        { title: "Kapasitor Bank 1200 kVAR", client: "Pabrik Tekstil ABC", loc: "Bandung", img: "/images/portfolio/project2.avif" },
        { title: "Maintenance Trafo 20kV", client: "Kawasan Industri MM2100", loc: "Bekasi", img: "/images/portfolio/project3.avif" }
    ];

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">{dict.title}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">{dict.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((p, i) => (
                            <ScrollReveal key={i} delay={i * 0.2} animation="scale">
                                <div className="group rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow bg-neutral">
                                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                                        <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-xl text-dark group-hover:text-primary transition-colors">{p.title}</h3>
                                        <p className="text-sm text-gray-500 mt-2">{p.client} • {p.loc}</p>
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
        </section>
    );
}
