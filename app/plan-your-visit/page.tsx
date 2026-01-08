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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#fcfbf9] selection:bg-[#C5A059] selection:text-white`}>

            {/* --- 1. THE SOVEREIGN HERO (DEEP BLUE & GOLD) --- */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A192F]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1471011537942-f444c36067b3?q=80&w=2070"
                        alt="Sanctuary Atmosphere" fill className="object-cover scale-105 animate-slowZoom opacity-50" priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/40 to-[#fcfbf9] z-10" />
                </div>

                {/* Content Pushed 35vh for Header Clearance */}
                <div className="relative z-20 text-center px-6 max-w-[1400px] pt-[35vh]">
                    <div className="reveal reveal-up flex items-center justify-center gap-6 mb-10">
                        <div className="h-px w-20 bg-[#C5A059]" />
                        <h4 className="text-[#C5A059] font-black uppercase tracking-[0.8em] text-[10px] md:text-xs">Exclusively Expected</h4>
                        <div className="h-px w-20 bg-[#C5A059]" />
                    </div>

                    <h1 className="reveal reveal-up delay-100 text-7xl md:text-[10vw] font-black text-white uppercase tracking-tighter leading-[0.8] mb-8">
                        PLAN YOUR <br /> <span className="text-[#C5A059] italic font-serif lowercase">encounter.</span>
                    </h1>

                    <p className="reveal reveal-up delay-200 text-white/70 font-light text-2xl italic tracking-wide mt-12 max-w-2xl mx-auto">
                        "Your divine appointment has been pre-destined. We have prepared a seat for your arrival."
                    </p>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
                    <span className="uppercase text-[#C5A059] font-black text-[9px] tracking-[0.4em]">Scroll</span>
                    <div className="w-px h-16 bg-gradient-to-b from-[#C5A059] to-transparent" />
                </div>
            </section>

            {/* --- 2. THE APPOINTMENT WINDOWS (HIGH CONTRAST) --- */}
            <section className="py-60 px-6 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {[
                        { title: "Sunday Service", meta: "Prophetic Explosion", time: "9:00 AM — 12:00 PM", icon: "🔥" },
                        { title: "Mid-Week Fire", meta: "Deep Word Study", time: "Wednesdays | 6:00 PM", icon: "📖" },
                        { title: "Power Night", meta: "Monthly Vigil", time: "Last Fri | 10:00 PM", icon: "⚡" }
                    ].map((item, i) => (
                        <div key={i} className="reveal reveal-up bg-white p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(10,25,47,0.08)] border border-gray-100 group hover:bg-[#0A192F] transition-all duration-700 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-full translate-x-10 -translate-y-10 group-hover:bg-white/5" />
                            <span className="text-7xl mb-12 block group-hover:scale-110 transition-transform duration-500">{item.icon}</span>
                            <h3 className="text-4xl font-black text-[#0A192F] group-hover:text-white uppercase tracking-tighter mb-4 leading-none transition-colors">{item.title}</h3>
                            <p className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] mb-12 italic">{item.meta}</p>
                            <div className="flex items-center gap-6 border-l-4 border-[#C5A059] pl-8 transition-all group-hover:border-white">
                                <p className="text-[#0A192F] group-hover:text-white font-black text-2xl tracking-tighter transition-colors">{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 3. THE PROTOCOL REGISTRY (DEEP BLUE & BLACK FORM) --- */}
            <section className="py-48 bg-[#0A192F] px-6">
                <div className="max-w-7xl mx-auto bg-white rounded-[5rem] shadow-[0_80px_150px_-30px_rgba(0,0,0,0.5)] overflow-hidden grid grid-cols-1 lg:grid-cols-5">

                    {/* BLACK & GOLD INFO PANEL */}
                    <div className="lg:col-span-2 bg-black p-20 md:p-28 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <h2 className="text-[30vw] font-black text-[#C5A059] leading-none -rotate-12 translate-x-20">VIP</h2>
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-12">THE <br /> ROYAL <br /> PROTOCOL</h2>
                            <p className="text-white/60 font-light italic leading-relaxed text-2xl border-l-2 border-[#C5A059] pl-10">
                                "We treat every first-time guest as a Kingdom dignitary. Your visit is coordinated from the moment you park."
                            </p>
                        </div>
                        <div className="relative z-10 pt-20 border-t border-white/10">
                            <p className="text-[#C5A059] font-black uppercase tracking-[0.5em] text-[10px] mb-4">Location</p>
                            <p className="text-3xl font-black uppercase tracking-tighter">Lagos Headquarters</p>
                        </div>
                    </div>

                    {/* FORM PANEL */}
                    <div className="lg:col-span-3 p-16 md:p-32 bg-white">
                        {formStatus === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-12">
                                <div className="w-32 h-32 bg-[#C5A059]/10 text-[#C5A059] rounded-full flex items-center justify-center text-6xl shadow-inner">✓</div>
                                <h3 className="text-5xl font-black text-[#0A192F] uppercase tracking-tighter leading-none">REGISTRY <br /> CONFIRMED</h3>
                                <p className="text-gray-500 italic text-2xl font-light">The Protocol office has been notified of your encounter.</p>
                                <button onClick={() => setFormStatus('idle')} className="text-[#C5A059] font-black uppercase text-xs tracking-[0.6em] border-b-2 border-[#C5A059] pb-2">Send New Request</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-16">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                    <div className="space-y-4 group">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em] group-focus-within:text-[#C5A059] transition-colors">Full Identity</label>
                                        <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full border-b-4 border-gray-100 py-6 focus:border-[#C5A059] outline-none transition-all text-2xl font-bold text-[#0A192F]" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-4 group">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em] group-focus-within:text-[#C5A059] transition-colors">WhatsApp Contact</label>
                                        <input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full border-b-4 border-gray-100 py-6 focus:border-[#C5A059] outline-none transition-all text-2xl font-bold text-[#0A192F]" placeholder="+234..." />
                                    </div>
                                </div>
                                <div className="space-y-4 group">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em] group-focus-within:text-[#C5A059] transition-colors">Encounter Date</label>
                                    <input required type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        className="w-full border-b-4 border-gray-100 py-6 focus:border-[#C5A059] outline-none transition-all text-2xl font-bold text-[#0A192F]" />
                                </div>
                                <div className="space-y-4 group">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em] group-focus-within:text-[#C5A059] transition-colors">Prophetic Petitions</label>
                                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full border-b-4 border-gray-100 py-6 focus:border-[#C5A059] outline-none transition-all text-2xl font-bold text-[#0A192F] min-h-[120px] resize-none" placeholder="Optional prayer points..." />
                                </div>
                                <button disabled={formStatus === 'submitting'} type="submit"
                                    className="w-full bg-[#0A192F] text-white py-12 rounded-full font-black uppercase tracking-[0.8em] text-[10px] md:text-xs hover:bg-[#C5A059] transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] hover:scale-[1.02] active:scale-95"
                                >
                                    {formStatus === 'submitting' ? 'TRANSMITTING...' : 'BOOK MY ENCOUNTER'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* --- 4. THE EXPERIENCE --- */}
            <section className="py-60 px-6 max-w-[1400px] mx-auto text-center">
                <h2 className="reveal reveal-up text-6xl md:text-[8vw] font-black text-[#0A192F] uppercase tracking-tighter mb-40 leading-none">THE <br /> <span className="text-[#C5A059]">EXPECTATION.</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                    <div className="reveal reveal-left flex flex-col items-center gap-10">
                        <div className="w-28 h-28 bg-[#0A192F] text-[#C5A059] rounded-full flex items-center justify-center text-5xl font-black shadow-2xl">01</div>
                        <h4 className="text-4xl font-black text-black uppercase tracking-tighter">The Fire</h4>
                        <p className="text-gray-500 text-2xl font-light italic leading-relaxed max-w-md">Expect raw, unfiltered prophetic worship and a word that cuts through the noise of life.</p>
                    </div>
                    <div className="reveal reveal-right flex flex-col items-center gap-10">
                        <div className="w-28 h-28 bg-[#C5A059] text-white rounded-full flex items-center justify-center text-5xl font-black shadow-2xl">02</div>
                        <h4 className="text-4xl font-black text-black uppercase tracking-tighter">The Family</h4>
                        <p className="text-gray-500 text-2xl font-light italic leading-relaxed max-w-md">From the parking lot to the altar, you are not a stranger. You are home.</p>
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
            `}</style>
        </main>
    );
}