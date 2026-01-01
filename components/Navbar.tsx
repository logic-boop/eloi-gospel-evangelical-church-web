"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Sermons', href: '/sermons' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[9999] transition-all duration-500 px-6 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-8 py-4 rounded-[2rem] border shadow-2xl ${scrolled ? 'bg-white/90 backdrop-blur-md border-gray-100' : 'bg-white/10 backdrop-blur-sm border-white/20'
                }`}>

                {/* LOGO */}
                <Link href="/" className="group">
                    <div className="flex flex-col">
                        <span className={`font-black text-xl tracking-tighter leading-none transition-colors ${scrolled ? 'text-wine' : 'text-white'}`}>ELOI GOSPEL</span>
                        <span className="text-sky font-bold text-[8px] tracking-[0.4em] uppercase">Evangelical Church</span>
                    </div>
                </Link>

                {/* LINKS */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-sky ${pathname === link.href
                                    ? 'text-sky'
                                    : (scrolled ? 'text-wine/60' : 'text-white/70')
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <Link href="/plan-your-visit">
                    <button className="bg-sky text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-wine transition-all shadow-lg active:scale-95">
                        Join Us
                    </button>
                </Link>
            </div>
        </nav>
    );
}