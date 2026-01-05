"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PlanVisitPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        message: ''
    });

    useEffect(() => {
        setIsLoaded(true);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'visit',
                    name: formData.name,
                    email: 'visitor@website.com',
                    phone: formData.phone,
                    date: formData.date,
                    message: formData.message
                }),
            });
            if (response.ok) setFormStatus('success');
            else setFormStatus('error');
        } catch (error) { setFormStatus('error'); }
    };

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-white pt-32 selection:bg-sky selection:text-white`}>

            {/* --- 1. ELITE HERO SECTION --- */}
            <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-wine">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1471011537942-f444c36067b3?q=80&w=2070"
                        alt="Sanctuary" fill className="object-cover grayscale scale-110" priority
                    />
                </div>
                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <h4 className="reveal reveal-up text-sky font-black uppercase tracking-[1em] text-[10px] mb-8">You Are Expected</h4>
                    <h1 className="reveal reveal-up delay-100 text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8]">
                        PLAN YOUR <br /> <span className="text-white/20 italic">ENCOUNTER.</span>
                    </h1>
                </div>
            </section>

            {/* --- 2. SERVICE TIMES: ARCHITECTURAL GRID --- */}
            <section className="py-32 px-6 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Sunday Service", meta: "Prophetic Explosion", time: "9:00 AM — 12:00 PM", emoji: "🔥" },
                        { title: "Mid-Week Fire", meta: "Deep Word Study", time: "Wednesdays | 6:00 PM", emoji: "📖" },
                        { title: "Power Night", meta: "Monthly Vigil", time: "Last Fri | 10:00 PM", emoji: "⚡" }
                    ].map((item, i) => (
                        <div key={i} className="reveal reveal-up bg-[#FCFBFA] p-12 rounded-[2rem] border border-gray-100 shadow-2xl group hover:bg-wine transition-all duration-700">
                            <span className="text-4xl mb-10 block group-hover:scale-110 transition-transform">{item.emoji}</span>
                            <h3 className="text-2xl font-black text-wine group-hover:text-white uppercase tracking-tighter mb-4 transition-colors">{item.title}</h3>
                            <p className="text-gray-400 group-hover:text-white/40 font-black uppercase tracking-widest text-[9px] mb-8 italic">{item.meta}</p>
                            <p className="text-wine group-hover:text-sky font-black text-xl border-l-2 border-wine group-hover:border-sky pl-4 transition-all">{item.time}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 3. THE PROTOCOL REGISTRY (FORM) --- */}
            <section className="py-32 bg-[#F9F8F6] px-6">
                <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden grid grid-cols-1 lg:grid-cols-5">

                    {/* INFO PANEL */}
                    <div className="lg:col-span-2 bg-sky p-16 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                        <div className="relative z-10">
                            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-10">PREPARE <br /> FOR YOUR <br /> ARRIVAL</h2>
                            <p className="text-white/80 font-light italic leading-relaxed text-lg border-l border-white/30 pl-6">
                                As a first-time guest, you will be met by our hospitality team and given a personal tour of the sanctuary.
                            </p>
                        </div>
                        <div className="relative z-10 pt-12">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60 mb-2">Location Center</p>
                            <p className="text-lg font-bold uppercase tracking-tight">Lagos, Nigeria</p>
                        </div>
                    </div>

                    {/* FORM PANEL */}
                    <div className="lg:col-span-3 p-12 md:p-20">
                        {formStatus === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-4xl border border-green-100">✓</div>
                                <h3 className="text-3xl font-black text-wine uppercase tracking-tighter">Protocol Received</h3>
                                <p className="text-gray-500 italic">The church office has been notified of your encounter.</p>
                                <button onClick={() => setFormStatus('idle')} className="text-sky font-black uppercase text-[10px] tracking-[0.5em] border-b border-sky pb-2">Send New Request</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-10">
                                {formStatus === 'error' && <p className="text-red-500 text-[10px] font-black uppercase border-l-2 border-red-500 pl-4">Transmission Error. Please try again.</p>}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-2 group">
                                        <label className="text-[9px] font-black uppercase text-gray-400 tracking-[0.3em] group-focus-within:text-sky transition-colors">Full Identity</label>
                                        <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full border-b-2 border-gray-100 py-4 focus:border-sky outline-none transition-all text-lg font-light" placeholder="Enter Name" />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-[9px] font-black uppercase text-gray-400 tracking-[0.3em] group-focus-within:text-sky transition-colors">WhatsApp Number</label>
                                        <input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full border-b-2 border-gray-100 py-4 focus:border-sky outline-none transition-all text-lg font-light" placeholder="+234..." />
                                    </div>
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-[0.3em] group-focus-within:text-sky transition-colors">Preferred Date</label>
                                    <input required type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        className="w-full border-b-2 border-gray-100 py-4 focus:border-sky outline-none transition-all text-lg font-light" />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-[0.3em] group-focus-within:text-sky transition-colors">Prophetic Petitions</label>
                                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full border-b-2 border-gray-100 py-4 focus:border-sky outline-none transition-all text-lg font-light min-h-[80px]" rows={2} placeholder="Optional prayer points..." />
                                </div>
                                <button disabled={formStatus === 'submitting'} type="submit"
                                    className="w-full bg-wine text-white py-8 rounded-full font-black uppercase tracking-[0.6em] text-[10px] hover:bg-sky transition-all shadow-2xl disabled:opacity-50 active:scale-[0.98]"
                                >
                                    {formStatus === 'submitting' ? 'INITIALIZING...' : 'CONFIRM ENCOUNTER'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* --- 4. EXPECTATIONS --- */}
            <section className="py-40 px-6 max-w-6xl mx-auto">
                <h2 className="reveal reveal-up text-[10vw] md:text-6xl font-black text-wine uppercase tracking-tighter mb-24 text-center leading-none">THE <span className="text-gray-100">PROTOCOL</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="reveal reveal-left flex gap-8">
                        <span className="text-4xl font-black text-sky opacity-20">01</span>
                        <div className="space-y-4">
                            <h4 className="font-black text-wine text-xl uppercase tracking-tighter">The Atmosphere</h4>
                            <p className="text-gray-500 leading-relaxed font-light italic text-lg">Expect a high-energy, prophetic environment. Our worship is intense, and our message is raw.</p>
                        </div>
                    </div>
                    <div className="reveal reveal-right flex gap-8">
                        <span className="text-4xl font-black text-sky opacity-20">02</span>
                        <div className="space-y-4">
                            <h4 className="font-black text-wine text-xl uppercase tracking-tighter">The Assembly</h4>
                            <p className="text-gray-500 leading-relaxed font-light italic text-lg">Come as you are. Whether in a formal suit or casual attire, you are family from the moment you step in.</p>
                        </div>
                    </div>
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