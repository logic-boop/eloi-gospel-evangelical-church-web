"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PartnershipPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll();

    // Parallax for that premium "depth" feel
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    useEffect(() => {
        setIsLoaded(true);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
            });
        }, { threshold: 0.15 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, []);

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505] selection:bg-[#C5A059] selection:text-black overflow-x-hidden`}>

            {/* --- 1. THE IMPERIAL HERO (ADJUSTED FOR HEADER) --- */}
            <section className="relative h-[110vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                <motion.div style={{ opacity: opacityHero }} className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"
                        alt="Covenant" fill className="object-cover grayscale opacity-20 scale-110" priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-7xl pt-20">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="inline-block px-8 py-2 border border-[#C5A059]/30 rounded-full mb-12"
                    >
                        <span className="text-[#C5A059] font-black uppercase tracking-[0.6em] text-[10px]">Covenant Alignment</span>
                    </motion.div>

                    <motion.div style={{ y: yHero }}>
                        <h1 className="reveal reveal-up text-[12vw] md:text-[10vw] font-black text-white uppercase tracking-tighter leading-[0.75]">
                            THE <span className="text-transparent outline-text italic">LEGACY.</span> <br />
                            <span className="text-[#C5A059]">PARTNERSHIP.</span>
                        </h1>
                    </motion.div>

                    <p className="reveal reveal-up delay-300 mt-16 text-white/40 text-xl md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed">
                        "I desire fruit that may abound to your account." — Philippians 4:17. <br />
                        <span className="text-white/60 block mt-4">Become one of the foundational pillars of the One in a Million mandate.</span>
                    </p>
                </div>
            </section>

            {/* --- 2. THE 5% VISION (SPECIAL SECTION) --- */}
            <section className="py-40 bg-black border-y border-white/5 relative">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="reveal reveal-left">
                        <h4 className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-xs mb-8">Strategic Alignment</h4>
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-10">
                            GLOBAL <br /> <span className="italic opacity-30">EQUITY.</span>
                        </h2>
                        <p className="text-white/50 text-xl font-light italic leading-relaxed max-w-lg">
                            An invitation to the faithful. By aligning with the mandate, you are securing a spiritual share in the harvest of 1,000,000 souls.
                        </p>
                    </div>
                    <div className="reveal reveal-right relative p-12 bg-[#0A192F] border border-[#C5A059]/20 rounded-3xl overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-[12rem] font-black text-[#C5A059]/5 select-none">5%</div>
                        <h3 className="text-[#C5A059] text-5xl font-black mb-6">5% SHARE</h3>
                        <p className="text-white text-lg font-light leading-relaxed mb-8">
                            A specific covenant offer for major stakeholders who wish to provide the 5% foundation share for global infrastructure and CINO missions.
                        </p>
                        <div className="h-px w-full bg-[#C5A059]/30 mb-8"></div>
                        <p className="text-[#C5A059] font-black uppercase tracking-[0.2em] text-xs underline cursor-pointer hover:text-white transition-colors">Inquire about Strategic Partnership</p>
                    </div>
                </div>
            </section>

            {/* --- 3. THE ACCOUNT LEDGER (GIVING) --- */}
            <section className="py-40 px-6 max-w-[1600px] mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">THE <span className="text-[#C5A059]">TREASURY</span></h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* DOMESTIC LEDGER */}
                    <div className="reveal reveal-up bg-[#0A192F]/40 p-12 md:p-24 border border-white/5 backdrop-blur-xl group hover:border-[#C5A059]/40 transition-all duration-700">
                        <div className="flex justify-between items-start mb-12">
                            <h4 className="text-white text-4xl font-black uppercase tracking-tighter">Local <br /> Protocol</h4>
                            <span className="text-[#C5A059] font-black text-xs uppercase tracking-[0.4em]">Naira — NGN</span>
                        </div>
                        <div className="space-y-12">
                            <div>
                                <p className="text-white/30 text-[10px] uppercase font-black tracking-widest mb-4">Financial Institution</p>
                                <p className="text-3xl text-white font-light italic">Sterling Bank</p>
                            </div>
                            <div>
                                <p className="text-white/30 text-[10px] uppercase font-black tracking-widest mb-4">Vault Account Number</p>
                                <p className="text-5xl md:text-6xl text-white font-black tracking-tighter group-hover:text-[#C5A059] transition-colors">0510451553</p>
                            </div>
                            <div>
                                <p className="text-white/30 text-[10px] uppercase font-black tracking-widest mb-4">Official Beneficiary</p>
                                <p className="text-xl text-white/70 uppercase font-medium">Eloi Gospel Evangelical Church</p>
                            </div>
                        </div>
                    </div>

                    {/* INTERNATIONAL LEDGER */}
                    <div className="reveal reveal-up bg-black p-12 md:p-24 border border-white/5 group hover:border-[#C5A059]/40 transition-all duration-700">
                        <div className="flex justify-between items-start mb-12">
                            <h4 className="text-white text-4xl font-black uppercase tracking-tighter">Global <br /> Protocol</h4>
                            <span className="text-[#C5A059] font-black text-xs uppercase tracking-[0.4em]">USD — GBP — EUR</span>
                        </div>
                        <div className="space-y-12">
                            <p className="text-white/40 text-xl font-light italic leading-relaxed">
                                For international bank transfers, wire protocols, or cryptocurrency partnership, please utilize our secure portal.
                            </p>
                            <button className="w-full py-10 border border-[#C5A059]/30 bg-transparent group-hover:bg-[#C5A059] transition-all duration-700 relative overflow-hidden">
                                <span className="relative z-10 text-[#C5A059] group-hover:text-black font-black uppercase tracking-[0.8em] text-xs">Access Secure Gateway</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. COVENANT FORM --- */}
            <section className="py-40 px-6 bg-[#050505] border-t border-white/5">
                <div className="max-w-4xl mx-auto reveal reveal-up">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">SEAL YOUR <span className="text-[#C5A059]">COVENANT.</span></h2>
                        <p className="text-white/40 italic font-light">Enter the registry of global partners to receive Apostolic updates.</p>
                    </div>

                    <form className="space-y-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="border-b border-white/10 pb-4 focus-within:border-[#C5A059] transition-colors">
                                <label className="text-[10px] font-black uppercase text-[#C5A059] tracking-widest mb-4 block">Identity</label>
                                <input type="text" className="w-full bg-transparent outline-none text-white text-2xl font-light italic" placeholder="Full Name" />
                            </div>
                            <div className="border-b border-white/10 pb-4 focus-within:border-[#C5A059] transition-colors">
                                <label className="text-[10px] font-black uppercase text-[#C5A059] tracking-widest mb-4 block">Communication</label>
                                <input type="tel" className="w-full bg-transparent outline-none text-white text-2xl font-light italic" placeholder="WhatsApp Number" />
                            </div>
                        </div>
                        <button className="w-full group py-12 bg-black border border-white/10 hover:border-[#C5A059] transition-all duration-700 relative">
                            <span className="text-white group-hover:text-[#C5A059] font-black uppercase tracking-[1em] text-xs">Enroll in the Mandate</span>
                        </button>
                    </form>
                </div>
            </section>

            <style jsx>{`
                .outline-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.3);
                }
                .reveal { opacity: 0; transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(60px); }
                .reveal-left { transform: translateX(-60px); }
                .reveal-right { transform: translateX(60px); }
                .reveal-visible { opacity: 1; transform: translate(0); }
            `}</style>
        </main>
    );
}