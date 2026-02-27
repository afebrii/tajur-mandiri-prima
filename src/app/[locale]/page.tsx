import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import HeroCarousel from '@/components/sections/HeroCarousel';
import StatsCounter from '@/components/sections/StatsCounter';
import PortfolioHighlight from '@/components/sections/PortfolioHighlight';
import ProductHighlight from '@/components/sections/ProductHighlight';
import ServiceHighlight from '@/components/sections/ServiceHighlight';
import ScrollReveal from '@/components/common/ScrollReveal';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    // Ambil tipe static JSON langsung (atau useTranslations)
    const dict = await import(`@/messages/${locale}.json`).then((m) => m.default.Index);

    return (
        <main className="w-full flex-col bg-background">
            <HeroCarousel slides={dict.Hero.slides} />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <ScrollReveal animation="slideRight">
                    <h2 className="text-3xl font-bold text-primary mb-6">{dict.Profile.title}</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        {dict.Profile.description}
                    </p>
                    <button className="px-6 py-3 border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
                        {dict.Profile.readMore}
                    </button>
                </ScrollReveal>
            </section>

            <StatsCounter stats={dict.Stats} />
            <ServiceHighlight dict={dict.ServiceHighlight} />
            <ProductHighlight dict={dict.ProductHighlight} />
            <PortfolioHighlight dict={dict.PortfolioHighlight} />
        </main>
    );
}
