import { Link } from '@/i18n/routing';

export default function Footer() {
    return (
        <footer className="bg-dark text-neutral pt-16 pb-8 border-t border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Tajur Mandiri Prima</h3>
                        <p className="text-gray-400">
                            Mitra Ahli Elektrikal & Solusi Industri Sejak 2000.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:text-primary transition-colors">Beranda</Link></li>
                            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portofolio</Link></li>
                            <li><Link href="/products" className="hover:text-primary transition-colors">Produk</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Layanan</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
                        <p className="text-gray-400">Bandung, Indonesia</p>
                        <p className="text-gray-400 mt-2">+62 818-642-923</p>
                        <p className="text-gray-400 mt-2">info@tajurmandiriprima.com</p>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} PT Tajur Mandiri Prima. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Created with ❤️ by Selasar Digital</p>
                </div>
            </div>
        </footer>
    );
}
