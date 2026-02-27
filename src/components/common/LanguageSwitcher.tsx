'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex bg-neutral border border-gray-200 rounded-md p-1 shadow-sm">
            <button
                onClick={() => handleLocaleChange('id')}
                className={`px-3 py-1 rounded-sm text-sm font-semibold transition-all duration-200 focus:outline-none ${locale === 'id' ? 'bg-primary text-white shadow-md' : 'text-primary hover:bg-gray-100'}`}
                aria-label="Switch to Indonesian"
            >
                ID
            </button>
            <button
                onClick={() => handleLocaleChange('en')}
                className={`px-3 py-1 rounded-sm text-sm font-semibold transition-all duration-200 focus:outline-none ${locale === 'en' ? 'bg-primary text-white shadow-md' : 'text-primary hover:bg-gray-100'}`}
                aria-label="Switch to English"
            >
                EN
            </button>
        </div>
    );
}
