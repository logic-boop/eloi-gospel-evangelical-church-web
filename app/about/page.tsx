"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505] text-white selection:bg-[#C5A059] selection:text-black`}>

            {/* --- 1. HERO SECTION: THE IMPERIAL IDENTITY --- */}
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 px-6">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1543780332-901b17b203c8?q=80&w=2070"
                        alt="Foundational Vision"
                        fill
                        className="object-cover scale-110"
                        priority
                    />
                </div>

                <div className="relative z-20 text-center max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="reveal inline-block px-8 py-2 border border-[#C5A059]/30 rounded-full mb-12"
                    >
                        <span className="text-[#C5A059] font-black uppercase tracking-[0.8em] text-[10px]">The Mandate // One In A Million</span>
                    </motion.div>
                    <h1 className="reveal reveal-up text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                        THE FIRE <br /> <span className="text-transparent border-b-4 border-[#C5A059] italic">ON THE ALTAR</span>
                    </h1>
                    <p className="reveal reveal-up delay-200 text-xl md:text-3xl text-white/50 font-light max-w-4xl mx-auto italic leading-tight">
                        "Built on a divine encounter, Eloi Gospel Evangelical Church carries a mandate to restore souls and activate destinies across nations."
                    </p>
                </div>
            </section>

            {/* --- 2. THE APOSTOLIC PORTAL: FOUNDER'S PREVIEW --- */}
            <section className="py-40 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div className="reveal reveal-left relative group">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1616409890141-94578e6308ba?q=80&w=1974"
                                alt="Apostle Dr. Moses Babatunde Olubode Famose"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
                        </div>
                        {/* Gold Accent Frame */}
                        <div className="absolute -bottom-6 -right-6 w-64 h-64 border-r-2 border-b-2 border-[#C5A059]/40 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
                    </div>

                    <div className="reveal reveal-right space-y-12">
                        <span className="text-[#C5A059] font-black uppercase tracking-[0.6em] text-xs">The Vision Bearer</span>
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                            APOSTLE (DR.) <br /> <span className="text-white/20 italic">MOSES FAMOSE</span>
                        </h2>

                        <div className="space-y-8 text-white/40 text-xl leading-relaxed font-light italic">
                            <p>
                                A seasoned apostolic voice raised with a distinct prophetic mandate for this generation. His journey is marked by profound divine encounters that shaped the very foundation of Eloi.
                            </p>
                        </div>

                        {/* PREMIUM PORTAL LINK */}
                        <div className="pt-8">
                            <Link href="/about/apostle-famose" className="group flex items-center gap-8">
                                <span className="bg-[#C5A059] text-black px-12 py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] group-hover:bg-white transition-all duration-500 shadow-2xl">
                                    Read more about him
                                </span>
                                <div className="w-12 h-[1px] bg-[#C5A059] group-hover:w-20 transition-all duration-500"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. THE CORE PILLARS --- */}
            <section className="py-40 bg-[#050505] px-6">
                <div className="max-w-[1800px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                        <div className="max-w-2xl">
                            <h4 className="reveal reveal-up text-[#C5A059] font-black uppercase tracking-[0.6em] text-xs mb-8">Our Core Identity</h4>
                            <h2 className="reveal reveal-up delay-100 text-6xl md:text-[7vw] font-black uppercase tracking-tighter leading-none">
                                ONE IN A <br /> <span className="text-white/10 italic">MILLION</span>
                            </h2>
                        </div>
                        <p className="text-white/30 text-xl italic max-w-sm border-l border-[#C5A059] pl-8">
                            We are not just a congregation; we are a specialized unit of the Kingdom.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Prophetic Activation", desc: "Unlocking the divine destiny within every believer through revelatory teaching and personal impartation.", num: "01" },
                            { title: "Soul Restoration", desc: "Leading individuals back to God through genuine encounters with the Holy Spirit and biblical truth.", num: "02" },
                            { title: "Global Impact", desc: "Extending God's kingdom beyond borders, championing the cause of the vulnerable with excellence.", num: "03" }
                        ].map((mandate, i) => (
                            <div key={i} className="reveal reveal-up group bg-[#0A0A0A] p-16 rounded-sm border border-white/5 hover:border-[#C5A059]/30 transition-all duration-700">
                                <span className="text-[#C5A059] font-mono text-xl mb-12 block group-hover:translate-x-2 transition-transform">{mandate.num}</span>
                                <h4 className="text-2xl font-black uppercase tracking-tighter mb-6">{mandate.title}</h4>
                                <p className="text-white/40 font-light leading-relaxed italic">{mandate.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. THE UNSHAKABLE PILLARS (IMPERIAL ACCORDION) --- */}
            <section className="py-40 bg-[#080808] px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
                    <div className="reveal reveal-left sticky top-40">
                        <span className="text-[#C5A059] font-black uppercase tracking-[0.5em] text-xs mb-8 block">The Foundation</span>
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
                            WHAT WE <br /> <span className="text-[#C5A059]">BELIEVE</span>
                        </h2>
                        <p className="text-white/40 text-xl leading-relaxed font-light italic">
                            Our faith is rooted in the unchanging Word of God, leading us to a dynamic experience of His presence.
                        </p>
                    </div>
                    <div className="reveal reveal-right space-y-4">
                        {[
                            { title: "The Authority of Scripture", content: "The Bible is the inspired, infallible Word of God, our final authority in faith and life." },
                            { title: "The Triune God", content: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit." },
                            { title: "Salvation Through Christ", content: "Salvation is by grace through faith in Jesus Christ alone, our Eternal Redeemer." },
                            { title: "The Power of the Holy Spirit", content: "We believe in the present-day operation of the Holy Spirit, empowering believers." },
                            { title: "The Blessed Hope", content: "We believe in the literal return of Jesus Christ to establish His eternal kingdom." }
                        ].map((item, i) => (
                            <details key={i} className="group bg-[#0A0A0A] p-10 border border-white/5 cursor-crosshair transition-all duration-500">
                                <summary className="flex justify-between items-center font-black text-white text-xl uppercase tracking-tighter group-hover:text-[#C5A059] transition-colors">
                                    {item.title}
                                    <span className="text-[#C5A059] group-open:rotate-45 transition-transform duration-500">+</span>
                                </summary>
                                <p className="mt-8 text-white/40 text-lg leading-relaxed italic font-light border-t border-white/5 pt-8">{item.content}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 5. THE GLOBAL IMPACT --- */}
            <section className="py-40 bg-[#050505] px-6">
                <div className="max-w-[1800px] mx-auto">
                    <div className="flex justify-between items-baseline mb-32 border-b border-white/5 pb-12">
                        <h2 className="reveal reveal-up text-5xl md:text-[8vw] font-black uppercase tracking-tighter leading-none">
                            IMPACT <span className="text-white/10 italic">FOOTPRINTS</span>
                        </h2>
                        <Link href="/gallery" className="text-[#C5A059] font-black text-[10px] tracking-[0.4em] uppercase hover:text-white transition-colors">View Mission Archive →</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Christian Children's Home", desc: "Providing holistic care through CINO, directly overseen by the Apostle.", img: "https://images.unsplash.com/photo-1544272898-3563964f434c?q=80&w=2070" },
                            { title: "Global Leadership", desc: "Apostle Famose representing Africa at CAFO conferences, shaping policy for orphan care.", img: "https://images.unsplash.com/photo-1531545514256-d18f5358079a?q=80&w=2070" },
                            { title: "Apostolic Revival", desc: "Weekly outreaches bringing the fire of revival and practical support to communities.", img: "https://images.unsplash.com/photo-1523961129506-6df798e4d2a9?q=80&w=2070" }
                        ].map((impact, i) => (
                            <div key={i} className="reveal reveal-up group relative aspect-square overflow-hidden rounded-sm border border-white/5">
                                <Image src={impact.img} alt={impact.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute bottom-10 left-10 right-10">
                                    <h5 className="text-white font-black uppercase tracking-tighter text-3xl mb-4 leading-none">{impact.title}</h5>
                                    <p className="text-white/50 text-sm font-light leading-relaxed italic opacity-0 group-hover:opacity-100 transition-opacity duration-700">{impact.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 6. CALL TO ACTION --- */}
            <section className="py-60 bg-[#0A0A0A] px-6 text-center border-t border-white/5">
                <div className="max-w-5xl mx-auto relative z-10">
                    <h2 className="reveal reveal-up text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-16">
                        READY TO <br /> <span className="text-transparent border-b-2 border-[#C5A059] italic">ENCOUNTER?</span>
                    </h2>
                    <div className="reveal reveal-up delay-200 flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Link href="/plan-your-visit" className="bg-white text-black px-16 py-8 rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:bg-[#C5A059] transition-all duration-500 shadow-2xl">
                            Plan Your Visit
                        </Link>
                        <Link href="/contact" className="text-white/40 font-black uppercase tracking-[0.4em] text-[10px] hover:text-[#C5A059] transition-colors">
                            Contact The Archive
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(60px); }
                .reveal-left { transform: translateX(-60px); }
                .reveal-right { transform: translateX(60px); }
                .reveal-visible { opacity: 1; transform: translate(0); }
                .delay-100 { transition-delay: 100ms; }
                .delay-200 { transition-delay: 200ms; }
            `}</style>
        </main>
    );
}