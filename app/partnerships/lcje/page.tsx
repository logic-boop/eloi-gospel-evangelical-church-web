"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LCJEPage() {
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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#fdfbf7] text-[#1a1a1a] selection:bg-[#c5a059] selection:text-white`}>

            {/* 1. HERITAGE HERO SECTION - FULL COLOR & DEEP CLEARANCE */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a192f]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/60 via-transparent to-[#fdfbf7] z-10" />
                    {/* PREMIUM IMAGE: The Western Wall, Jerusalem - REPRESENTING JEWISH EVANGELISM */}
                    <Image
                        src="/lcje_hero_pic.png"
                        alt="Jerusalem Western Wall - The Focus of the Mandate"
                        fill
                        className="object-cover opacity-45 scale-105 animate-slowZoom"
                        priority
                    />
                </div>

                <div className="relative z-20 text-center px-6 max-w-5xl pt-[35vh]">
                    <h4 className="reveal reveal-up text-[#c5a059] font-black uppercase tracking-[0.8em] text-[10px] md:text-xs mb-10">The Lausanne Consultation</h4>

                    <h1 className="reveal reveal-up delay-100 text-6xl md:text-[120px] font-serif italic text-white leading-[0.85] tracking-tight">
                        Jewish <br />
                        <span className="text-[#c5a059] not-italic font-sans font-black uppercase tracking-tighter block mt-4">Evangelism</span>
                    </h1>

                    <div className="reveal reveal-up delay-200 mt-16 flex items-center justify-center gap-6">
                        <div className="h-[1px] w-16 bg-[#c5a059]" />
                        <p className="text-white font-black tracking-[0.4em] uppercase text-[10px] md:text-[12px]">A Global Apostolic Mandate</p>
                        <div className="h-[1px] w-16 bg-[#c5a059]" />
                    </div>
                </div>
            </section>

            {/* 2. THE VISIONARY NARRATIVE - FULL VIBRANT COLOR */}
            <section className="py-48 px-6 bg-[#fdfbf7]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div className="reveal reveal-left relative">
                        <div className="aspect-square rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(197,160,89,0.2)] border-[12px] md:border-[20px] border-white relative z-10">
                            {/* REMOVED GRAYSCALE: Full Color Vibrant Imagery */}
                            <Image
                                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop"
                                alt="Prophetic Connection"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-1000"
                            />
                        </div>
                        {/* Floating Seal */}
                        <div className="absolute -top-12 -right-8 md:-right-12 w-44 h-44 md:w-56 md:h-56 bg-[#c5a059] rounded-full flex flex-col items-center justify-center text-white text-center p-8 shadow-2xl border-[6px] border-[#fdfbf7] z-20 rotate-6">
                            <span className="font-black uppercase tracking-[0.2em] text-[9px] mb-2 opacity-90">Established Alliance</span>
                            <p className="font-black uppercase tracking-tighter text-sm md:text-lg leading-tight">Apostolic <br />Partnership <br />2024</p>
                        </div>
                    </div>

                    <div className="reveal reveal-right space-y-12">
                        <div className="space-y-4">
                            <h4 className="text-[#c5a059] font-black uppercase tracking-[0.4em] text-xs">Biblical Foundation</h4>
                            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-[#0a192f] leading-none">
                                TO THE JEW <br /> <span className="text-transparent outline-gold italic">FIRST.</span>
                            </h2>
                        </div>

                        <p className="text-2xl text-gray-800 leading-relaxed font-light italic border-l-4 border-[#c5a059] pl-10 py-2">
                            "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile." — Romans 1:16
                        </p>

                        <div className="space-y-8 text-gray-700 text-lg leading-loose font-light">
                            <p>
                                The <strong className="text-[#0a192f] font-bold">LCJE</strong> is the definitive global network of its kind, bringing together Jewish believers and Gentile allies to fulfill the Great Commission within the Jewish community.
                            </p>
                            <p>
                                Under the strategic leadership of <strong className="text-[#0a192f] font-bold text-xl uppercase tracking-tighter">Apostle (Dr.) Moses Famose</strong>, EGEC has aligned with the Lausanne movement to ensure the "One in a Million" generation understands our spiritual roots and participates in the restoration of Israel.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE COMMITMENTS - FULL COLOR SECTORS */}
            <section className="py-48 bg-[#0a192f] text-white overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none uppercase font-black text-[35vw] leading-none select-none tracking-tighter">
                    LCJE
                </div>

                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
                        <div className="reveal reveal-left">
                            <h3 className="text-[#c5a059] font-black uppercase tracking-[0.5em] text-[10px] mb-6">Strategic Focus</h3>
                            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">MISSIONARY <br /> <span className="text-white/20 italic">PILLARS.</span></h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4">
                        {[
                            {
                                title: "Theological Depth",
                                desc: "Engaging in high-level consultation on the biblical mandate for Jewish evangelism.",
                                num: "01",
                                label: "CONSULTATION"
                            },
                            {
                                title: "Global Networking",
                                desc: "Connecting EGEC with messianic congregations and mission agencies worldwide.",
                                num: "02",
                                label: "ALLIANCE"
                            },
                            {
                                title: "Information Exchange",
                                desc: "Equipping the local church with resources to share the Gospel sensitively and effectively.",
                                num: "03",
                                label: "EQUIPPING"
                            }
                        ].map((item, i) => (
                            <div key={i} className="reveal reveal-up group p-12 md:p-16 hover:bg-white/5 transition-all duration-700 rounded-[3rem] border border-white/5">
                                <div className="text-7xl font-black text-[#c5a059]/20 mb-10 group-hover:text-[#c5a059] transition-colors duration-500 tracking-tighter">{item.num}</div>
                                <h4 className="text-[10px] font-black text-[#c5a059] tracking-[0.4em] mb-4 uppercase">{item.label}</h4>
                                <h4 className="text-3xl font-black uppercase tracking-tighter mb-8 leading-tight">{item.title}</h4>
                                <div className="w-16 h-[2px] bg-[#c5a059]/30 mb-8 group-hover:w-full transition-all duration-700" />
                                <p className="text-white/50 group-hover:text-white transition-colors font-light leading-relaxed text-lg italic">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE APOSTOLIC CALL TO ACTION */}
            <section className="py-60 px-6 bg-[#fdfbf7]">
                <div className="max-w-5xl mx-auto text-center reveal reveal-up bg-white p-16 md:p-32 rounded-[4rem] md:rounded-[6rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-3 bg-[#c5a059]" />

                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#0a192f] mb-10 leading-none">JOIN THE <br /> <span className="text-[#c5a059] italic">RESTORATION.</span></h2>

                    <p className="text-gray-600 mb-16 font-light text-xl md:text-2xl italic leading-relaxed max-w-2xl mx-auto">
                        "EGEC is committed to standing with the LCJE in prayer and evangelistic action. Join the move."
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-16 py-8 bg-[#0a192f] text-white rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:bg-[#c5a059] hover:scale-105 transition-all shadow-xl">
                            Partner With LCJE
                        </button>
                        <button className="px-16 py-8 border-2 border-gray-200 text-[#0a192f] rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:bg-gray-50 transition-all">
                            Request Resources
                        </button>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes slowZoom {
                    from { transform: scale(1); }
                    to { transform: scale(1.15); }
                }
                .animate-slowZoom { animation: slowZoom 30s linear infinite alternate; }
                .outline-gold { -webkit-text-stroke: 1.5px #c5a059; }
                .reveal { opacity: 0; transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(80px); }
                .reveal-left { transform: translateX(-80px); }
                .reveal-right { transform: translateX(80px); }
                .reveal-visible { opacity: 1; transform: translate(0); }
            `}</style>
        </main>
    );
}