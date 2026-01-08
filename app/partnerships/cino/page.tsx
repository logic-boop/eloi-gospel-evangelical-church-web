"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CINORoyalPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll();

    // Cinematic parallax for the presidential portrait
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#FCFBFA] selection:bg-[#C5A059] selection:text-black overflow-x-hidden`}>

            {/* --- 1. THE PRESIDENTIAL HERO (MAX CLEARANCE) --- */}
            <section className="relative h-[110vh] flex flex-col bg-[#050505] overflow-hidden">
                <motion.div style={{ opacity: opacityHero }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-[#050505] z-10" />
                    <Image
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
                        alt="CINO Mission" fill className="object-cover grayscale opacity-30 scale-105 animate-slowPan"
                        priority
                    />
                </motion.div>

                {/* HEADER SAFE ZONE: pt-[35vh] ensures title starts below any header size */}
                <div className="relative z-20 max-w-[1400px] mx-auto px-6 pt-[35vh] md:pt-[40vh] w-full">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="flex items-center gap-6 mb-10"
                    >
                        <div className="h-px w-20 bg-[#C5A059]" />
                        <h4 className="text-[#C5A059] font-black uppercase tracking-[0.6em] text-[10px] md:text-xs">The CINO Nigeria Presidency</h4>
                    </motion.div>

                    <motion.div style={{ y: yHero }}>
                        <h1 className="reveal reveal-up text-6xl md:text-[10vw] font-black text-white uppercase tracking-tighter leading-[0.75] mb-12">
                            FATHER <br /> <span className="text-transparent outline-gold italic">TO THE.</span> <br /> <span className="text-[#C5A059]">FATHERLESS.</span>
                        </h1>
                    </motion.div>

                    <div className="reveal reveal-up delay-300 flex flex-col md:flex-row gap-16 items-start pt-16 border-t border-white/5">
                        <p className="text-white/40 font-light text-xl md:text-2xl max-w-2xl italic leading-relaxed border-l border-[#C5A059] pl-10">
                            "Transforming the narrative of Nigerian orphans from victims of circumstance to victors of destiny."
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#FCFBFA] to-transparent z-20" />
            </section>

            {/* --- 2. LEADERSHIP ARCHITECTURE (WHITE POWER) --- */}
            <section className="py-60 px-6 relative bg-[#FCFBFA]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
                        <div className="lg:col-span-7 reveal reveal-left space-y-16">
                            <h2 className="text-7xl md:text-9xl font-black text-black uppercase tracking-tighter leading-none">
                                GLOBAL <br /> <span className="text-[#C5A059] italic">PRESIDENT.</span>
                            </h2>

                            <div className="space-y-10">
                                <p className="text-gray-800 text-3xl font-light leading-snug italic">
                                    Under the mandate of **Apostle (Dr.) Moses Famose**, CINO has become more than a charity; it is a spiritual rescue mission.
                                </p>
                                <p className="text-gray-500 text-xl font-light leading-relaxed max-w-xl">
                                    His presidency ensures that every child under our care is treated with the dignity of royalty, provided with world-class education, and equipped to become a "One in a Million" leader.
                                </p>
                            </div>

                            <div className="pt-12 flex items-center gap-8 border-t border-gray-100">
                                <div className="w-24 h-24 rounded-full border border-gray-200 p-2 overflow-hidden bg-white">
                                    <Image src="/church-logo2.png" alt="EGEC" width={100} height={100} className="object-contain" />
                                </div>
                                <div>
                                    <p className="font-black uppercase text-black text-lg tracking-tighter">Apostle Dr. Moses Famose</p>
                                    <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.4em]">President & Chief Advocate</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 reveal reveal-right relative">
                            <div className="relative aspect-[3/4] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white">
                                <Image
                                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070"
                                    alt="CINO Field" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12">
                                    <p className="text-[#C5A059] text-4xl font-black italic uppercase leading-none tracking-tighter">
                                        "VICTIMS <br /> INTO <br /> VICTORS."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. THE TRIAD OF IMPACT (DARK SECTORS) --- */}
            <section className="py-40 bg-[#050505] text-white overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="reveal reveal-up mb-32">
                        <h4 className="text-[#C5A059] font-black uppercase tracking-[0.5em] text-[10px] mb-6">Operations & Strategy</h4>
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">IMPACT <span className="text-white/20 italic">SECTORS.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                        {[
                            { title: "ACADEMIC", label: "Intellectual Future", desc: "Securing the intellectual future of every orphan through fully funded premium education.", num: "01" },
                            { title: "SANCTUARY", label: "Dignified Living", desc: "Providing havens that reflect the royalty of their identity in Christ Jesus.", num: "02" },
                            { title: "VITALITY", label: "Comprehensive Care", desc: "Total medical coverage and nutritional support for holistic growth.", num: "03" }
                        ].map((sector, i) => (
                            <div key={i} className="reveal reveal-up group p-16 md:p-24 bg-[#0A0A0A] border border-white/5 hover:bg-[#C5A059] hover:text-black transition-all duration-700">
                                <span className="text-[#C5A059] group-hover:text-black font-black text-6xl mb-12 block opacity-20">{sector.num}</span>
                                <h3 className="text-3xl font-black uppercase mb-2">{sector.title}</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest mb-10 group-hover:text-black/60">{sector.label}</p>
                                <p className="text-white/40 group-hover:text-black text-lg font-light leading-relaxed italic">{sector.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. COVENANT CALL TO ACTION --- */}
            <section className="py-60 bg-white text-center px-6">
                <div className="reveal reveal-up max-w-5xl mx-auto space-y-16">
                    <div className="inline-block px-10 py-3 bg-gray-50 rounded-full border border-gray-100">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C5A059]">Presidential Commitment</p>
                    </div>
                    <h2 className="text-6xl md:text-[9vw] font-black text-black uppercase tracking-tighter leading-none">
                        SOW INTO <br /> <span className="text-[#C5A059] italic">ETERNITY.</span>
                    </h2>
                    <p className="text-gray-400 text-2xl font-light italic max-w-3xl mx-auto leading-relaxed">
                        "Your partnership with Apostle Famose in CINO is a direct investment into the restoration of God's heritage."
                    </p>

                    <button className="group relative px-20 py-10 bg-black text-white rounded-full overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                        <span className="relative z-10 font-black uppercase tracking-[0.5em] text-xs">Become a CINO Partner</span>
                        <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                </div>
            </section>

            <style jsx>{`
                .outline-gold { -webkit-text-stroke: 1.5px #C5A059; }
                @keyframes slowPan {
                    0% { transform: scale(1.05) translate(0,0); }
                    100% { transform: scale(1.15) translate(-2%,-2%); }
                }
                .animate-slowPan { animation: slowPan 25s ease-in-out infinite alternate; }
                .reveal { opacity: 0; transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(80px); }
                .reveal-left { transform: translateX(-80px); }
                .reveal-right { transform: translateX(80px); }
                .reveal-visible { opacity: 1; transform: translate(0); }
                ::-webkit-scrollbar { width: 3px; }
                ::-webkit-scrollbar-thumb { background: #C5A059; }
            `}</style>
        </main>
    );
}