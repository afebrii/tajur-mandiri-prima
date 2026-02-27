'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                        <span className="text-2xl font-bold text-primary tracking-tight">TMP</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 items-center text-dark font-medium">
                        <Link href="/" className="hover:text-primary transition-colors hover:font-bold">Home</Link>
                        <Link href="/about" className="hover:text-primary transition-colors hover:font-bold">About</Link>
                        <Link href="/services" className="hover:text-primary transition-colors hover:font-bold">Services</Link>
                        <Link href="/products" className="hover:text-primary transition-colors hover:font-bold">Products</Link>
                        <Link href="/portfolio" className="hover:text-primary transition-colors hover:font-bold">Portfolio</Link>
                    </nav>

                    {/* Global Options & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-primary focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full left-0">
                    <nav className="flex flex-col px-4 pt-2 pb-6 gap-4 text-dark font-medium">
                        <Link href="/" onClick={toggleMenu} className="block py-2 border-b border-gray-100 hover:text-primary transition-colors">Home</Link>
                        <Link href="/about" onClick={toggleMenu} className="block py-2 border-b border-gray-100 hover:text-primary transition-colors">About</Link>
                        <Link href="/services" onClick={toggleMenu} className="block py-2 border-b border-gray-100 hover:text-primary transition-colors">Services</Link>
                        <Link href="/products" onClick={toggleMenu} className="block py-2 border-b border-gray-100 hover:text-primary transition-colors">Products</Link>
                        <Link href="/portfolio" onClick={toggleMenu} className="block py-2 border-b border-gray-100 hover:text-primary transition-colors">Portfolio</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
