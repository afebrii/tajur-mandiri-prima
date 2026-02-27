import { setRequestLocale } from 'next-intl/server';
import { Target, Flag, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const dict = await import(`@/messages/${locale}.json`).then((m) => m.default.About);

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

            {/* History Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <ScrollReveal delay={0.1} animation="slideLeft">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="h-64 md:h-96 w-full bg-gray-200 rounded-xl"></div> {/* Placeholder Image */}
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-primary mb-6">{dict.History.title}</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {dict.History.content}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Vision & Mission Section */}
            <section className="bg-neutral py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <ScrollReveal delay={0.2} animation="slideRight">
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative h-full">
                            <div className="absolute -top-6 left-8 bg-primary text-secondary p-4 rounded-lg shadow"><Target size={32} /></div>
                            <h3 className="text-2xl font-bold text-primary mb-4 mt-6">{dict.VisionMission.visionTitle}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">{dict.VisionMission.visionContent}</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.4} animation="slideLeft">
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative h-full">
                            <div className="absolute -top-6 left-8 bg-primary text-secondary p-4 rounded-lg shadow"><Flag size={32} /></div>
                            <h3 className="text-2xl font-bold text-primary mb-4 mt-6">{dict.VisionMission.missionTitle}</h3>
                            <ul className="list-disc pl-5 space-y-3 text-gray-600">
                                {dict.VisionMission.missionPoints.map((point: string, idx: number) => (
                                    <li key={idx} className="leading-relaxed">{point}</li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <ScrollReveal delay={0.1} animation="fade">
                    <h2 className="text-3xl font-bold text-primary mb-12">{dict.Values.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {dict.Values.items.map((val: any, i: number) => (
                            <ScrollReveal key={i} delay={i * 0.15} animation="scale" className="p-6">
                                <div className="mx-auto w-16 h-16 bg-secondary/20 text-secondary border border-secondary/50 rounded-full flex items-center justify-center mb-6">
                                    <ShieldCheck size={32} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-3">{val.name}</h3>
                                <p className="text-gray-600">{val.desc}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </ScrollReveal>
            </section>
        </main>
    );
}
