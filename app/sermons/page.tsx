"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// 1. DATA STRUCTURE: Detailed & Scalable
interface Sermon {
    id: string;
    title: string;
    speaker: string;
    series: string;
    date: string;
    duration: string;
    description: string;
    thumbnail: string;
    videoUrl: string; // Link to YouTube/Vimeo/S3
    tags: string[];
}

export default function SermonsPage() {
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);
    const [mounted, setMounted] = useState(false);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const categories = ['ALL', 'PROPHETIC', 'KINGDOM ECONOMY', 'FAITH', 'DOMINION'];

    const sermons: Sermon[] = [
        {
            id: '1',
            title: "THE FIRE SHALL NOT GO OUT",
            speaker: "Apostle Famose",
            series: "ALTAR OF PRAYER",
            date: "JAN 04, 2026",
            duration: "58:20",
            description: "A profound teaching on maintaining the spiritual intensity required for the end-time harvest. This message explores the ancient secrets of the burning altar.",
            thumbnail: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=1972",
            videoUrl: "#",
            tags: ["FIRE", "PRAYER", "REVIVAL"]
        },
        {
            id: '2',
            title: "UNCOMMON DOMINION",
            speaker: "Apostle Famose",
            series: "KINGDOM AUTHORITY",
            date: "DEC 28, 2025",
            duration: "42:15",
            description: "Understanding your legal standing in the spirit realm and how to enforce victory in every area of your life.",
            thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073",
            videoUrl: "#",
            tags: ["AUTHORITY", "DOMINION"]
        },
        {
            id: '3',
            title: "THE ECONOMY OF ZION",
            speaker: "Pastor Paul LeFavour",
            series: "FINANCIAL GRACE",
            date: "DEC 21, 2025",
            duration: "1:05:40",
            description: "Operating above the global systems. Learning the covenant keys that open the windows of heaven.",
            thumbnail: "https://images.unsplash.com/photo-1518107616985-bd48230d3b20?q=80&w=2070",
            videoUrl: "#",
            tags: ["WEALTH", "COVENANT"]
        },
        // Add more sermon objects as needed...
    ];

    const filteredSermons = activeFilter === 'ALL'
        ? sermons
        : sermons.filter(s => s.tags.includes(activeFilter) || s.series.includes(activeFilter));

    if (!mounted) return null;

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#C5A059] selection:text-black pb-40">

            {/* --- 1. CINEMATIC FEATURED HERO --- */}
            <motion.section
                style={{ opacity: heroOpacity }}
                className="relative h-[85vh] flex items-center justify-center overflow-hidden"
            >
                <Image
                    src={sermons[0].thumbnail}
                    alt="Featured Sermon"
                    fill
                    className="object-cover opacity-40 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />

                <div className="relative z-10 max-w-7xl px-6 w-full mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#C5A059] font-black text-[10px] tracking-[0.8em] uppercase mb-6 block">Latest Transmission</span>
                        <h1 className="text-[10vw] md:text-[7vw] font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            {sermons[0].title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-8 mb-12">
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-[1px] bg-[#C5A059]" />
                                <p className="text-xs font-bold uppercase tracking-widest">{sermons[0].speaker}</p>
                            </div>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{sermons[0].duration} // {sermons[0].date}</p>
                        </div>
                        <button className="group flex items-center gap-6 bg-white text-black px-10 py-5 rounded-full hover:bg-[#C5A059] transition-all duration-500">
                            <span className="font-black text-[10px] uppercase tracking-widest">Watch Now</span>
                            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                        </button>
                    </motion.div>
                </div>
            </motion.section>

            {/* --- 2. INTELLIGENT FILTER BAR --- */}
            <section className="sticky top-0 z-[100] bg-[#050505]/80 backdrop-blur-xl border-y border-white/5 px-6">
                <div className="max-w-7xl mx-auto flex overflow-x-auto scrollbar-hide py-8 gap-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap transition-all ${activeFilter === cat ? 'text-[#C5A059]' : 'text-white/20 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* --- 3. THE SERMON ARCHIVE GRID --- */}
            <section className="px-6 mt-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                    <AnimatePresence mode="popLayout">
                        {filteredSermons.map((sermon, i) => (
                            <motion.div
                                key={sermon.id}
                                layout
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedSermon(sermon)}
                            >
                                <div className="relative aspect-video rounded-sm overflow-hidden mb-8 bg-white/5 border border-white/10">
                                    <Image
                                        src={sermon.thumbnail}
                                        alt={sermon.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 text-[9px] font-black tracking-widest uppercase">
                                        {sermon.duration}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <p className="text-[#C5A059] text-[9px] font-black tracking-[0.4em] uppercase">{sermon.series}</p>
                                        <p className="text-white/20 text-[9px] font-bold">{sermon.date}</p>
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-[#C5A059] transition-colors">
                                        {sermon.title}
                                    </h3>
                                    <p className="text-white/40 text-sm line-clamp-2 italic font-light leading-relaxed">
                                        {sermon.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* --- 4. FULL-SCREEN SERMON PLAYER (MODAL) --- */}
            <AnimatePresence>
                {selectedSermon && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] bg-black flex flex-col"
                    >
                        {/* Modal Header */}
                        <div className="p-8 flex justify-between items-center bg-gradient-to-b from-black to-transparent">
                            <div className="flex items-center gap-6">
                                <span className="text-[#C5A059] font-black text-xs tracking-[0.5em] uppercase">{selectedSermon.series}</span>
                                <span className="w-1 h-1 bg-white/20 rounded-full" />
                                <h2 className="text-xl font-black uppercase tracking-tighter">{selectedSermon.title}</h2>
                            </div>
                            <button
                                onClick={() => setSelectedSermon(null)}
                                className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-8 py-3 hover:bg-white hover:text-black transition-all"
                            >
                                Close Player
                            </button>
                        </div>

                        {/* Video Placeholder Area */}
                        <div className="flex-grow flex items-center justify-center p-6 md:p-20">
                            <div className="relative w-full h-full max-w-6xl aspect-video bg-white/5 rounded-sm overflow-hidden flex items-center justify-center border border-white/10 group">
                                <Image src={selectedSermon.thumbnail} alt="Video" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
                                <div className="relative text-center z-10">
                                    <p className="text-white/40 text-[10px] font-black tracking-[1em] uppercase mb-8">Ready to Stream</p>
                                    <button className="w-32 h-32 bg-[#C5A059] text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                        <svg className="w-10 h-10 fill-current ml-2" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer Info */}
                        <div className="p-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div>
                                <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest mb-2">Preached By</p>
                                <p className="text-2xl font-black uppercase">{selectedSermon.speaker}</p>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest mb-2">Message Description</p>
                                <p className="text-white/60 text-lg italic">{selectedSermon.description}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        main { cursor: crosshair; }
      `}</style>
        </main>
    );
}