"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Sample Data - Replace with your actual YouTube IDs or Video URLs
const transmissions = [
    {
        id: '1',
        title: 'THE POWER OF THE ANOMALY',
        series: 'One In A Million',
        date: 'Jan 2026',
        duration: '1:12:04',
        thumbnail: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070',
        description: 'Apostle Famose breaks down the prophetic blueprint for those called to stand out in a compromised generation.',
        isFeatured: true
    },
    {
        id: '2',
        title: 'KINGDOM FINANCE & DOMINION',
        series: 'Economic Grace',
        date: 'Dec 2025',
        duration: '58:20',
        thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011',
        description: 'Understanding the laws of wealth within the apostolic mandate.'
    },
    {
        id: '3',
        title: 'THE ART OF INTERCESSION',
        series: 'Atmospheric Command',
        date: 'Nov 2025',
        duration: '1:45:10',
        thumbnail: 'https://images.unsplash.com/photo-1510474640149-16624a9e223c?q=80&w=1920',
        description: 'How to legislate in the spirit realm through concentrated prayer.'
    },
];

export default function SermonsPage() {
    const [mounted, setMounted] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<any>(null);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const featured = transmissions.find(t => t.isFeatured);

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-32 pb-40 selection:bg-[#C5A059]">

            {/* --- 1. FEATURED TRANSMISSION (THE ORACLE) --- */}
            <section className="px-6 mb-32 max-w-[1800px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative w-full h-[70vh] rounded-sm overflow-hidden group cursor-pointer border border-white/5"
                    onClick={() => setSelectedVideo(featured)}
                >
                    <Image
                        src={featured?.thumbnail || ''}
                        alt="Featured Sermon"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-12 w-full flex flex-col md:flex-row justify-between items-end gap-10">
                        <div className="max-w-3xl">
                            <span className="text-[#C5A059] font-black text-[10px] tracking-[1em] uppercase mb-6 block">Latest Transmission</span>
                            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
                                {featured?.title}
                            </h2>
                            <p className="text-white/50 text-xl font-light italic max-w-xl border-l border-[#C5A059] pl-8">
                                {featured?.description}
                            </p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                            <span className="text-[10px] font-black tracking-widest uppercase">Watch Now</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- 2. TRANSMISSION ARCHIVE GRID --- */}
            <section className="px-6 max-w-[1800px] mx-auto">
                <div className="flex justify-between items-baseline mb-16 border-b border-white/5 pb-8">
                    <h3 className="text-3xl font-black uppercase tracking-tighter">THE <span className="text-[#C5A059]">ARCHIVE</span></h3>
                    <p className="text-white/20 font-mono text-[10px] uppercase tracking-widest">Filter by Series ↓</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                    {transmissions.map((video) => (
                        <motion.div
                            key={video.id}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedVideo(video)}
                        >
                            <div className="relative aspect-video mb-8 overflow-hidden rounded-sm border border-white/5">
                                <Image src={video.thumbnail} alt={video.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 text-[10px] font-mono text-[#C5A059]">
                                    {video.duration}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-[9px] font-black tracking-widest uppercase text-[#C5A059]">
                                    <span>{video.series}</span>
                                    <span className="text-white/20">{video.date}</span>
                                </div>
                                <h4 className="text-3xl font-black uppercase tracking-tighter group-hover:text-[#C5A059] transition-colors">{video.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- 3. VIDEO PLAYER MODAL --- */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[3000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-20"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-full max-w-6xl aspect-video bg-[#0A0A0A] relative border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Replace this with an actual iframe for YouTube/Vimeo later */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                                <div className="w-24 h-24 rounded-full border border-[#C5A059] flex items-center justify-center mb-8 animate-pulse">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#C5A059"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">Signal Connecting...</h2>
                                <p className="text-white/30 uppercase tracking-[0.5em] text-[10px]">Transmission: {selectedVideo.title}</p>
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    className="mt-12 text-[10px] font-black uppercase tracking-widest border border-white/10 px-8 py-4 hover:bg-white hover:text-black transition-all"
                                >
                                    Terminate Signal [X]
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}