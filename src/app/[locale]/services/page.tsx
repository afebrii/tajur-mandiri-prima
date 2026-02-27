import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Wrench, ShieldCheck, Zap, Cog } from 'lucide-react';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ScrollReveal from '@/components/common/ScrollReveal';

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
        <main className="w-full flex-col bg-background pt-20">
            {/* Header Section */}
            <section className="bg-primary text-white py-24 px-4 text-center">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{dict.title}</h1>
                        <p className="text-xl text-gray-300">{dict.subtitle}</p>
                    </div>
                </ScrollReveal>
            </section>

            {/* Detailed Services */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="space-y-16">
                    {dict.items.map((service: any, index: number) => (
                        <ScrollReveal key={index} delay={0.1} animation={index % 2 === 0 ? 'slideRight' : 'slideLeft'}>
                            <div className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-1/2">
                                    <div className="bg-gray-100 rounded-2xl h-80 w-full flex items-center justify-center border border-gray-200">
                                        <span className="text-gray-400">Illustration Placeholder for {service.title}</span>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="mb-6 inline-block p-4 bg-secondary/20 rounded-xl border border-secondary/30">
                                        {icons[service.iconId as keyof typeof icons]}
                                    </div>
                                    <h2 className="text-3xl font-bold text-dark mb-4">{service.title}</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature: string, fIdx: number) => (
                                            <li key={fIdx} className="flex items-start">
                                                <span className="text-secondary mr-3 mt-1">✔</span>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.3} animation="scale">
                    <div className="mt-20 pt-12 border-t border-gray-200 text-center flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-dark mb-6">{dict.whatsappCta || "Konsultasikan Kebutuhan Anda"}</h3>
                        <WhatsAppButton message="Halo, saya ingin berkonsultasi mengenai layanan elektrikal industri dari TMP." />
                    </div>
                </ScrollReveal>
            </section>
        </main>
    )
}
