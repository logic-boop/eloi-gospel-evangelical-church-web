"use client";

import React, { useEffect, useState, useMemo, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

// --- I. CATEGORY DATA ---
const CATEGORIES = [
    { id: 'all', title: 'THE TOTALITY', subtitle: 'Archive of the Mandate', cover: '/totality.jpeg' },
    { id: 'cafo', title: 'CAFO', subtitle: 'Apostolic Family Office', cover: '/cafo.jpeg' },
    { id: 'lcje', title: 'LCJE', subtitle: 'Leadership Circle', cover: '/lcje.jpeg' },
    { id: 'cino', title: 'CINO', subtitle: 'The Fatherless Mandate', cover: '/cino.jpeg' },
    { id: 'weh', title: 'WEH', subtitle: 'Worship Encounter Hub', cover: '/totality1.jpeg' },
    { id: 'convention', title: 'CONVENTION', subtitle: 'Global Convocation', cover: '/totality5.jpeg' },
];

// --- II. IMAGE DATABASE ---
const GALLERY_ITEMS = [
    ...Array.from({ length: 21 }, (_, i) => ({
        id: `all-${i}`,
        cat: 'all',
        src: i === 12 ? '/totality.12jpeg' : `/totality${i === 0 ? '' : i}.jpeg`,
        title: `Mandate Moment ${i}`
    })),
    ...Array.from({ length: 9 }, (_, i) => ({
        id: `cafo-${i}`,
        cat: 'cafo',
        src: `/cafo${i === 0 ? '' : i}.jpeg`,
        title: `CAFO Outreach ${i}`
    })),
    { id: 'lcje-0', cat: 'lcje', src: '/lcje.jpeg', title: 'Leadership Encounter' },
    { id: 'lcje-1', cat: 'lcje', src: '/lcje1.jpeg', title: 'Apostolic Circle' },
    { id: 'cino-0', cat: 'cino', src: '/cino.jpeg', title: 'Mission Outreach' },
    { id: 'cino-1', cat: 'cino', src: '/cino1.jpeg', title: 'Fatherless No More' },
    { id: 'cino-2', cat: 'cino', src: '/cino2.jpeg', title: 'Territory Restoration' },
];

export default function GalleryPage() {
    const [selectedCat, setSelectedCat] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const scrollRef = useRef(null);

    // Smooth scroll progress for header parallax
    const { scrollYProgress } = useScroll();
    const scaleTitle = useSpring(1, { stiffness: 100, damping: 30 });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const displayImages = useMemo(() => {
        return GALLERY_ITEMS.filter(img => img.cat === selectedCat);
    }, [selectedCat]);

    return (
        <main className={`bg-[#050505] min-h-screen text-white selection:bg-[#C5A059] transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>

            {/* --- 1. IMPERIAL HEADER --- */}
            <section className="relative pt-44 pb-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-[#C5A059]"></div>
                        <span className="text-[#C5A059] font-black uppercase tracking-[0.6em] text-[10px] md:text-xs">The Apostolic Archive</span>
                    </motion.div>

                    <h1 className="text-7xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-8">
                        VISUAL <br /> <span className="italic text-transparent border-b-[6px] md:border-b-[15px] border-[#C5A059]">HISTORY.</span>
                    </h1>

                    <p className="max-w-xl text-white/40 text-lg md:text-xl font-light italic leading-relaxed">
                        A definitive collection of moments from the One in a Million mandate, spanning global missions and local impact.
                    </p>
                </div>

                {/* Background Decorative Text */}
                <div className="absolute top-20 right-0 opacity-[0.03] select-none pointer-events-none">
                    <h2 className="text-[25vw] font-black uppercase leading-none">MANDATE</h2>
                </div>
            </section>

            {/* --- 2. CATEGORY ARCHITECTURE --- */}
            <section className="px-4 md:px-10 pb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CATEGORIES.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setSelectedCat(cat.id)}
                            className="relative aspect-[4/5] md:aspect-[3/4] group cursor-pointer overflow-hidden rounded-2xl bg-[#111]"
                        >
                            {/* Clear Image by Default */}
                            <Image
                                src={cat.cover}
                                alt={cat.title}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                                priority={idx < 3}
                            />

                            {/* Permanent Overlay for Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

                            {/* Label */}
                            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                                <span className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] mb-2">Explore Archive</span>
                                <h3 className="text-4xl font-black uppercase tracking-tighter mb-2 group-hover:text-[#C5A059] transition-colors">{cat.title}</h3>
                                <p className="text-white/60 text-xs font-light italic tracking-widest uppercase">{cat.subtitle}</p>

                                <div className="mt-6 w-12 h-[2px] bg-[#C5A059] group-hover:w-full transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- 3. IMMERSIVE VAULT OVERLAY --- */}
            <AnimatePresence>
                {selectedCat && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 35, stiffness: 250 }}
                        className="fixed inset-0 z-[100] bg-black overflow-y-auto"
                    >
                        {/* Vault Header */}
                        <div className="sticky top-0 z-[110] bg-black/80 backdrop-blur-2xl border-b border-white/5 px-6 md:px-12 py-8 flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">
                                    {selectedCat} <span className="text-[#C5A059]">Vault</span>
                                </h2>
                            </div>
                            <button
                                onClick={() => setSelectedCat(null)}
                                className="px-6 py-3 border border-[#C5A059]/30 text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] rounded-full hover:bg-[#C5A059] hover:text-black transition-all"
                            >
                                [ Back to Archives ]
                            </button>
                        </div>

                        {/* High-Definition Masonry Grid */}
                        <div className="max-w-[1800px] mx-auto px-6 py-20">
                            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                                {displayImages.map((img, i) => (
                                    <motion.div
                                        key={img.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="relative group rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/5"
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.title}
                                            width={1000}
                                            height={1500}
                                            className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />

                                        {/* Mobile-Friendly Label */}
                                        <div className="p-6 bg-gradient-to-t from-black to-transparent md:absolute md:inset-0 md:flex md:items-end md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-[#C5A059]">
                                                {img.title}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Vault Footer */}
                        <div className="py-20 text-center border-t border-white/5">
                            <p className="text-white/20 uppercase tracking-[0.5em] text-[10px] font-black">End of Archive Section</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- 4. THE CALL TO MANDATE --- */}
            <section className="py-40 bg-[#0A192F] px-6 text-center border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.85]">
                        BECOME PART OF THE <br /> <span className="text-[#C5A059]">TESTIMONY.</span>
                    </h2>
                    <div className="w-24 h-[1px] bg-[#C5A059] mx-auto mb-10" />
                    <button className="px-12 py-5 bg-[#C5A059] text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                        Partner With Us
                    </button>
                </div>
            </section>

            <style jsx global>{`
                ::-webkit-scrollbar { width: 4px; }
                ::-webkit-scrollbar-track { background: #050505; }
                ::-webkit-scrollbar-thumb { background: #C5A059; border-radius: 20px; }
                .outline-text { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }
            `}</style>
        </main>
    );
}