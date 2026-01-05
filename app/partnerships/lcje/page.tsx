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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#FCFBFA] overflow-x-hidden`}>

            {/* 1. IMPERIAL HERO SECTION - THE JEWISH MANDATE */}
            <section className="relative min-h-screen flex flex-col bg-[#0A192F]">
                {/* Cinematic Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/40 to-[#FCFBFA] z-10" />
                    <Image
                        src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070"
                        alt="Jerusalem Legacy" fill className="object-cover grayscale opacity-40 scale-105 animate-slowPan"
                    />
                </div>

                {/* Content Layer - Safe Zone for Header */}
                <div className="relative z-20 max-w-7xl mx-auto px-6 pt-[25vh]">
                    <div className="reveal reveal-left flex items-center gap-4 mb-8">
                        <div className="h-[2px] w-16 bg-[#C5A059]" />
                        <h4 className="text-[#C5A059] font-black uppercase tracking-[0.6em] text-[10px]">Lozanne Consultation on Jewish Evangelism</h4>
                    </div>

                    <h1 className="reveal reveal-up delay-100 text-6xl md:text-[150px] font-black text-white uppercase tracking-tighter leading-[0.75] mb-12">
                        The <span className="text-transparent stroke-gold stroke-1 italic">Prophetic</span> <br /> Priority.
                    </h1>

                    <div className="reveal reveal-up delay-200 flex flex-col md:flex-row gap-16 items-start">
                        <p className="text-white/60 font-light text-xl max-w-xl italic leading-relaxed border-l-2 border-[#C5A059] pl-8">
                            "To the Jew first—a divine protocol upheld by the Presidency of Apostle (Dr.) Moses Famose in the global mission for souls."
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. THE PRESIDENTIAL PROTOCOL */}
            <section className="py-40 px-6 relative bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-6 reveal reveal-left">
                            <h2 className="text-5xl md:text-8xl font-black text-[#0A192F] uppercase tracking-tighter leading-none mb-10">
                                Global <br /> <span className="text-[#C5A059] italic">Alignment</span>
                            </h2>
                            <div className="space-y-8">
                                <p className="text-gray-600 text-xl font-light leading-loose">
                                    Under the leadership of **Apostle (Dr.) Moses B. O. Famose**, EGEC maintains a high-level partnership with the LCJE. We recognize that the salvation of Israel is central to the return of the King.
                                </p>
                                <p className="text-gray-500 text-lg font-light leading-relaxed">
                                    This partnership is a strategic apostolic bridge, connecting the fire of African Pentecostalism with the ancient roots of our faith.
                                </p>
                            </div>

                            {/* Presidential Signature Element */}
                            <div className="mt-16 p-8 bg-[#0A192F] rounded-[3rem] border-b-4 border-[#C5A059]">
                                <p className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.4em] mb-4">Authorized By</p>
                                <h3 className="text-white text-2xl font-black uppercase tracking-tight">Apostle (Dr.) Moses Famose</h3>
                                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-1">President, EGEC Global</p>
                            </div>
                        </div>

                        <div className="lg:col-span-6 reveal reveal-right relative">
                            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(10,25,47,0.4)]">
                                <Image
                                    src="https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=2070"
                                    alt="Global Missions" fill className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12 text-center">
                                    <div className="w-20 h-20 bg-[#C5A059] rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                                        <span className="text-white text-2xl font-bold">✡</span>
                                    </div>
                                    <p className="text-white text-2xl font-black italic uppercase leading-none tracking-tighter">"Until All <br /> Israel is Saved."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. IMPACT PILLARS - GOLD & MIDNIGHT */}
            <section className="py-32 bg-[#0A192F] text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="reveal reveal-left">
                            <h4 className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Apostolic Strategic Initiatives</h4>
                            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">Jewish <span className="text-white/20 italic">Evangelism</span></h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Theology", label: "Biblical Roots", icon: "📜", desc: "Equipping the Church to understand the Jewish foundation of the New Covenant." },
                            { title: "Evangelism", label: "Direct Outreach", icon: "🌍", desc: "Supporting global efforts to bring the message of Yeshua to the Jewish community." },
                            { title: "Unity", label: "One New Man", icon: "🤝", desc: "Fostering brotherhood between Jewish and Gentile believers in the Body of Christ." }
                        ].map((pillar, i) => (
                            <div key={i} className="reveal reveal-up group p-12 bg-white/5 border border-white/5 rounded-[3.5rem] hover:bg-[#C5A059] hover:text-[#0A192F] transition-all duration-700">
                                <span className="text-4xl mb-8 block transition-transform group-hover:scale-125 duration-500">{pillar.icon}</span>
                                <h3 className="text-2xl font-black uppercase mb-1">{pillar.title}</h3>
                                <p className="text-[9px] font-black opacity-60 uppercase tracking-widest mb-8">{pillar.label}</p>
                                <p className="text-inherit opacity-40 group-hover:opacity-100 text-sm font-light leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE CALL TO ACTION */}
            <section className="py-40 bg-[#FCFBFA] text-center px-6">
                <div className="reveal reveal-up max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-8xl font-black text-[#0A192F] uppercase tracking-tighter leading-none mb-12">
                        Become a <br /> <span className="text-[#C5A059] italic">Watchman</span>
                    </h2>
                    <p className="text-gray-400 text-xl font-light italic mb-12 max-w-2xl mx-auto leading-relaxed">
                        "For Zion's sake I will not keep silent..." Join Apostle Famose in this strategic end-time partnership.
                    </p>
                    <button className="px-20 py-8 bg-[#0A192F] text-[#C5A059] rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-[#C5A059] hover:text-[#0A192F] transition-all shadow-[0_25px_50px_-12px_rgba(10,25,47,0.5)] hover:scale-105 active:scale-95">
                        Support the Mandate
                    </button>
                </div>
            </section>

            <style jsx>{`
                .animate-slowPan { animation: slowPan 25s ease-in-out infinite alternate; }
                @keyframes slowPan {
                    0% { transform: scale(1) translate(0,0); }
                    100% { transform: scale(1.1) translate(-2%,-2%); }
                }
                .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(60px); }
                .reveal-left { transform: translateX(-60px); }
                .reveal-right { transform: translateX(60px); }
                .reveal-visible { opacity: 1; transform: translate(0); }
                .stroke-gold { -webkit-text-stroke: 1px rgba(197,160,89,0.5); }
            `}</style>
        </main>
    );
}