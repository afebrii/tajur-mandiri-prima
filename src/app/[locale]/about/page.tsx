import { setRequestLocale } from 'next-intl/server';
import { Target, Flag, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import Image from 'next/image';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const dict = await import(`@/messages/${locale}.json`).then((m) => m.default.About);

    return (
        <main className="w-full flex-col bg-background  transition-colors duration-300">

            {/* Header Section */}
            <section className="relative bg-dark text-white py-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-dark to-dark opacity-90 z-0"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern-dots.png')] bg-repeat opacity-10 z-0 mix-blend-overlay"></div>
                <ScrollReveal className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 font-semibold text-sm rounded-full mb-6">Profile Perusahaan</div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">{dict.title}</h1>
                        <p className="text-xl md:text-2xl text-gray-200 text-shadow">{dict.subtitle}</p>
                    </div>
                </ScrollReveal>
            </section>

            {/* History Section */}
            <section className="bg-white">
                <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <ScrollReveal delay={0.1} animation="slideLeft">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100 group transition-all duration-500 hover:shadow-2xl">
                                    <Image
                                        src="/images/image-history.avif"
                                        alt="History of Tajur Mandiri Prima"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold text-primary  mb-6">{dict.History.title}</h2>
                                <p className="text-lg text-gray-600  leading-relaxed">
                                    {dict.History.content}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="relative bg-neutral  py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200  transition-colors duration-300 overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5  rounded-full blur-3xl pointer-events-none -mt-20 -mr-20"></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <ScrollReveal delay={0.2} animation="slideRight">
                        <div className="bg-background p-8 rounded-xl shadow-lg border border-gray-100 relative h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">

                            <div className="absolute -top-6 left-8 bg-primary text-secondary p-4 rounded-lg shadow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"><Target size={32} /></div>
                            <h3 className="text-2xl font-bold text-primary mb-4 mt-6">{dict.VisionMission.visionTitle}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">{dict.VisionMission.visionContent}</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.4} animation="slideLeft">
                        <div className="bg-background p-8 rounded-xl shadow-lg border border-gray-100 relative h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">

                            <div className="absolute -top-6 left-8 bg-primary text-secondary p-4 rounded-lg shadow transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"><Flag size={32} /></div>
                            <h3 className="text-2xl font-bold text-primary mb-4 mt-6">{dict.VisionMission.missionTitle}</h3>
                            <ul className="list-disc pl-5 space-y-3 text-gray-600 ">
                                {dict.VisionMission.missionPoints.map((point: string, idx: number) => (
                                    <li key={idx} className="leading-relaxed">{point}</li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="bg-white">
                <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <ScrollReveal delay={0.1} animation="fade">
                        <h2 className="text-3xl font-bold text-primary  mb-12">{dict.Values.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {dict.Values.items.map((val: any, i: number) => (
                                <ScrollReveal key={i} delay={i * 0.15} animation="scale" className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="mx-auto w-16 h-16 bg-secondary/10 text-secondary border border-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                                        <ShieldCheck size={32} className="text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-3">{val.name}</h3>
                                    <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
