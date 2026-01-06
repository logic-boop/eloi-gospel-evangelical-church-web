"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PartnershipPage() {
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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505] pt-32 selection:bg-sky selection:text-white`}>

            {/* --- 1. THE MANDATE HERO --- */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"
                        alt="Grace" fill className="object-cover grayscale opacity-30 scale-110" priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-7xl">
                    <motion.h4
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "1em" }}
                        className="text-sky font-black uppercase text-[10px] mb-8"
                    >
                        Covenant Alignment
                    </motion.h4>
                    <h1 className="reveal reveal-up text-[11vw] md:text-[9vw] font-black text-white uppercase tracking-tighter leading-[0.8]">
                        KINGDOM <br /> <span className="text-transparent border-b-4 border-white/10 italic">PARTNERS.</span>
                    </h1>
                    <p className="reveal reveal-up delay-200 mt-12 text-white/40 text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
                        "Not because I desire a gift: but I desire fruit that may abound to your account." — Philippians 4:17
                    </p>
                </div>
            </section>

            {/* --- 2. THE THREE PILLARS OF PARTNERSHIP --- */}
            <section className="py-40 px-6 max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                    {[
                        { title: "Prophetic Crusades", desc: "Taking the fire to the unreached territories across the globe.", accent: "bg-wine" },
                        { title: "CINO Mission", desc: "Feeding, clothing, and empowering the fatherless and the vulnerable.", accent: "bg-sky" },
                        { title: "Global Media", desc: "Saturating the airwaves with the word of restoration and power.", accent: "bg-white" }
                    ].map((pillar, i) => (
                        <div key={i} className="reveal reveal-up group relative bg-[#0A0A0A] p-16 md:p-24 border border-white/5 overflow-hidden transition-all duration-700 hover:bg-[#0F0F0F]">
                            <div className={`absolute top-0 left-0 w-full h-1 ${pillar.accent} opacity-20 group-hover:opacity-100 transition-opacity`} />
                            <span className="text-white/5 font-black text-9xl absolute -bottom-10 -right-10">0{i + 1}</span>
                            <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">{pillar.title}</h3>
                            <p className="text-white/40 text-lg font-light italic leading-relaxed relative z-10">{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 3. THE GIVING PORTAL: DETAILED ACCOUNTS --- */}
            <section className="py-40 bg-[#080808] border-y border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32">

                    <div className="reveal reveal-left flex flex-col justify-center">
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                            THE <span className="text-sky">SEED</span> OF <br /> LEGACY.
                        </h2>
                        <div className="space-y-8 text-white/40 text-xl font-light italic leading-relaxed border-l-2 border-wine pl-12">
                            <p>Every seed sown into this mandate is handled with the highest level of kingdom integrity and accountability.</p>
                            <p>As you partner with the Apostle, you are not just giving to a church; you are investing in a global movement of restoration.</p>
                        </div>
                    </div>

                    <div className="reveal reveal-right space-y-8">
                        {/* LOCAL BANKING */}
                        <div className="bg-wine/10 border border-wine/20 p-12 rounded-sm group hover:border-wine transition-all">
                            <p className="text-wine font-black uppercase tracking-[0.4em] text-[10px] mb-4">Local (Naira) Protocol</p>
                            <h4 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Sterling Bank</h4>
                            <p className="text-sky text-2xl font-black tracking-widest mb-4">0510451553</p>
                            <p className="text-white/30 text-xs font-black uppercase">Account Name: eloi gospel evangelical church</p>
                        </div>

                        {/* INTERNATIONAL PROTOCOL */}
                        <div className="bg-sky/10 border border-sky/20 p-12 rounded-sm group hover:border-sky transition-all">
                            <p className="text-sky font-black uppercase tracking-[0.4em] text-[10px] mb-4">International (USD/GBP) Protocol</p>
                            <h4 className="text-3xl font-black text-white uppercase tracking-tight mb-4">Online Gateway</h4>
                            <button className="w-full bg-white text-black py-6 font-black uppercase tracking-[0.6em] text-[10px] hover:bg-sky hover:text-white transition-all">
                                Launch Secure Payment
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. THE COVENANT PARTNER FORM --- */}
            <section className="py-40 px-6 max-w-4xl mx-auto text-center">
                <div className="reveal reveal-up space-y-12">
                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Become a <span className="text-sky">Covenant</span> Partner</h2>
                    <p className="text-white/40 text-lg font-light italic">Leave your details below to receive a personal welcome call from the Partnership Office and a monthly prophetic update from the Apostle.</p>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-white/20 tracking-widest">Full Name</label>
                            <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-sky outline-none transition-all text-white font-light" placeholder="Identity" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-white/20 tracking-widest">WhatsApp Number</label>
                            <input type="tel" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-sky outline-none transition-all text-white font-light" placeholder="+234..." />
                        </div>
                        <button className="md:col-span-2 bg-wine text-white py-8 font-black uppercase tracking-[0.8em] text-[10px] hover:bg-white hover:text-black transition-all mt-12">
                            Join the Mandate
                        </button>
                    </form>
                </div>
            </section>

            <style jsx>{`
                .reveal { opacity: 0; transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(60px); }
                .reveal-left { transform: translateX(-60px); }
                .reveal-right { transform: translateX(60px); }
                .reveal-visible { opacity: 1; transform: translate(0); }
            `}</style>
        </main>
    );
}