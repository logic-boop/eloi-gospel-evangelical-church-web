"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const GALLERY_DATA = [
    { id: 1, category: 'Crusades', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069', title: 'Prophetic Explosion Lagos' },
    { id: 2, category: 'CINO', src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070', title: 'CINO Outreach' },
    { id: 3, category: 'Global', src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070', title: 'Leadership Conference' },
    { id: 4, category: 'Crusades', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070', title: 'Night of Fire' },
    { id: 5, category: 'CINO', src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070', title: 'Fatherless No More' },
    { id: 6, category: 'Global', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069', title: 'International Summit' },
];

export default function MissionGallery() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [filter, setFilter] = useState('All');
    const [selectedImg, setSelectedImg] = useState<any>(null);

    useEffect(() => {
        setIsLoaded(true);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, []);

    const filteredImages = filter === 'All'
        ? GALLERY_DATA
        : GALLERY_DATA.filter(img => img.category === filter);

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505] min-h-screen overflow-x-hidden selection:bg-[#C5A059] selection:text-black`}>

            {/* --- 1. ARCHITECTURAL HERO --- */}
            <section className="relative pt-[25vh] pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" />
                    <Image src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070" fill alt="bg" className="object-cover grayscale opacity-30 scale-110" />
                </div>

                <div className="relative z-20 max-w-[1800px] mx-auto text-center">
                    <motion.h4
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.8em" }}
                        className="reveal text-[#C5A059] font-black uppercase text-[10px] mb-8"
                    >
                        The Visual Testimony
                    </motion.h4>
                    <h1 className="reveal reveal-up delay-100 text-[12vw] md:text-[10vw] font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
                        MISSION <br /> <span className="text-transparent border-b-4 border-white/5 italic">ARCHIVES.</span>
                    </h1>

                    <div className="reveal reveal-up delay-200 flex flex-wrap justify-center gap-12 mt-20 border-t border-white/5 pt-12">
                        {['All', 'Crusades', 'CINO', 'Global'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 relative pb-2 ${filter === cat ? 'text-[#C5A059]' : 'text-white/20 hover:text-white'}`}
                            >
                                {cat}
                                {filter === cat && (
                                    <motion.div layoutId="filterUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A059]" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 2. MASONRY GRID --- */}
            <section className="py-24 px-6 max-w-[1800px] mx-auto">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((img) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={img.id}
                                onClick={() => setSelectedImg(img)}
                                className="reveal reveal-up break-inside-avoid relative group cursor-crosshair overflow-hidden rounded-sm border border-white/5 bg-[#0A0A0A]"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.title}
                                    width={800}
                                    height={1000}
                                    className="w-full h-auto object-cover transition-all duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                                    <p className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[9px] mb-4">Territory: {img.category}</p>
                                    <h3 className="text-white text-4xl font-black uppercase tracking-tighter leading-none">{img.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* --- 3. RETURN LINK --- */}
            <section className="py-40 text-center">
                <Link href="/about/apostle-famose" className="group inline-flex flex-col items-center">
                    <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.8em] group-hover:text-[#C5A059] transition-colors duration-500">Return to the Apostle&apos;s Journey</span>
                    <motion.div
                        animate={{ height: [40, 80, 40] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="w-px bg-[#C5A059] mt-8"
                    />
                </Link>
            </section>

            {/* --- 4. LIGHTBOX --- */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[999] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-6 md:p-20"
                        onClick={() => setSelectedImg(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="relative w-full h-full flex flex-col md:flex-row gap-16 max-w-[1700px]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative flex-[2] h-full rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                                <Image src={selectedImg.src} alt="Lightbox" fill className="object-cover" />
                            </div>

                            <div className="flex-1 flex flex-col justify-center space-y-10">
                                <div className="space-y-4">
                                    <span className="text-[#C5A059] font-black tracking-[0.6em] text-xs uppercase">{selectedImg.category}</span>
                                    <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">{selectedImg.title}</h2>
                                </div>
                                <p className="text-white/40 text-xl font-light italic leading-relaxed border-l border-[#C5A059] pl-8">
                                    A divine moment captured within the global mandate. This archive serves as a permanent witness to the fire on the altar.
                                </p>
                                <button
                                    onClick={() => setSelectedImg(null)}
                                    className="w-fit text-[10px] font-black uppercase tracking-[0.5em] text-white/40 border border-white/10 px-12 py-6 hover:bg-white hover:text-black transition-all"
                                >
                                    Close Archive [X]
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(60px); }
                .reveal-visible { opacity: 1; transform: translate(0); }
            `}</style>
        </main>
    );
}