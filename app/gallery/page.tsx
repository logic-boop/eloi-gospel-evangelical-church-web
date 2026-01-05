"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
    id: string;
    src: string;
    category: string;
    title: string;
    size: 'large' | 'medium' | 'small'; // For asymmetrical grid
}

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const categories = ['ALL', 'WORSHIP', 'MISSIONS', 'EVENTS', 'COMMUNITY'];

    const galleryItems: GalleryItem[] = [
        { id: '1', src: 'https://images.unsplash.com/photo-1543360253-90d297a7027c?q=80&w=2070', category: 'WORSHIP', title: 'THE REVIVAL', size: 'large' },
        { id: '2', src: 'https://images.unsplash.com/photo-1510474640149-16624a9e223c?q=80&w=1920', category: 'MISSIONS', title: 'BEYOND BORDERS', size: 'small' },
        { id: '3', src: 'https://images.unsplash.com/photo-1628170272212-32a874051a82?q=80&w=2070', category: 'COMMUNITY', title: 'IMPACT DAY', size: 'medium' },
        { id: '4', src: 'https://images.unsplash.com/photo-1579787355208-8f85f858189c?q=80&w=2070', category: 'EVENTS', title: 'YOUTH NIGHT', size: 'medium' },
        { id: '5', src: 'https://images.unsplash.com/photo-1601618037042-4913f0240d9d?q=80&w=2070', category: 'WORSHIP', title: 'DIVINE ENCOUNTER', size: 'small' },
        { id: '6', src: 'https://images.unsplash.com/photo-1610410636838-8c54c3c3a9f0?q=80&w=1935', category: 'WORSHIP', title: 'THE WORD', size: 'large' },
    ];

    const filteredItems = activeFilter === 'ALL'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    if (!mounted) return null;

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-40 pb-32 overflow-x-hidden">

            {/* --- HERO: BOLD & MINIMAL --- */}
            <section className="px-6 mb-32 relative">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-baseline justify-between">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-8 md:mb-0"
                    >
                        THE <br /> <span className="text-[#C5A059] italic">ARCHIVE</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-right max-w-xs"
                    >
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C5A059] mb-4">Visual Testimony</p>
                        <p className="text-white/40 text-sm leading-relaxed italic">Documenting the supernatural movement of the Holy Spirit across the globe.</p>
                    </motion.div>
                </div>
            </section>

            {/* --- FILTER BAR: UNDERSTATED LUXURY --- */}
            <section className="px-6 mb-24">
                <div className="max-w-7xl mx-auto flex flex-wrap gap-x-12 gap-y-6 border-b border-white/5 pb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`text-[11px] font-black uppercase tracking-[0.4em] transition-all relative py-2 ${activeFilter === cat ? 'text-[#C5A059]' : 'text-white/20 hover:text-white'
                                }`}
                        >
                            {cat}
                            {activeFilter === cat && (
                                <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059]" />
                            )}
                        </button>
                    ))}
                </div>
            </section>

            {/* --- ASYMMETRICAL GRID: THE ART GALLERY --- */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                                    onClick={() => setSelectedImage(item)}
                                    className="relative break-inside-avoid group cursor-none"
                                >
                                    <div className="relative overflow-hidden rounded-sm bg-white/5 grayscale group-hover:grayscale-0 transition-all duration-1000 border border-white/5">
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            width={800} height={1000}
                                            className="w-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                        />

                                        {/* Hover Info */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                            <p className="text-[#C5A059] text-[9px] font-black uppercase tracking-[0.3em] mb-2">{item.category}</p>
                                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{item.title}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* --- PREMIUM LIGHTBOX: THE SHOWCASE --- */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12 overflow-hidden"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="relative w-full h-full flex flex-col md:flex-row gap-12 max-w-[1800px]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative flex-grow h-full overflow-hidden rounded-sm">
                                <Image src={selectedImage.src} alt={selectedImage.title} fill className="object-cover" />
                            </div>

                            <div className="md:w-1/3 flex flex-col justify-center space-y-12">
                                <div>
                                    <span className="text-[#C5A059] font-black text-xs uppercase tracking-[0.6em]">{selectedImage.category}</span>
                                    <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mt-4">{selectedImage.title}</h2>
                                </div>
                                <p className="text-white/40 text-lg leading-relaxed font-light italic">Captured during a moment of divine visitation. This archive serves as a permanent testimony of God's power in our generation.</p>

                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="w-fit px-12 py-5 bg-white text-[#050505] rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#C5A059] transition-colors"
                                >
                                    Close View
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
        main { cursor: crosshair; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #C5A059; }
      `}</style>
        </main>
    );
}