"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function ContactPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handlePrayerSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('sent'), 3000);
    };

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505] selection:bg-[#C5A059] selection:text-black overflow-x-hidden`}>

            {/* --- 1. THE MONUMENTAL HERO (ADJUSTED FOR HEADER) --- */}
            <section className="relative min-h-screen flex flex-col justify-center items-center pt-40 pb-20 px-6 overflow-hidden border-b border-white/5">
                {/* Cinematic Background */}
                <motion.div style={{ opacity: opacityHero }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0A192F] via-transparent to-transparent opacity-40"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                </motion.div>

                <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-4 mb-10 px-6 py-2 border border-[#C5A059]/30 rounded-full backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]"></span>
                        </span>
                        <span className="text-[#C5A059] font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">Channels of Grace Open</span>
                    </motion.div>

                    <motion.div style={{ y: yHero }}>
                        <h1 className="text-[13vw] md:text-[11vw] font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
                            TOUCH THE <br />
                            <span className="italic text-transparent outline-text">ALTAR.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="max-w-2xl mx-auto"
                    >
                        <p className="text-white/40 text-xl md:text-2xl font-light italic leading-relaxed">
                            A direct portal to the Apostolic Secretariat. Your voice, your vision, and your petitions are received with kingdom priority.
                        </p>
                    </motion.div>
                </div>

                {/* Floating Scroll Decorative Element */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-[#C5A059] to-transparent"></div>
                </div>
            </section>

            {/* --- 2. DUAL TRANSMISSION CHANNELS (PHONE NUMBERS) --- */}
            <section className="relative z-20 -mt-10 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-[#C5A059]/20 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="bg-[#0A192F] p-12 md:p-20 group hover:bg-[#0c1e38] transition-all duration-700">
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <p className="text-[#C5A059] font-black uppercase tracking-widest text-[10px] mb-6">Primary Liaison</p>
                            <h3 className="text-white text-4xl md:text-5xl font-black tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-500 origin-left">
                                +234 805 404 9868
                            </h3>
                        </div>
                        <p className="text-white/30 text-sm font-light italic uppercase tracking-widest mt-8 group-hover:text-[#C5A059] transition-colors">Apostolic Response Center</p>
                    </div>
                </div>

                <div className="bg-[#050505] p-12 md:p-20 group hover:bg-[#0a0a0a] transition-all duration-700">
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <p className="text-[#C5A059] font-black uppercase tracking-widest text-[10px] mb-6">Secondary Fireline</p>
                            <h3 className="text-white text-4xl md:text-5xl font-black tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-500 origin-left">
                                +234 905 340 1233
                            </h3>
                        </div>
                        <p className="text-white/30 text-sm font-light italic uppercase tracking-widest mt-8 group-hover:text-[#C5A059] transition-colors">ELOI Fire Emergency Line</p>
                    </div>
                </div>
            </section>

            {/* --- 3. THE PROPHETIC TERMINAL (PETITION FORM) --- */}
            <section className="py-40 px-6 relative">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    <div className="space-y-12">
                        <div className="reveal">
                            <h2 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
                                LODGE YOUR <br /> <span className="text-[#C5A059]">RECORD.</span>
                            </h2>
                            <p className="text-white/40 text-xl font-light italic leading-relaxed">
                                Every name submitted here is mentioned during the "One in a Million" intercessory hours. This is not just a form; it is a digital seed.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8 reveal">
                            <div className="border-l border-[#C5A059]/30 pl-6">
                                <p className="text-white text-2xl font-black">24h</p>
                                <p className="text-white/30 text-[10px] uppercase tracking-widest">Secretariat Review</p>
                            </div>
                            <div className="border-l border-[#C5A059]/30 pl-6">
                                <p className="text-white text-2xl font-black">100%</p>
                                <p className="text-white/30 text-[10px] uppercase tracking-widest">Confidentiality</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0A192F]/30 backdrop-blur-3xl p-8 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.5)]">
                        <AnimatePresence mode="wait">
                            {status === 'sent' ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="py-20 text-center space-y-8"
                                >
                                    <div className="w-24 h-24 bg-[#C5A059] rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(197,160,89,0.3)]">
                                        <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <h3 className="text-white text-3xl font-black uppercase tracking-tighter">Ascended in Glory</h3>
                                    <button onClick={() => setStatus('idle')} className="text-[#C5A059] uppercase tracking-widest text-[10px] font-black border-b border-[#C5A059] pb-2">Send Another Request</button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handlePrayerSubmit} className="space-y-12">
                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-black uppercase text-white/20 tracking-widest group-focus-within:text-[#C5A059] transition-colors">Identified Petitioner</label>
                                        <input required type="text" className="w-full bg-transparent border-b border-white/10 focus:border-[#C5A059] py-4 text-white text-xl font-light italic outline-none transition-all" placeholder="Enter Full Name" />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-black uppercase text-white/20 tracking-widest group-focus-within:text-[#C5A059] transition-colors">Manifestation Type</label>
                                        <select className="w-full bg-transparent border-b border-white/10 focus:border-[#C5A059] py-4 text-white text-xl font-light italic outline-none transition-all appearance-none cursor-pointer">
                                            <option className="bg-[#0A192F]">Prophetic Guidance</option>
                                            <option className="bg-[#0A192F]">Healing & Deliverance</option>
                                            <option className="bg-[#0A192F]">Financial Breakthrough</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-black uppercase text-white/20 tracking-widest group-focus-within:text-[#C5A059] transition-colors">Detailed Petition</label>
                                        <textarea required rows={4} className="w-full bg-transparent border-b border-white/10 focus:border-[#C5A059] py-4 text-white text-xl font-light italic outline-none transition-all resize-none" placeholder="Explain the situation..."></textarea>
                                    </div>

                                    <button disabled={status === 'sending'} className="w-full py-8 bg-[#C5A059] hover:bg-white text-black font-black uppercase tracking-[0.6em] text-[10px] rounded-2xl transition-all duration-500 transform hover:scale-[1.02] shadow-[0_20px_40px_rgba(197,160,89,0.2)]">
                                        {status === 'sending' ? 'Transmitting...' : 'Commit to the Prophetic Desk'}
                                    </button>
                                </form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* --- 4. THE GLOBAL SECRETARIAT EMAIL --- */}
            <section className="py-20 bg-white group cursor-pointer overflow-hidden">
                <div className="flex whitespace-nowrap">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex gap-20 items-center text-[8vw] font-black lowercase text-black"
                    >
                        <span>eloigospelchurch@gmail.com</span>
                        <span className="text-[#C5A059] italic">— contact the secretariat —</span>
                        <span>eloigospelchurch@gmail.com</span>
                        <span className="text-[#C5A059] italic">— contact the secretariat —</span>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
                .outline-text {
                    -webkit-text-stroke: 1.5px rgba(255,255,255,0.4);
                }
                .reveal { 
                    opacity: 0; 
                    transform: translateY(40px); 
                    transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); 
                }
                .reveal-visible { 
                    opacity: 1; 
                    transform: translateY(0); 
                }
                ::-webkit-scrollbar { width: 5px; }
                ::-webkit-scrollbar-thumb { background: #C5A059; border-radius: 10px; }
            `}</style>
        </main>
    );
}