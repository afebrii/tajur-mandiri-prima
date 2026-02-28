'use client';

import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton({
    message = "Halo, saya tertarik dengan layanan/produk dari PT. Tajur Mandiri Prima.",
    className = "",
    href
}: {
    message?: string,
    className?: string,
    href?: string
}) {
    const phoneNumber = "6285219452921"; // Updated phone number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = href || `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all ${className}`}
        >
            <MessageSquare size={20} />
            <span>Konsultasi Gratis</span>
        </a>
    );
}
