// Removed unused useTranslations import
import { setRequestLocale } from 'next-intl/server';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import portfolioData from '@/data/portfolio.json';
import ScrollReveal from '@/components/common/ScrollReveal';

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const dict = await import(`@/messages/${locale}.json`).then((m) => m.default.Portfolio);

    return (
        <main className="w-full flex-col bg-background  transition-colors duration-300">

            {/* Header Section */}
            <section className="relative bg-dark text-white py-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-dark to-dark opacity-90 z-0"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern-dots.png')] bg-repeat opacity-10 z-0 mix-blend-overlay"></div>
                <ScrollReveal className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 font-semibold text-sm rounded-full mb-6">Proyek Kami</div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">{dict.title}</h1>
                        <p className="text-xl md:text-2xl text-gray-200 text-shadow">{dict.subtitle}</p>
                    </div>
                </ScrollReveal>
            </section>

            {/* Main Portfolio Grid */}
            <section className="bg-white">
                <div className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none z-0"></div>

                    <ScrollReveal delay={0.1} className="relative z-10">
                        <PortfolioGrid data={portfolioData} locale={locale} dict={dict} />
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
