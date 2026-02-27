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

            {/* Main Portfolio Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <ScrollReveal delay={0.1}>
                    <PortfolioGrid data={portfolioData as any} locale={locale} dict={dict} />
                </ScrollReveal>
            </section>
        </main>
    );
}
