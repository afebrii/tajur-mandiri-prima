import { Zap, Wrench, Package, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ServiceHighlight({ dict }: { dict: any }) {
    const icons = {
        "panel": <ShieldCheck className="w-8 h-8" />,
        "installation": <Zap className="w-8 h-8" />,
        "maintenance": <Wrench className="w-8 h-8" />,
        "supply": <Package className="w-8 h-8" />
    };

    return (
        <section className="relative bg-neutral  py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
            {/* Decorative background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5  to-transparent pointer-events-none"></div>
            <ScrollReveal animation="fade" className="relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-dark  mb-4 tracking-tight">{dict.title}</h2>
                        <p className="text-gray-600  max-w-2xl mx-auto text-lg">{dict.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {dict.items.map((s: any, i: number) => (
                            <ScrollReveal key={i} delay={i * 0.15} animation="slideUp" className="p-8 rounded-2xl bg-white  shadow-xl hover:shadow-2xl border border-gray-100  hover:border-primary/30 transition-all duration-300 group">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10  text-primary  mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {icons[s.iconId as keyof typeof icons] || <Zap className="w-8 h-8" />}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-dark ">{s.title}</h3>
                                <p className="text-gray-600  text-sm leading-relaxed">{s.description}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
