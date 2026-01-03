"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PlanVisitPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [formStatus, setFormStatus] = useState('idle');

    useEffect(() => {
        setIsLoaded(true);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => setFormStatus('success'), 1500);
    };

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-white pt-32`}>

            {/* 1. ELITE HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-wine">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1471011537942-f444c36067b3?q=80&w=2070&auto=format&fit=crop"
                        alt="Sanctuary" fill className="object-cover grayscale"
                    />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h4 className="reveal reveal-up text-sky font-black uppercase tracking-[0.5em] text-[10px] mb-4">You Are Expected</h4>
                    <h1 className="reveal reveal-up delay-100 text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                        Plan Your <br /> <span className="text-white/20 italic">Encounter</span>
                    </h1>
                </div>
            </section>

            {/* 2. THE CONCIERGE EXPERIENCE (Service Times) */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="reveal reveal-up bg-[#FCFBFA] p-12 rounded-[3rem] border border-gray-100 shadow-xl group hover:bg-wine transition-all duration-700">
                        <span className="text-4xl mb-6 block">🔥</span>
                        <h3 className="text-2xl font-black text-wine group-hover:text-white uppercase mb-4">Sunday Service</h3>
                        <p className="text-gray-500 group-hover:text-white/60 font-light mb-6 uppercase tracking-widest text-xs">Prophetic Explosion</p>
                        <p className="text-wine group-hover:text-sky font-black text-xl">9:00 AM — 12:00 PM</p>
                    </div>

                    <div className="reveal reveal-up delay-100 bg-[#FCFBFA] p-12 rounded-[3rem] border border-gray-100 shadow-xl group hover:bg-wine transition-all duration-700">
                        <span className="text-4xl mb-6 block">📖</span>
                        <h3 className="text-2xl font-black text-wine group-hover:text-white uppercase mb-4">Mid-Week Fire</h3>
                        <p className="text-gray-500 group-hover:text-white/60 font-light mb-6 uppercase tracking-widest text-xs">Deep Word Study</p>
                        <p className="text-wine group-hover:text-sky font-black text-xl">Wednesdays | 6:00 PM</p>
                    </div>

                    <div className="reveal reveal-up delay-200 bg-[#FCFBFA] p-12 rounded-[3rem] border border-gray-100 shadow-xl group hover:bg-wine transition-all duration-700">
                        <span className="text-4xl mb-6 block">⚡</span>
                        <h3 className="text-2xl font-black text-wine group-hover:text-white uppercase mb-4">Power Night</h3>
                        <p className="text-gray-500 group-hover:text-white/60 font-light mb-6 uppercase tracking-widest text-xs">Monthly Vigil</p>
                        <p className="text-wine group-hover:text-sky font-black text-xl">Last Fri | 10:00 PM</p>
                    </div>
                </div>
            </section>

            {/* 3. RESERVATION FORM - PREMUM DESIGN */}
            <section className="py-24 bg-[#F9F8F6] px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-[4rem] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2 bg-sky p-12 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter leading-none mb-6">Let Us <br /> Prepare For <br /> Your Arrival</h2>
                            <p className="text-white/70 font-light italic">As a first-time guest, you will be met by our hospitality team and given a personal tour of the sanctuary.</p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em]">Location Office</p>
                            <p className="text-sm font-bold">Lagos, Nigeria (Full address via SMS)</p>
                        </div>
                    </div>

                    <div className="md:col-span-3 p-12">
                        {formStatus === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl">✓</div>
                                <h3 className="text-2xl font-black text-wine uppercase">We Are Ready!</h3>
                                <p className="text-gray-500">Check your email for your personalized visit itinerary.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Full Name</label>
                                        <input required type="text" className="w-full border-b-2 border-gray-100 py-3 focus:border-sky outline-none transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">WhatsApp Number</label>
                                        <input required type="tel" className="w-full border-b-2 border-gray-100 py-3 focus:border-sky outline-none transition-colors" placeholder="+234..." />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Select Date of Visit</label>
                                    <input required type="date" className="w-full border-b-2 border-gray-100 py-3 focus:border-sky outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Any Prayer Requests?</label>
                                    <textarea className="w-full border-b-2 border-gray-100 py-3 focus:border-sky outline-none transition-colors" rows={2} placeholder="Optional..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-wine text-white py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-sky transition-all shadow-xl">
                                    {formStatus === 'submitting' ? 'Processing...' : 'Confirm My Visit'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* 4. FREQUENTLY ASKED (WHAT TO EXPECT) */}
            <section className="py-32 px-6 max-w-5xl mx-auto">
                <h2 className="reveal reveal-up text-4xl font-black text-wine uppercase tracking-tighter mb-16 text-center">What To <span className="text-gray-300">Expect</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="reveal reveal-left space-y-4">
                        <h4 className="font-black text-sky text-xs uppercase tracking-widest italic">01. The Atmosphere</h4>
                        <p className="text-gray-600 leading-relaxed font-light">Expect a high-energy, prophetic environment. Our worship is intense, and our message is raw. We believe in the literal manifestation of God's power.</p>
                    </div>
                    <div className="reveal reveal-right space-y-4">
                        <h4 className="font-black text-sky text-xs uppercase tracking-widest italic">02. Dress Code</h4>
                        <p className="text-gray-600 leading-relaxed font-light">Come as you are. Whether in a formal suit or casual attire, you are part of the One in a Million family. We value your heart over your appearance.</p>
                    </div>
                    <div className="reveal reveal-left space-y-4">
                        <h4 className="font-black text-sky text-xs uppercase tracking-widest italic">03. The Children</h4>
                        <p className="text-gray-600 leading-relaxed font-light">We have a world-class children's ministry that mirrors our vision. Your kids will be taught the word in a way that activates their prophetic destiny.</p>
                    </div>
                    <div className="reveal reveal-right space-y-4">
                        <h4 className="font-black text-sky text-xs uppercase tracking-widest italic">04. Parking & Arrival</h4>
                        <p className="text-gray-600 leading-relaxed font-light">Our guest parking team will be waiting for you. We recommend arriving 15 minutes early to enjoy a pre-service briefing and coffee.</p>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(40px); }
                .reveal-left { transform: translateX(-40px); }
                .reveal-right { transform: translateX(40px); }
                .reveal-visible { opacity: 1; transform: translate(0); }
            `}</style>
        </main>
    );
}