import { setRequestLocale } from 'next-intl/server';
import { Wrench, ShieldCheck, Zap, Cog } from 'lucide-react';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ScrollReveal from '@/components/common/ScrollReveal';
import Image from 'next/image';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const dict = await import(`@/messages/${locale}.json`).then((m) => m.default.Services);

    const icons = {
        "panel": <ShieldCheck className="w-12 h-12 text-primary" />,
        "installation": <Zap className="w-12 h-12 text-primary" />,
        "maintenance": <Wrench className="w-12 h-12 text-primary" />,
        "supply": <Cog className="w-12 h-12 text-primary" />
    };

    return (
        <main className="w-full flex-col bg-background  transition-colors duration-300">

            {/* Header Section */}
            <section className="relative bg-dark text-white py-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-dark to-dark opacity-90 z-0"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern-dots.png')] bg-repeat opacity-10 z-0 mix-blend-overlay"></div>
                <ScrollReveal className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 font-semibold text-sm rounded-full mb-6">Expertise Kami</div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">{dict.title}</h1>
                        <p className="text-xl md:text-2xl text-gray-200 text-shadow">{dict.subtitle}</p>
                    </div>
                </ScrollReveal>
            </section>

            {/* Detailed Services */}
            <section className="bg-white">
                <div className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
                    {/* Subtle background abstract shape */}
                    <div className="absolute top-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"></div>
                    <div className="absolute bottom-40 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none z-0"></div>

                    <div className="space-y-24 relative z-10">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {dict.items.map((service: any, index: number) => (
                            <ScrollReveal key={index} delay={0.1} animation={index % 2 === 0 ? 'slideRight' : 'slideLeft'}>
                                <div className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="w-full md:w-1/2">
                                        <div className="relative bg-gray-100 rounded-2xl h-80 w-full overflow-hidden border border-gray-200 shadow-md group">
                                            <Image
                                                src={`/images/services/layanan${index + 1}.png`}
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="mb-6 inline-block p-4 bg-secondary/20  rounded-xl border border-secondary/30 ">
                                            {icons[service.iconId as keyof typeof icons]}
                                        </div>
                                        <h2 className="text-3xl font-bold text-dark  mb-4">{service.title}</h2>
                                        <p className="text-lg text-gray-600  leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {service.features.map((feature: string, fIdx: number) => (
                                                <li key={fIdx} className="flex items-start">
                                                    <span className="text-secondary mr-3 mt-1">✔</span>
                                                    <span className="text-gray-700 ">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal delay={0.3} animation="scale">
                        <div className="mt-20 pt-12 border-t border-gray-200  text-center flex flex-col items-center">
                            <h3 className="text-2xl font-bold text-dark mb-6">{dict.whatsappCta || "Konsultasikan Kebutuhan Anda"}</h3>
                            <WhatsAppButton href="https://wa.me/6285219452921?text=Hello%20Tajur%20Mandiri%20Prima!%20I%20would%20like%20to%20consult%20regarding%20electrical%20products%2C%20can%20you%20help%20me%3F" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    )
}
