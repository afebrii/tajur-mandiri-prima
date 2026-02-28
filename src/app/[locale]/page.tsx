import { setRequestLocale } from 'next-intl/server';
import HeroCarousel from '@/components/sections/HeroCarousel';
import StatsCounter from '@/components/sections/StatsCounter';
import PortfolioHighlight from '@/components/sections/PortfolioHighlight';
import ProductHighlight from '@/components/sections/ProductHighlight';
import ServiceHighlight from '@/components/sections/ServiceHighlight';
import ScrollReveal from '@/components/common/ScrollReveal';
import { Link } from '@/i18n/routing';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    // Ambil tipe static JSON langsung (atau useTranslations)
    const dict = await import(`@/messages/${locale}.json`).then((m) => m.default.Index);

    return (
        <main className="w-full flex-col bg-background">
            <HeroCarousel slides={dict.Hero.slides} />

            <section className="relative w-full py-24 bg-white  overflow-hidden transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50 to-white   pointer-events-none"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <ScrollReveal animation="slideUp">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10  text-primary  font-semibold text-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary  animate-pulse"></span>
                            {dict.Profile.title}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-dark  mb-8 tracking-tight">
                            Solusi Elektrikal Industri Terpercaya
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600  max-w-4xl mx-auto leading-relaxed mb-10 font-medium">
                            {dict.Profile.description}
                        </p>
                        <Link href="/about">
                            <button className="group px-8 py-4 bg-primary text-white font-bold text-lg rounded-sm hover:bg-dark transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-3 mx-auto">
                                {dict.Profile.readMore}
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <StatsCounter stats={dict.Stats} />
            <ServiceHighlight dict={{ ...dict.ServiceHighlight, items: (await import(`@/messages/${locale}.json`)).default.Services.items }} />
            <ProductHighlight dict={dict.ProductHighlight} />
            <PortfolioHighlight dict={dict.PortfolioHighlight} />
        </main>
    );
}
