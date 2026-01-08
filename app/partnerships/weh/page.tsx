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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#0A192F] text-white overflow-x-hidden selection:bg-[#C5A059] selection:text-[#0A192F]`}>

            {/* 1. CINEMATIC HERO: THE GLOBAL MANDATE (FULL COLOR & HEADER SAFE) */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/40 to-[#0A192F] z-10" />
                    {/* FULL COLOR IMAGE: Deep Space / Global Connectivity */}
                    <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
                        alt="Global Mission" fill className="object-cover scale-110 animate-slowZoom opacity-90"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-[1400px] mx-auto px-6 pt-[35vh] pb-20 w-full">
                    <div className="reveal reveal-left flex items-center gap-6 mb-10">
                        <span className="h-[2px] w-20 bg-[#C5A059]"></span>
                        <h4 className="text-[#C5A059] font-black uppercase tracking-[0.8em] text-[10px] md:text-xs">
                            United States • Nigeria • Global
                        </h4>
                    </div>

                    <h1 className="reveal reveal-up delay-100 text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                        World <br />
                        <span className="text-transparent outline-gold italic">Evangelical</span> <br />
                        Harvest
                    </h1>

                    <div className="reveal reveal-up delay-200 flex flex-col md:flex-row items-start md:items-center gap-16 border-t border-white/10 pt-16">
                        <p className="text-white/50 font-light text-xl md:text-3xl tracking-wide max-w-3xl italic leading-relaxed">
                            "Igniting the fires of revival across the Atlantic. A strategic apostolic alliance between North Carolina and the Heart of Africa."
                        </p>
                        <div className="flex flex-col gap-2 min-w-[200px]">
                            <span className="text-[#C5A059] font-black text-xs uppercase tracking-[0.4em]">Operational Status</span>
                            <span className="text-white font-bold text-lg uppercase border-b border-[#C5A059]/30 pb-2">Active • Global</span>
                        </div>
                    </div>
                </div>

                {/* Vertical Scroll Indicator */}
                <div className="absolute bottom-12 left-10 z-20 hidden md:flex flex-col items-center gap-6">
                    <span className="[writing-mode:vertical-lr] uppercase tracking-[0.6em] text-[9px] font-black text-white/20">Explore Alliance</span>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-[#C5A059] to-transparent"></div>
                </div>
            </section>

            {/* 2. THE APOSTOLIC ALLIANCE: FULL COLOR PORTRAITURE */}
            <section className="py-60 px-6 bg-white relative">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
                        <div className="reveal reveal-left space-y-20">
                            <div className="space-y-6">
                                <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none text-[#0A192F]">
                                    Apostolic <br /> <span className="text-[#C5A059] italic text-5xl md:text-8xl">Governance</span>
                                </h2>
                                <div className="w-32 h-1.5 bg-[#C5A059]" />
                            </div>

                            <div className="space-y-16">
                                {/* PRESIDENT */}
                                <div className="group border-l-[8px] border-[#f1f1f1] pl-12 hover:border-[#C5A059] transition-all duration-700">
                                    <h5 className="text-[#C5A059] font-black uppercase tracking-[0.5em] text-[10px] mb-4">The Presidency</h5>
                                    <strong className="text-[#0A192F] text-4xl block mb-6 font-black uppercase tracking-tighter">Pastor Paul R. LeFavour</strong>
                                    <p className="text-gray-500 font-light text-2xl leading-relaxed italic">
                                        As the **President of World Evangelical Harvest (USA)**, Pastor Paul provides the theological framework and international coverage for the mission.
                                    </p>
                                </div>

                                {/* NATIONAL DIRECTOR */}
                                <div className="group border-l-[8px] border-[#f1f1f1] pl-12 hover:border-[#C5A059] transition-all duration-700">
                                    <h5 className="text-[#C5A059] font-black uppercase tracking-[0.5em] text-[10px] mb-4">National Oversight</h5>
                                    <strong className="text-[#0A192F] text-4xl block mb-6 font-black uppercase tracking-tighter">Apostle (Dr.) Moses Famose</strong>
                                    <p className="text-gray-500 font-light text-2xl leading-relaxed italic">
                                        Serving as the **National Director (Nigeria)**, Apostle Famose serves as the catalyst for fire, bridging American precision with African Pentecostal power.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Frame - FULL COLOR */}
                        <div className="reveal reveal-right relative pt-20 lg:pt-0">
                            <div className="absolute -inset-10 bg-[#C5A059]/10 blur-[120px] rounded-full"></div>
                            <div className="relative aspect-[4/5] rounded-[3rem] md:rounded-[5rem] overflow-hidden border-[15px] border-[#f8f9fa] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
                                <Image
                                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071"
                                    alt="Apostolic Leadership" fill className="object-cover hover:scale-110 transition-transform duration-[2000ms]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12">
                                    <p className="text-white text-4xl font-black italic uppercase leading-[0.9] tracking-tighter">
                                        UNIFIED <br /> MISSIONS. <br /> <span className="text-[#C5A059]">GLOBAL IMPACT.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THREE PILLARS (MONOLITHIC DARK CARDS) */}
            <section className="py-48 bg-[#081221] relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <div className="reveal reveal-up mb-32 text-center">
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">
                            Missionary <span className="text-[#C5A059] italic">Directives.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Evangelism", sub: "Global Reach", desc: "Aggressive, high-impact soul-winning campaigns through crusades and digital outreach.", icon: "🌍", num: "01" },
                            { title: "Leadership", sub: "Five-Fold Training", desc: "Equipping the next generation of ministers with sound doctrine and apostolic discipline.", icon: "⚔️", num: "02" },
                            { title: "Compassion", sub: "CINO Integration", desc: "Demonstrating the love of Christ by providing world-class care for the vulnerable.", icon: "🏥", num: "03" }
                        ].map((pillar, i) => (
                            <div key={i} className="reveal reveal-up bg-white/[0.02] p-16 md:p-20 rounded-[3rem] border border-white/5 hover:bg-[#C5A059] hover:text-[#0A192F] transition-all duration-700 group relative overflow-hidden">
                                <span className="text-7xl font-black absolute top-10 right-10 opacity-5 group-hover:text-black group-hover:opacity-10 transition-all">{pillar.num}</span>
                                <span className="text-6xl mb-12 block group-hover:scale-110 transition-transform duration-500">{pillar.icon}</span>
                                <h3 className="text-3xl font-black uppercase mb-2">{pillar.title}</h3>
                                <p className="font-black text-[10px] uppercase tracking-[0.4em] mb-10 group-hover:text-[#0A192F]/60 transition-colors">{pillar.sub}</p>
                                <p className="text-white/40 group-hover:text-[#0A192F] font-light leading-relaxed text-xl italic transition-colors">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE CONNECTION LINK (CLEAN FINISH) */}
            <section className="py-60 text-center px-6 bg-white relative">
                <div className="reveal reveal-up max-w-5xl mx-auto space-y-20">
                    <h2 className="text-7xl md:text-[9vw] font-black uppercase tracking-tighter text-[#0A192F] leading-none">
                        ENTER THE <br /> <span className="text-[#C5A059] italic">GLOBAL HARVEST.</span>
                    </h2>
                    <p className="text-gray-400 text-2xl font-light italic max-w-3xl mx-auto leading-relaxed">
                        Explore the full international reach of World Evangelical Harvest and King's Worship Center. Partner with the vision of Pastor LeFavour and Apostle Famose.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        <Link href="https://www.worldeharvest.org/" target="_blank"
                            className="px-20 py-10 bg-[#0A192F] text-white font-black uppercase tracking-[0.5em] text-[10px] rounded-full hover:bg-[#C5A059] hover:text-[#0A192F] hover:scale-105 transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                            Visit Global Website
                        </Link>
                        <Link href="/contact"
                            className="px-20 py-10 border-2 border-[#0A192F] text-[#0A192F] font-black uppercase tracking-[0.5em] text-[10px] rounded-full hover:bg-[#0A192F] hover:text-white transition-all">
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
                .outline-gold { -webkit-text-stroke: 1.5px #C5A059; }
                ::-webkit-scrollbar { width: 4px; }
                ::-webkit-scrollbar-thumb { background: #C5A059; }
            `}</style>
        </main>
    );
}