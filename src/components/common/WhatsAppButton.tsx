'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({
    message = "Halo, saya tertarik dengan layanan/produk dari PT. Tajur Mandiri Prima.",
    className = ""
}: {
    message?: string,
    className?: string
}) {
    const phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp aktif
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all ${className}`}
        >
            <MessageCircle size={24} />
            <span className="hidden sm:inline">WhatsApp</span>
        </a>
    );
}
