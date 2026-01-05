"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CafoPage() {
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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#0A192F] overflow-x-hidden`}>

            {/* --- 1. GLOBAL HERO: THE APOSTOLIC MANDATE (ADJUSTED FOR TINTED HEADER) --- */}
            <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/60 to-[#0A192F] z-10" />
                    <Image
                        src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop"
                        alt="Global Leadership" fill className="object-cover scale-110 animate-slowZoom opacity-30 grayscale"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 pt-[35vh] pb-20 w-full">
                    <div className="reveal reveal-left flex items-center gap-6 mb-10">
                        <span className="h-px w-16 bg-[#C5A059]"></span>
                        <h4 className="text-[#C5A059] font-black uppercase tracking-[0.6em] text-[10px] md:text-xs">
                            Official Global Alliance • CAFO.org
                        </h4>
                    </div>

                    <h1 className="reveal reveal-up delay-100 text-6xl md:text-[140px] font-black uppercase tracking-tighter leading-[0.8] mb-12 text-white">
                        Global <br />
                        <span className="text-transparent stroke-gold italic">Mandate</span>
                    </h1>

                    <div className="reveal reveal-up delay-200 flex flex-col md:flex-row items-start md:items-center gap-12 border-t border-white/10 pt-12">
                        <p className="text-white/40 font-light text-lg md:text-2xl tracking-wide max-w-2xl italic leading-relaxed">
                            "Representing the African Continent in the global pursuit of excellence in orphan care and apostolic advocacy."
                        </p>
                        <div className="flex flex-col gap-1">
                            <span className="text-[#C5A059] font-black text-xs uppercase tracking-[0.3em]">Seat of Office</span>
                            <span className="text-white font-bold text-sm uppercase">Africa Representative Office</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. THE CONTINENTAL REPRESENTATIVE (PREMIUM LIGHT SECTION) --- */}
            <section className="py-40 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                    <div className="reveal reveal-left space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-[#0A192F]">
                                Africa <br /> <span className="text-[#C5A059] italic text-5xl md:text-7xl">Continent</span> <br /> Representative
                            </h2>
                            <div className="w-24 h-2 bg-[#C5A059]" />
                        </div>

                        <div className="space-y-8">
                            <p className="text-xl text-gray-500 leading-relaxed font-light italic">
                                Apostle (Dr.) Moses Famose serves as the official **Africa Continent Representative for CAFO Global**.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Standing as a bridge between international research-based care and the local African church, his office provides the strategic leadership required to move from basic charity to **world-class orphan advocacy**.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12 border-t border-gray-100 pt-12">
                            <div>
                                <h4 className="font-black text-[#0A192F] text-5xl tracking-tighter">120+</h4>
                                <p className="text-[#C5A059] uppercase font-black text-[10px] tracking-widest mt-2">Nations Impacted</p>
                            </div>
                            <div>
                                <h4 className="font-black text-[#0A192F] text-5xl tracking-tighter">200K</h4>
                                <p className="text-[#C5A059] uppercase font-black text-[10px] tracking-widest mt-2">Children Covered</p>
                            </div>
                        </div>
                    </div>

                    <div className="reveal reveal-right relative lg:pt-20">
                        <div className="absolute -inset-10 bg-[#0A192F]/5 blur-[100px] rounded-full"></div>
                        <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-[12px] border-[#f8f9fa] shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1974&auto=format&fit=crop"
                                alt="Official CAFO Representation" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <p className="text-white text-3xl font-black italic uppercase leading-none tracking-tighter">
                                    "One Heart <br /> One Mission <br /> Global Excellence"
                                </p>
                            </div>
                        </div>
                        {/* OFFICIAL BADGE */}
                        <div className="absolute -bottom-10 -right-5 md:-right-10 w-44 h-44 bg-[#0A192F] rounded-full flex flex-col items-center justify-center p-6 shadow-2xl border-4 border-[#C5A059]">
                            <span className="text-[#C5A059] font-black text-[9px] uppercase tracking-widest mb-1">Official</span>
                            <span className="text-white font-black text-2xl uppercase tracking-tighter">CAFO</span>
                            <span className="text-white/40 font-bold text-[8px] uppercase tracking-widest mt-1">Delegate</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. THE APOSTOLIC FOOTPRINTS (DOCUMENTARY GALLERY) --- */}
            <section className="py-40 bg-[#081221] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="reveal reveal-up mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
                            Official <span className="text-[#C5A059] italic underline decoration-1 underline-offset-8">Documentation</span>
                        </h2>
                        <p className="text-white/30 font-bold uppercase text-[10px] tracking-[0.4em] max-w-xs text-left md:text-right">
                            Strategic moments of impact across the CAFO Global Summits and Research Initiatives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[700px]">
                        <div className="md:col-span-8 relative rounded-[4rem] overflow-hidden group reveal reveal-up border border-white/10 min-h-[400px]">
                            <Image src="https://images.unsplash.com/photo-1475721027187-402ad2989a3b?q=80&w=2070&auto=format&fit=crop" alt="Global Summit" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-12 left-12">
                                <span className="text-[#C5A059] font-black uppercase text-[10px] tracking-widest">Leadership Session</span>
                                <h3 className="text-white text-3xl font-black uppercase tracking-tighter">Continental Strategic Roundtable</h3>
                            </div>
                        </div>
                        <div className="md:col-span-4 grid grid-rows-2 gap-8">
                            <div className="relative rounded-[3rem] overflow-hidden group reveal reveal-up delay-100 border border-white/10 min-h-[300px]">
                                <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" alt="Strategy" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                            </div>
                            <div className="relative rounded-[3rem] overflow-hidden group reveal reveal-up delay-200 border border-white/10 min-h-[300px]">
                                <Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" alt="Delegates" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. CORE PILLARS --- */}
            <section className="py-40 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: "Trauma Informed", sub: "The CAFO Model", desc: "Implementing world-class, research-backed care modules for African orphanages.", icon: "🧬" },
                        { title: "Pure Religion", sub: "James 1:27", desc: "Equipping the five-fold ministry to prioritize the widow and the fatherless.", icon: "⚔️" },
                        { title: "Policy Reform", sub: "Continental Advocacy", desc: "Collaborating with governments to reshape foster care and adoption policies.", icon: "📜" }
                    ].map((item, i) => (
                        <div key={i} className="reveal reveal-up bg-[#0A192F]/[0.02] p-16 rounded-[4rem] border border-[#0A192F]/5 hover:border-[#C5A059]/50 transition-all duration-700 group">
                            <span className="text-6xl mb-12 block group-hover:scale-110 transition-transform duration-500">{item.icon}</span>
                            <h3 className="text-2xl font-black uppercase mb-2 group-hover:text-[#C5A059] transition-colors">{item.title}</h3>
                            <p className="text-[#C5A059] font-black text-[9px] uppercase tracking-[0.4em] mb-8">{item.sub}</p>
                            <p className="text-gray-500 font-light leading-relaxed text-lg">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-52 text-center px-6 bg-[#0A192F] relative overflow-hidden">
                <div className="reveal reveal-up max-w-5xl mx-auto space-y-16 relative z-10">
                    <h2 className="text-6xl md:text-[110px] font-black uppercase tracking-tighter text-white leading-none">
                        Witness the <br /> <span className="text-transparent stroke-gold italic">Local Impact</span>
                    </h2>
                    <p className="text-white/40 text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
                        Transition from global policy to local implementation. See how the CAFO mandate is fulfilled through CINO Nigeria.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <Link href="/partnerships/cino"
                            className="px-20 py-8 bg-[#C5A059] text-[#0A192F] font-black uppercase tracking-[0.4em] text-[10px] rounded-full hover:bg-white hover:scale-105 transition-all shadow-2xl">
                            Go to CINO Nigeria Office
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