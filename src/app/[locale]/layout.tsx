import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import JsonLd from '@/components/common/JsonLd';

import { Metadata } from 'next';
import '../globals.css';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('title'),
        description: t('description'),
        metadataBase: new URL('https://tajurmandiriprima.com'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            url: `https://tajurmandiriprima.com/${locale}`,
            siteName: 'PT. Tajur Mandiri Prima',
            locale: locale === 'id' ? 'id_ID' : 'en_US',
            type: 'website',
            images: [
                {
                    url: '/images/hero1.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'PT. Tajur Mandiri Prima',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title'),
            description: t('description'),
            images: ['/images/hero1.jpg'],
        },
        alternates: {
            canonical: `https://tajurmandiriprima.com/${locale}`,
            languages: {
                'id': 'https://tajurmandiriprima.com/id',
                'en': 'https://tajurmandiriprima.com/en',
            },
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Validate that the incoming `locale` parameter is valid
    if (!routing.locales.includes(locale as typeof routing.locales[number])) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className="antialiased font-sans text-dark bg-background  transition-colors duration-300 pt-20">
                <JsonLd />
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    <div className="min-h-screen">
                        {children}
                    </div>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
