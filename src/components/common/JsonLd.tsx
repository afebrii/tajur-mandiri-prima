export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'PT. Tajur Mandiri Prima',
        'image': 'https://tajurmandiriprima.com/images/hero1.jpg',
        'url': 'https://tajurmandiriprima.com',
        'telephone': '+6281234567890',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Jalan Tajur Raya No. 123',
            'addressLocality': 'Bogor',
            'addressRegion': 'Jawa Barat',
            'postalCode': '16134',
            'addressCountry': 'ID'
        },
        'priceRange': '$$$',
        'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],
            'opens': '08:00',
            'closes': '17:00'
        },
        'sameAs': [
            'https://www.linkedin.com/company/pt-tajur-mandiri-prima',
            'https://www.instagram.com/tajurmandiriprima'
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
