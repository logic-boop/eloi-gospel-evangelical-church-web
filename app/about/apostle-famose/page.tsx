"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ApostleBiography() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, []);

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505] selection:bg-sky selection:text-white overflow-x-hidden`}>

            {/* --- 1. THE MONOLITH HERO: APOSTLE.JPEG --- */}
            <section className="relative h-screen w-full flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/apostle.jpeg"
                        alt="Apostle (Dr.) Moses Babatunde Olubode Famose"
                        fill
                        className="object-cover object-top grayscale-[20%] brightness-[0.7] scale-105"
                        priority
                    />
                    {/* Cinematic Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10" />
                </div>

                <div className="relative z-20 w-full max-w-[1800px] px-8 pb-20 md:pb-32">
                    <motion.div
                        initial={{ opacity: 0, letterSpacing: "0.5em" }}
                        animate={{ opacity: 1, letterSpacing: "1.2em" }}
                        className="text-sky font-black uppercase text-[10px] md:text-xs mb-8"
                    >
                        The Apostolic Mandate
                    </motion.div>
                    <h1 className="reveal reveal-up text-[12vw] md:text-[10vw] font-black text-white uppercase tracking-tighter leading-[0.75] mb-6">
                        MOSES <br /> <span className="text-transparent border-b-8 border-wine italic">FAMOSE.</span>
                    </h1>
                    <p className="text-white/40 text-sm font-black uppercase tracking-[0.6em] max-w-md">
                        Apostle (Dr.) Babatunde Olubode Famose
                    </p>
                </div>
            </section>

            {/* --- 2. THE PHILOSOPHY OF POWER --- */}
            <section className="py-40 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                <div className="reveal reveal-left space-y-12">
                    <div className="space-y-4">
                        <span className="text-wine font-black text-xs uppercase tracking-[0.5em]">The Calling</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">A DIVINE <br /> COMMISSION.</h2>
                    </div>
                    <div className="space-y-10 text-white/60 text-xl font-light italic leading-relaxed border-l-4 border-sky pl-12 py-4">
                        <p>
                            Apostle (Dr.) Moses Famose is a chosen vessel of restoration, carrying a mandate to ignite the fire of the Holy Spirit across the nations.
                        </p>
                        <p>
                            His ministry is defined by a surgical prophetic precision and a deep-seated burden for the total man—spirit, soul, and body.
                        </p>
                    </div>
                </div>

                <div className="reveal reveal-right relative aspect-[3/4] group">
                    <div className="absolute -inset-4 border border-wine/30 translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />
                    <div className="relative h-full w-full overflow-hidden bg-wine/10">
                        <Image
                            src="/apostle.jpeg"
                            alt="The Mantle"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]"
                        />
                    </div>
                </div>
            </section>

            {/* --- 3. THE GLOBAL MANDATE PILLARS --- */}
            <section className="py-40 bg-[#080808] border-y border-white/5">
                <div className="max-w-[1800px] mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                        <h2 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">THE <br /> <span className="text-wine">MANTLE.</span></h2>
                        <div className="max-w-md text-right">
                            <p className="text-white/20 italic font-light mb-4 text-xl">"Restoring dignity to humanity through the power of the Gospel."</p>
                            <div className="h-px w-32 bg-sky ml-auto" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
                        {[
                            { title: "Prophetic Explosion", desc: "Awakening territories through the precision of the Word.", accent: "sky" },
                            { title: "CINO Mission", desc: "The apostolic heartbeat for the fatherless and the vulnerable.", accent: "wine" },
                            { title: "CAFO Leadership", desc: "Governing the administrative structures of the global move.", accent: "white" },
                            { title: "LCJE Circle", desc: "Equipping commanders for the end-time harvest.", accent: "sky" }
                        ].map((pillar, i) => (
                            <div key={i} className="reveal reveal-up bg-[#0A0A0A] p-16 hover:bg-[#111] transition-all duration-700 group">
                                <span className={`text-${pillar.accent} font-black text-xs uppercase tracking-widest mb-10 block`}>Pillar 0{i + 1}</span>
                                <h4 className="text-2xl font-black text-white uppercase mb-6 group-hover:text-sky transition-colors">{pillar.title}</h4>
                                <p className="text-white/40 font-light italic leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. THE COVENANT OF THE 5% SHARE --- */}
            <section className="py-60 px-8 relative overflow-hidden bg-wine">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10">
                    <h2 className="reveal reveal-up text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8]">
                        THE 5% <br /> <span className="text-sky italic">COVENANT.</span>
                    </h2>
                    <p className="reveal reveal-up text-white/80 text-2xl md:text-3xl font-light italic leading-relaxed max-w-3xl mx-auto">
                        "Your partnership is not a donation; it is a spiritual merger. As you sow into this mandate, the grace on the Apostle becomes the grace on your house."
                    </p>
                    <div className="reveal reveal-up flex justify-center pt-20">
                        <div className="w-px h-40 bg-white opacity-40" />
                    </div>
                </div>
            </section>

            {/* --- 5. THE LEGACY TIMELINE --- */}
            <section className="py-40 px-8 max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    <div className="reveal reveal-up space-y-6">
                        <h5 className="text-sky font-black text-4xl uppercase tracking-tighter">THE VISION</h5>
                        <p className="text-white/40 font-light italic text-lg">To see a generation restored and walking in the fullness of their prophetic identity, governed by the principles of the Kingdom.</p>
                    </div>
                    <div className="reveal reveal-up delay-100 space-y-6">
                        <h5 className="text-wine font-black text-4xl uppercase tracking-tighter">THE VOICE</h5>
                        <p className="text-white/40 font-light italic text-lg">Sounding the trumpet of restoration across Africa, Europe, and the Americas, raising an army of believers.</p>
                    </div>
                    <div className="reveal reveal-up delay-200 space-y-6">
                        <h5 className="text-white font-black text-4xl uppercase tracking-tighter">THE VICTORY</h5>
                        <p className="text-white/40 font-light italic text-lg">Thousands of lives impacted through CINO missions, prophetic crusades, and global leadership summits.</p>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .reveal { opacity: 0; transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(80px); }
                .reveal-left { transform: translateX(-80px); }
                .reveal-right { transform: translateX(80px); }
                .reveal-visible { opacity: 1; transform: translate(0); }
                ::-webkit-scrollbar { width: 3px; }
                ::-webkit-scrollbar-track { background: #050505; }
                ::-webkit-scrollbar-thumb { background: #721422; }
            `}</style>
        </main>
    );
}