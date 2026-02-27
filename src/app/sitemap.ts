import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/about', '/services', '/portfolio', '/products'];

    const siteUrl = 'https://tajurmandiriprima.com';

    const sitemapData: MetadataRoute.Sitemap = [];

    // Looping for each route and locale to build canonical and localized alternative links
    routes.forEach((route) => {
        routing.locales.forEach((locale) => {
            // Create the URL per locale
            const url = `${siteUrl}/${locale}${route}`;

            const languages: Record<string, string> = {};

            // Generating alternates based on different available locales
            routing.locales.forEach((altLocale) => {
                languages[altLocale] = `${siteUrl}/${altLocale}${route}`;
            });

            sitemapData.push({
                url,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'weekly' : 'monthly',
                priority: route === '' ? 1 : 0.8,
                alternates: {
                    languages,
                },
            });
        });
    });

    return sitemapData;
}
