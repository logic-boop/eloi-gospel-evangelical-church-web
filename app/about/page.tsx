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
        /* Selection color updated to Gold */
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505] text-white selection:bg-[#C5A059] selection:text-[#0A192F]`}>

            {/* --- 1. HERO SECTION: DEEP BLUE & GOLD MANDATE --- */}
            {/* bg-wine changed to bg-[#0A192F] */}
            <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden pt-32 px-6 bg-[#0A192F]">
                <div className="absolute inset-0 z-0 opacity-40">
                    {/* Gradient updated from wine to deep blue */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-transparent to-[#050505] z-10"></div>
                    <Image
                        src="/apostle.jpeg"
                        alt="Apostolic Mandate"
                        fill
                        className="object-cover object-top scale-105 grayscale"
                        priority
                    />
                </div>

                <div className="relative z-20 text-center max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="reveal inline-block px-8 py-2 border border-[#C5A059]/50 bg-black/40 backdrop-blur-md rounded-full mb-12"
                    >
                        <span className="text-[#C5A059] font-black uppercase tracking-[0.8em] text-[10px]">Apostolic Oversight // The Set Man</span>
                    </motion.div>
                    <h1 className="reveal reveal-up text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                        GLOBAL <br /> <span className="text-transparent border-b-4 border-[#C5A059] italic">RESTORATION.</span>
                    </h1>
                    <p className="reveal reveal-up delay-200 text-xl md:text-3xl text-white/80 font-light max-w-4xl mx-auto italic leading-tight">
                        "The story of a man, a mandate, and the millions called into a covenant of shared destiny."
                    </p>
                </div>
            </section>

            {/* --- 2. THE PRESIDENTIAL PROFILE --- */}
            <section className="py-40 px-6 bg-[#050505] border-y border-white/5 relative">
                <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">

                    <div className="reveal reveal-left relative group">
                        {/* Border-wine changed to border-[#0A192F], Shadow updated to Deep Blue */}
                        <div className="relative aspect-[3/4] overflow-hidden border-2 border-[#0A192F] shadow-[0_0_50px_rgba(10,25,47,0.3)]">
                            <Image
                                src="/apostle.jpeg"
                                alt="Apostle (Dr.) Moses Babatunde Olubode Famose"
                                fill
                                className="object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105"
                            />
                        </div>
                        {/* Imperial Badge: bg-wine to bg-[#0A192F] */}
                        <div className="absolute -top-10 -left-10 bg-[#0A192F] p-10 hidden md:block border border-[#C5A059]/30">
                            <p className="text-[#C5A059] font-black uppercase tracking-widest text-[9px]">President of CINO</p>
                        </div>
                    </div>

                    <div className="reveal reveal-right space-y-12">
                        {/* text-wine to text-[#C5A059] (Gold) */}
                        <span className="text-[#C5A059] font-black uppercase tracking-[0.6em] text-xs">The Set Man</span>
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                            APOSTLE (DR.) <br /> <span className="text-[#C5A059] italic">MOSES FAMOSE</span>
                        </h2>

                        {/* border-wine to border-[#C5A059] (Gold) */}
                        <div className="space-y-8 text-white/50 text-xl leading-relaxed font-light italic border-l-2 border-[#C5A059] pl-10">
                            <p>
                                Apostle (Dr.) Moses Babatunde Olubode Famose is God&apos;s specially anointed man, carrying a multi-faceted mandate as the **President of CINO** (Children In Need Organization).
                            </p>
                            <p>
                                His mission transcends the pulpit, integrating the spiritual fire of **WEH** (Worship Encounter Hub) with the administrative excellence of **CAFO** (Christian Adoption & Family Office) and the leadership architecture of **LCJE** (Leadership Circle).
                            </p>
                        </div>

                        {/* PREMIUM BIOGRAPHY LINK */}
                        <div className="pt-8">
                            <Link href="/about/apostle-famose" className="group flex items-center gap-8">
                                {/* bg-wine to bg-[#0A192F] */}
                                <span className="bg-[#0A192F] text-white px-12 py-6 font-black uppercase tracking-[0.3em] text-[10px] group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-500 border border-white/5">
                                    Read Full Biography
                                </span>
                                <div className="w-12 h-[1px] bg-[#C5A059] group-hover:w-20 transition-all duration-500"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. THE STRATEGIC SYNERGY --- */}
            <section className="py-40 bg-[#080808] px-6">
                <div className="max-w-[1800px] mx-auto">
                    <div className="text-center mb-32">
                        <h4 className="reveal reveal-up text-[#C5A059] font-black uppercase tracking-[0.6em] text-xs mb-8">The Global Alliance</h4>
                        <h2 className="reveal reveal-up delay-100 text-6xl md:text-[7vw] font-black uppercase tracking-tighter leading-none">
                            THE <span className="text-[#C5A059] italic">ALLIANCE.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
                        {[
                            /* org.color bg-wine changed to bg-[#0A192F] */
                            { title: "CINO", subtitle: "Presidential Mandate", desc: "Leading the global charge for the restoration and care of the fatherless.", color: "bg-[#0A192F]" },
                            { title: "CAFO", subtitle: "Family Office", desc: "Developing the administrative blueprints for adoption and kingdom family structures.", color: "bg-black" },
                            { title: "WEH", subtitle: "Worship Hub", desc: "Creating an atmosphere of encounter where the sound of restoration is birthed.", color: "bg-[#0A192F]" },
                            { title: "LCJE", subtitle: "Leadership Circle", desc: "Equipping commanders for excellence in ministry and global governance.", color: "bg-black" }
                        ].map((org, i) => (
                            <div key={i} className={`reveal reveal-up p-16 ${org.color} border border-white/5 hover:scale-[1.02] transition-transform duration-700`}>
                                <h5 className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.4em] mb-4">{org.subtitle}</h5>
                                <h4 className="text-4xl font-black uppercase tracking-tighter mb-8 text-white">{org.title}</h4>
                                <p className="text-white/40 font-light italic leading-relaxed text-sm">{org.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. FAITH & COVENANT --- */}
            {/* bg-wine changed to bg-[#0A192F] */}
            <section className="py-40 bg-[#0A192F] px-6 overflow-hidden relative border-y border-white/5">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-start relative z-10">
                    <div className="reveal reveal-left">
                        <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-10 text-black/40">
                            THE <br /> <span className="text-white">BELIEF.</span>
                        </h2>
                        <p className="text-white/80 text-2xl leading-relaxed font-light italic">
                            Rooted in the ancient path, demonstrating the modern power of the Spirit.
                        </p>
                    </div>
                    <div className="reveal reveal-right space-y-4">
                        {[
                            { title: "The Sovereign Word", content: "We believe the Bible is the final authority, the divine blueprint for all human existence." },
                            { title: "The 5% Covenant", content: "A shared destiny through strategic partnership, fueling the global mandate for restoration." },
                            { title: "Apostolic Restoration", desc: "The return of all things to their original divine design through the power of Christ." }
                        ].map((item, i) => (
                            <div key={i} className="bg-black/20 p-12 border border-white/10 backdrop-blur-sm">
                                <h4 className="text-[#C5A059] font-black text-xl uppercase tracking-widest mb-4">{item.title}</h4>
                                <p className="text-white/60 font-light italic leading-relaxed">{item.content || (item as any).desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 5. IMPACT FOOTER --- */}
            <section className="py-60 bg-[#050505] px-6 text-center border-t border-white/5">
                <div className="max-w-5xl mx-auto relative z-10">
                    <h2 className="reveal reveal-up text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-16 text-white">
                        ONE IN A <br /> <span className="text-transparent border-b-2 border-[#C5A059] italic">MILLION.</span>
                    </h2>
                    <div className="reveal reveal-up delay-200 flex flex-col sm:flex-row gap-8 justify-center items-center">
                        {/* bg-wine to bg-[#C5A059], text-white to text-[#0A192F] */}
                        <Link href="/partners" className="bg-[#C5A059] text-[#0A192F] px-16 py-8 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-white transition-all duration-500">
                            Join The Partnership
                        </Link>
                        <Link href="/about/apostle-famose" className="text-white/40 font-black uppercase tracking-[0.4em] text-[10px] hover:text-[#C5A059] transition-colors">
                            The Full Story →
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
                /* Updated scrollbar to Gold */
                ::-webkit-scrollbar-thumb { background: #C5A059; }
            `}</style>
        </main>
    );
}