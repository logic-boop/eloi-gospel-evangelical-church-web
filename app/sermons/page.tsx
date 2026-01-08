"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
        <main className="min-h-screen bg-[#050505] text-white pt-20 pb-40 selection:bg-[#C5A059] overflow-x-hidden">

            {/* --- 1. THE ORACLE HERO (HEADER SAFE & VIBRANT) --- */}
            <section className="px-6 mb-40 max-w-[1800px] mx-auto pt-[20vh]">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-[2px] w-12 bg-[#C5A059]" />
                    <h4 className="text-[#C5A059] font-black uppercase tracking-[0.8em] text-[10px]">Prophetic Archive</h4>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative w-full h-[75vh] rounded-2xl overflow-hidden group cursor-pointer shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5"
                    onClick={() => setSelectedVideo(featured)}
                >
                    <Image
                        src={featured?.thumbnail || ''}
                        alt="Featured Sermon"
                        fill
                        className="object-cover transition-all duration-[3s] group-hover:scale-110"
                        priority
                    />
                    {/* Deep Blue Overlay Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10" />

                    <div className="absolute inset-0 z-20 p-8 md:p-20 flex flex-col justify-end gap-10">
                        <div className="max-w-4xl">
                            <span className="text-white font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block opacity-50">Transmitting Now...</span>
                            <h2 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.75] mb-8">
                                {featured?.title}
                            </h2>
                            <p className="text-white/70 text-xl md:text-3xl font-light italic max-w-2xl border-l-4 border-[#C5A059] pl-10 leading-relaxed">
                                {featured?.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-8 group/btn">
                            <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center group-hover/btn:bg-[#C5A059] group-hover/btn:border-[#C5A059] group-hover/btn:text-[#0A192F] transition-all duration-500 bg-black/40 backdrop-blur-md">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[12px] font-black tracking-[0.5em] uppercase text-[#C5A059]">Access Signal</span>
                                <span className="text-[10px] font-mono uppercase text-white/30">ID: ALPHA-001</span>
                            </div>
                        </div>
                    </div>

                    {/* Scanning Line Effect */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C5A059]/30 z-30 animate-scan pointer-events-none" />
                </motion.div>
            </section>

            {/* --- 2. TRANSMISSION ARCHIVE (DEEP BLUE GRID) --- */}
            <section className="px-6 max-w-[1800px] mx-auto">
                <div className="flex justify-between items-end mb-20 border-b-2 border-white/5 pb-12">
                    <div className="space-y-4">
                        <h3 className="text-5xl font-black uppercase tracking-tighter">THE <span className="text-[#C5A059] italic">ARCHIVE</span></h3>
                        <p className="text-white/30 text-xs font-mono tracking-widest uppercase">Digital Sovereignty • {transmissions.length} Entries Found</p>
                    </div>
                    <div className="hidden md:flex gap-4">
                        {['All', 'Prophetic', 'Finance', 'Warfare'].map((cat) => (
                            <button key={cat} className="px-8 py-3 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                    {transmissions.map((video) => (
                        <motion.div
                            key={video.id}
                            whileHover={{ y: -15 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedVideo(video)}
                        >
                            <div className="relative aspect-[16/10] mb-10 overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#0A192F]/20 group-hover:bg-transparent transition-all duration-500" />
                                <div className="absolute bottom-6 right-6 bg-black/90 backdrop-blur-md px-4 py-2 text-[11px] font-mono text-[#C5A059] border border-[#C5A059]/30">
                                    {video.duration}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-16 h-16 rounded-full bg-[#C5A059] text-[#0A192F] flex items-center justify-center shadow-2xl">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#C5A059] px-4 py-1 border border-[#C5A059]/20 rounded-full">{video.series}</span>
                                    <span className="font-mono text-[10px] text-white/30 uppercase">{video.date}</span>
                                </div>
                                <h4 className="text-4xl font-black uppercase tracking-tighter leading-[0.9] group-hover:text-[#C5A059] transition-colors">{video.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- 3. MODAL (BLACK & GOLD ENCRYPTED) --- */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[3000] bg-[#050505]/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-20"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            className="w-full max-w-7xl aspect-video bg-[#0A192F] relative border border-[#C5A059]/20 shadow-[0_0_100px_rgba(197,160,89,0.1)] rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* VIDEO PLACEHOLDER */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-black">
                                <div className="w-32 h-32 rounded-full border-2 border-[#C5A059] flex items-center justify-center mb-10 group">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#C5A059" className="animate-pulse"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                                <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 text-[#C5A059]">SIGNAL DECRYPTED</h2>
                                <p className="text-white/40 uppercase tracking-[0.6em] text-[12px] mb-12">Origin: King's Worship Center Global</p>

                                <div className="flex gap-6">
                                    <button className="px-12 py-5 bg-[#C5A059] text-[#0A192F] text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all">Play Transmission</button>
                                    <button onClick={() => setSelectedVideo(null)} className="px-12 py-5 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-all">Close Signal</button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                @keyframes scan {
                    0% { top: 0%; }
                    100% { top: 100%; }
                }
                .animate-scan {
                    animation: scan 4s linear infinite;
                }
            `}</style>
        </main>
    );
}