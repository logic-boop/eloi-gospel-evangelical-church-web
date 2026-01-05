"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function CINORoyalPage() {
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

            {/* 1. ELITE HERO SECTION - FIXED HEADER SAFE ZONE */}
            <section className="relative min-h-screen flex flex-col bg-[#0d0d0d]">
                {/* Cinematic Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0d0d0d] z-10" />
                    <Image
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                        alt="CINO Mission" fill className="object-cover grayscale opacity-50 scale-105 animate-slowPan"
                    />
                </div>

                {/* Content - Pushed down 25% of viewport to clear ANY header size */}
                <div className="relative z-20 max-w-7xl mx-auto px-6 pt-[25vh] md:pt-[30vh]">
                    <div className="reveal reveal-left flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-16 bg-sky" />
                        <h4 className="text-sky font-black uppercase tracking-[0.6em] text-[10px]">Christian Initiative for Nigerian Orphans</h4>
                    </div>

                    <h1 className="reveal reveal-up delay-100 text-6xl md:text-[160px] font-black text-white uppercase tracking-tighter leading-[0.75] mb-10">
                        The <span className="text-transparent stroke-white stroke-1">Apostolic</span> <br /> Mandate.
                    </h1>

                    <div className="reveal reveal-up delay-200 flex flex-col md:flex-row gap-16 items-start">
                        <p className="text-white/50 font-light text-xl max-w-xl italic leading-relaxed border-l-2 border-wine pl-8">
                            "A divine instruction to restore the dignity of the fatherless through the direct presidency of Apostle (Dr.) Moses Famose."
                        </p>
                    </div>
                </div>

                {/* Bottom Architectural Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FCFBFA] to-transparent z-20" />
            </section>

            {/* 2. PRESIDENTIAL LEADERSHIP PANEL */}
            <section className="py-40 px-6 relative bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-6 reveal reveal-left">
                            <h2 className="text-5xl md:text-8xl font-black text-wine uppercase tracking-tighter leading-none mb-10">
                                Global <br /> <span className="text-sky italic">President</span>
                            </h2>
                            <div className="space-y-8">
                                <p className="text-gray-600 text-xl font-light leading-loose">
                                    Under the visionary leadership of **Apostle (Dr.) Moses B. O. Famose**, CINO has transitioned into a world-class humanitarian engine.
                                </p>
                                <p className="text-gray-500 text-lg font-light leading-relaxed">
                                    This is not merely charity; it is a spiritual rescue mission. The Apostle’s presidency ensures that every child under the CINO umbrella is equipped with the resources to fulfill a "One in a Million" destiny.
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-6">
                                <div className="w-20 h-20 rounded-full border-2 border-wine/20 p-2 overflow-hidden bg-gray-50">
                                    <Image src="/church-logo2.png" alt="EGEC" width={80} height={80} className="object-contain" />
                                </div>
                                <div>
                                    <p className="font-black uppercase text-wine text-sm">Apostle (Dr.) Moses Famose</p>
                                    <p className="text-[10px] font-bold text-sky uppercase tracking-[0.2em]">CINO Global President</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6 reveal reveal-right relative">
                            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)]">
                                <Image
                                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop"
                                    alt="CINO Mission Field" fill className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wine/60 to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12">
                                    <p className="text-white text-3xl font-black italic uppercase leading-none">"Transforming <br /> Victims into <br /> Victors."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE MISSION GRID */}
            <section className="py-32 bg-[#0d0d0d] text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="reveal reveal-left">
                            <h4 className="text-sky font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Work of the Ministry</h4>
                            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">Impact <span className="text-white/20 italic">Sectors</span></h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "Academic", label: "Scholastic Excellence", icon: "📖", desc: "Securing the intellectual future of every orphan through fully funded education." },
                            { title: "Sanctuary", label: "Safe Havens", icon: "🏠", desc: "Providing dignified housing that reflects the royalty of their identity in Christ." },
                            { title: "Vitality", label: "Healthcare", icon: "⚡", desc: "Comprehensive medical cover and nutritional support for holistic growth." }
                        ].map((pillar, i) => (
                            <div key={i} className="reveal reveal-up group p-12 bg-white/5 border border-white/5 rounded-[3.5rem] hover:bg-white hover:text-black transition-all duration-700">
                                <span className="text-5xl mb-10 block">{pillar.icon}</span>
                                <h3 className="text-2xl font-black uppercase mb-1">{pillar.title}</h3>
                                <p className="text-[9px] font-black text-sky uppercase tracking-widest mb-8">{pillar.label}</p>
                                <p className="text-inherit opacity-40 group-hover:opacity-100 text-sm font-light leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE CALL TO PARTNERSHIP */}
            <section className="py-40 bg-white text-center px-6">
                <div className="reveal reveal-up max-w-4xl mx-auto">
                    <div className="inline-block px-8 py-2 bg-gray-50 rounded-full mb-10 border border-gray-100">
                        <p className="text-[10px] font-black uppercase tracking-widest text-sky">Presidential Initiative</p>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black text-wine uppercase tracking-tighter leading-none mb-12">
                        Sow into <br /> <span className="text-sky italic">Eternity</span>
                    </h2>
                    <p className="text-gray-400 text-xl font-light italic mb-12 max-w-2xl mx-auto leading-relaxed">
                        "Your partnership with Apostle Famose in CINO is a direct investment into the restoration of destiny."
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <button className="px-16 py-8 bg-wine text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-sky transition-all shadow-[0_20px_50px_rgba(93,14,17,0.3)] hover:scale-105">
                            Partner with CINO
                        </button>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes slowPan {
                    0% { transform: scale(1.05) translate(0,0); }
                    100% { transform: scale(1.15) translate(-2%,-2%); }
                }
                .animate-slowPan { animation: slowPan 25s ease-in-out infinite alternate; }
                .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(60px); }
                .reveal-left { transform: translateX(-60px); }
                .reveal-right { transform: translateX(60px); }
                .reveal-visible { opacity: 1; transform: translate(0); }
                .stroke-white { -webkit-text-stroke: 1px rgba(255,255,255,0.4); }
            `}</style>
        </main>
    );
}