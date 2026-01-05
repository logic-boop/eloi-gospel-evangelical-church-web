"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ApostleDetailedBio() {
    return (
        <main className="bg-[#050505] text-white selection:bg-[#C5A059] selection:text-black min-h-screen">

            {/* --- HERO: THE ICONIC PORTRAIT --- */}
            <section className="relative h-[90vh] flex items-end pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974" // Actual Apostle photo
                        alt="Apostle (Dr.) Moses Famose"
                        fill
                        className="object-cover grayscale opacity-40 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                </div>

                <div className="relative z-10 max-w-[1800px] mx-auto w-full">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[#C5A059] font-black text-xs tracking-[1em] uppercase mb-8 block"
                    >
                        The Commissioned Voice
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[12vw] md:text-[9vw] font-black uppercase tracking-tighter leading-[0.8]"
                    >
                        APOSTLE <br /> <span className="text-transparent border-b-2 border-white/10 italic">MOSES FAMOSE</span>
                    </motion.h1>
                </div>
            </section>

            {/* --- THE BIOGRAPHY & STORIES --- */}
            <section className="py-40 px-6 max-w-5xl mx-auto space-y-32">
                <div className="space-y-12">
                    <h2 className="text-[#C5A059] font-black text-sm tracking-[0.5em] uppercase border-l-2 border-[#C5A059] pl-8">The Genesis & Call</h2>
                    <div className="space-y-8 text-2xl md:text-3xl text-white/70 font-light leading-snug italic">
                        <p>
                            Apostle (Dr.) Moses Babatunde Olubode Famose is not just a leader; he is a man whose life was interrupted by a divine mandate to <span className="text-white font-bold">"Awaken the Sleeping Giants."</span>
                        </p>
                        <p>
                            With a PhD in Theology and a heavy prophetic burden, he has dedicated over three decades to the work of the ministry, establishing Eloi Gospel Evangelical Church as a beacon of fire and excellence.
                        </p>
                    </div>
                </div>

                {/* --- MISSIONS SECTION --- */}
                <div className="space-y-20 pt-20 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-baseline gap-8">
                        <h2 className="text-5xl font-black uppercase tracking-tighter">Missionary <span className="text-[#C5A059] italic">Impact</span></h2>
                        <p className="text-white/30 font-mono text-xs uppercase tracking-widest">Global Archives // 1996 - 2026</p>
                    </div>

                    <div className="grid grid-cols-1 gap-16 text-white/50 text-xl font-light leading-relaxed">
                        <p>
                            His missions have taken him across the rugged terrains of Africa to the sophisticated boardrooms of Europe and North America. Under his leadership, the church has established countless mission outposts, focusing on both spiritual revival and practical human dignity.
                        </p>
                        <p>
                            Beyond the pulpit, his role as the Africa Continent Representative for CAFO has allowed him to champion the cause of millions of vulnerable children, bridging the gap between apostolic fervor and global leadership.
                        </p>
                    </div>
                </div>

                {/* --- CTA TO GALLERY (THE LINK YOU REQUESTED) --- */}
                <div className="pt-32">
                    <Link href="/gallery">
                        <motion.div
                            whileHover={{ scale: 0.98 }}
                            className="bg-[#0A0A0A] p-16 rounded-sm border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-700 group cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
                                <div className="space-y-4">
                                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter group-hover:text-[#C5A059] transition-colors">
                                        View Mission <br /> Gallery
                                    </h3>
                                    <p className="text-white/30 text-sm tracking-widest uppercase">Witness the visual testimony of his works</p>
                                </div>
                                <div className="w-24 h-24 rounded-full border border-[#C5A059] flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-black transition-all text-3xl">
                                    →
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </section>

            {/* --- FINAL QUOTE --- */}
            <section className="py-40 bg-[#080808] text-center border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <span className="text-4xl md:text-6xl font-light italic text-white/20">"Our mission is simple: to make the supernatural natural in the lives of men."</span>
                    <p className="mt-12 text-[#C5A059] font-black uppercase tracking-[0.5em] text-xs">— Apostle (Dr.) Moses Famose</p>
                </div>
            </section>
        </main>
    );
}