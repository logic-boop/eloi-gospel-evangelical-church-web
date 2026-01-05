"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WEHPartnership() {
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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#0A192F] text-white overflow-x-hidden`}>

            {/* 1. CINEMATIC HERO: THE GLOBAL MANDATE (ADJUSTED FOR HEADER) */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/60 to-[#0A192F] z-10" />
                    <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        alt="Global Mission" fill className="object-cover scale-110 animate-slowZoom opacity-200 grayscale"
                        priority
                    />
                </div>

                {/* Content Layer - pt-[20vh] ensures it sits perfectly below the header */}
                <div className="relative z-20 max-w-7xl mx-auto px-6 pt-[35vh] pb-20 w-full">
                    <div className="reveal reveal-left flex items-center gap-6 mb-10">
                        <span className="h-px w-16 bg-[#C5A059]"></span>
                        <h4 className="text-[#C5A059] font-black uppercase tracking-[0.6em] text-[10px] md:text-xs">
                            United States • Nigeria • Global
                        </h4>
                    </div>

                    <h1 className="reveal reveal-up delay-100 text-6xl md:text-[140px] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                        World <br />
                        <span className="text-transparent stroke-gold italic">Evangelical</span> <br />
                        Harvest
                    </h1>

                    <div className="reveal reveal-up delay-200 flex flex-col md:flex-row items-start md:items-center gap-12 border-t border-white/10 pt-12">
                        <p className="text-white/40 font-light text-lg md:text-2xl tracking-wide max-w-2xl italic leading-relaxed">
                            "Igniting the fires of revival across the Atlantic. A strategic apostolic alliance between North Carolina and the Heart of Africa."
                        </p>
                        <div className="flex flex-col gap-1">
                            <span className="text-[#C5A059] font-black text-xs uppercase tracking-[0.3em]">Operational Status</span>
                            <span className="text-white font-bold text-sm uppercase">Active • Global Mission</span>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-6 z-20 flex flex-col items-center gap-4">
                    <span className="[writing-mode:vertical-lr] uppercase tracking-[0.5em] text-[8px] font-black text-white/30">Scroll to Explore</span>
                    <div className="w-px h-16 bg-gradient-to-b from-[#C5A059] to-transparent"></div>
                </div>
            </section>

            {/* 2. THE APOSTOLIC ALLIANCE: LEFAVOUR & FAMOSE */}
            <section className="py-40 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        <div className="reveal reveal-left space-y-16">
                            <div className="space-y-6">
                                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-[#0A192F]">
                                    Apostolic <br /> <span className="text-[#C5A059] italic text-5xl md:text-7xl">Governance</span>
                                </h2>
                                <div className="w-24 h-2 bg-[#C5A059]" />
                            </div>

                            <div className="space-y-12">
                                {/* PRESIDENT */}
                                <div className="group border-l-[6px] border-[#f1f1f1] pl-10 hover:border-[#C5A059] transition-all duration-700">
                                    <h5 className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] mb-2">The Presidency</h5>
                                    <strong className="text-[#0A192F] text-3xl block mb-4 font-black uppercase tracking-tight">Pastor Paul R. LeFavour</strong>
                                    <p className="text-gray-500 font-light text-xl leading-relaxed">
                                        As the **President of World Evangelical Harvest (USA)**, Pastor Paul provides the theological framework and international coverage for the mission, establishing a standard of excellence and military-grade spiritual discipline.
                                    </p>
                                </div>

                                {/* NATIONAL DIRECTOR */}
                                <div className="group border-l-[6px] border-[#f1f1f1] pl-10 hover:border-[#C5A059] transition-all duration-700">
                                    <h5 className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] mb-2">National Oversight</h5>
                                    <strong className="text-[#0A192F] text-3xl block mb-4 font-black uppercase tracking-tight">Apostle (Dr.) Moses Famose</strong>
                                    <p className="text-gray-500 font-light text-xl leading-relaxed">
                                        Serving as the **National Director (Nigeria)**, Apostle Famose serves as the catalyst for fire, bridging the gap between American missionary precision and African Pentecostal power to harvest "One in a Million."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Frame */}
                        <div className="reveal reveal-right relative pt-20 lg:pt-0">
                            <div className="absolute -inset-10 bg-[#C5A059]/5 blur-[100px] rounded-full"></div>
                            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-[12px] border-[#f8f9fa] shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                                    alt="Apostolic Leadership" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10">
                                    <p className="text-white text-3xl font-black italic uppercase leading-none tracking-tighter">
                                        "Unified <br /> Missions <br /> Global Impact"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THREE PILLARS OF WEH (PREMIUM DARK CARDS) */}
            <section className="py-40 bg-[#081221] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 blur-[150px] rounded-full -translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="reveal reveal-up mb-24 text-center">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
                            Missionary <span className="text-[#C5A059] italic underline decoration-1 underline-offset-8">Directives</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Evangelism", sub: "Global Reach", desc: "Aggressive, high-impact soul-winning campaigns through crusades and digital outreach.", icon: "🌍" },
                            { title: "Leadership", sub: "Five-Fold Training", desc: "Equipping the next generation of ministers with sound doctrine and apostolic discipline.", icon: "⚔️" },
                            { title: "Compassion", sub: "CINO Integration", desc: "Demonstrating the love of Christ by providing world-class care for the vulnerable.", icon: "🏥" }
                        ].map((pillar, i) => (
                            <div key={i} className="reveal reveal-up bg-white/[0.02] p-16 rounded-[4rem] border border-white/5 hover:border-[#C5A059]/50 transition-all duration-700 group">
                                <span className="text-7xl mb-12 block group-hover:scale-110 transition-transform duration-500">{pillar.icon}</span>
                                <h3 className="text-2xl font-black uppercase mb-2 group-hover:text-[#C5A059] transition-colors">{pillar.title}</h3>
                                <p className="text-[#C5A059] font-black text-[9px] uppercase tracking-[0.4em] mb-8">{pillar.sub}</p>
                                <p className="text-white/40 font-light leading-relaxed text-lg">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE CONNECTION LINK */}
            <section className="py-52 text-center px-6 bg-white relative">
                <div className="reveal reveal-up max-w-5xl mx-auto space-y-16">
                    <h2 className="text-6xl md:text-[110px] font-black uppercase tracking-tighter text-[#0A192F] leading-none">
                        Enter The <br /> <span className="text-[#C5A059] italic">Global Harvest</span>
                    </h2>
                    <p className="text-gray-400 text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
                        Explore the full international reach of World Evangelical Harvest and King's Worship Center. Partner with the vision of Pastor LeFavour and Apostle Famose.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <Link href="https://www.worldeharvest.org/" target="_blank"
                            className="px-20 py-8 bg-[#0A192F] text-white font-black uppercase tracking-[0.4em] text-[10px] rounded-full hover:bg-[#C5A059] hover:scale-105 transition-all shadow-2xl">
                            Visit Global Website
                        </Link>
                        <Link href="/contact"
                            className="px-20 py-8 border-2 border-[#0A192F] text-[#0A192F] font-black uppercase tracking-[0.4em] text-[10px] rounded-full hover:bg-[#0A192F] hover:text-white transition-all">
                            Partner With Us
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes slowZoom {
                    from { transform: scale(1); }
                    to { transform: scale(1.15); }
                }
                .animate-slowZoom { animation: slowZoom 30s linear infinite alternate; }
                .reveal { opacity: 0; transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(80px); }
                .reveal-left { transform: translateX(-80px); }
                .reveal-right { transform: translateX(80px); }
                .reveal-visible { opacity: 1; transform: translate(0); }
                .stroke-gold { -webkit-text-stroke: 1.5px #C5A059; }
            `}</style>
        </main>
    );
}