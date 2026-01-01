"use client";
import React, { useEffect, useState } from 'react';

export default function ContactPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, []);

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#FDFCFB] min-h-screen pt-32 pb-20`}>

            {/* 1. SECTION: THE CONNECTION HERO */}
            <section className="px-6 max-w-7xl mx-auto text-center space-y-6 mb-20">
                <h4 className="reveal reveal-up text-sky font-black uppercase tracking-[0.5em] text-xs">Stay Connected</h4>
                <h1 className="reveal reveal-up delay-100 text-5xl md:text-8xl font-black text-wine uppercase tracking-tighter leading-none">
                    Reach Out <br /> <span className="text-gray-300 italic">to Eloi</span>
                </h1>
                <p className="reveal reveal-up delay-200 text-xl text-gray-500 font-light max-w-2xl mx-auto">
                    Whether you need prayer, counseling, or want to share a testimony, our doors and hearts are open.
                </p>
            </section>

            <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* 2. CONTACT & LOCATION (LEFT) */}
                <div className="space-y-12">
                    <div className="reveal reveal-left bg-white p-10 rounded-[3rem] shadow-xl shadow-gray-100 border border-gray-50 group hover:-translate-y-2 transition-transform duration-500">
                        <h3 className="text-wine font-black text-2xl uppercase mb-8 flex items-center gap-4">
                            <span className="w-10 h-10 bg-wine/5 rounded-full flex items-center justify-center text-wine">📍</span>
                            The Sanctuary
                        </h3>
                        <p className="text-2xl text-gray-800 font-bold leading-tight">
                            3rd Floor, Express Building, <br />
                            Opp. Bolumole Junction, <br />
                            Ring Road, Ibadan.
                        </p>
                        <div className="mt-8 pt-8 border-t border-gray-50 space-y-4">
                            <div className="flex items-center gap-4 text-gray-600">
                                <span className="font-black text-sky text-xs uppercase tracking-widest">Call:</span>
                                <span className="font-bold">+234 (0) 80X XXX XXXX</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600">
                                <span className="font-black text-sky text-xs uppercase tracking-widest">Email:</span>
                                <span className="font-bold">info@eloigospel.org</span>
                            </div>
                        </div>
                    </div>

                    {/* INTERACTIVE PRAYER REQUEST FORM */}
                    <div className="reveal reveal-left delay-200 bg-gray-900 p-10 rounded-[3rem] text-white space-y-6">
                        <h3 className="text-sky font-black text-2xl uppercase">Send a Prayer Request</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-sky transition-colors" />
                            <textarea placeholder="Your Prayer Point" rows={4} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-sky transition-colors resize-none"></textarea>
                            <button className="w-full bg-sky text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-wine transition-all duration-500">
                                Submit Request
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3. GIVING PORTAL (RIGHT) */}
                <div className="reveal reveal-right bg-white p-12 rounded-[4rem] border-2 border-sky/20 shadow-2xl relative overflow-hidden flex flex-col justify-center">
                    {/* Decorative Background for Trust */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-sky font-black text-sm uppercase tracking-[0.3em]">Support the Vision</h2>
                            <h3 className="text-5xl font-black text-wine uppercase tracking-tighter">Sow a Seed</h3>
                        </div>

                        <p className="text-gray-500 text-lg leading-relaxed">
                            Your giving empowers the **"One in a Million"** revival. Partner with ELOI Gospel Evangelical Church in taking the fire of the Gospel to the ends of the earth.
                        </p>

                        {/* ACCOUNT DETAILS CARD */}
                        <div className="bg-[#FDFCFB] p-8 rounded-[2.5rem] border border-gray-100 space-y-6 group hover:border-sky transition-colors duration-500">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Bank Details</span>
                                <div className="w-12 h-8 bg-wine/10 rounded flex items-center justify-center font-black text-wine text-[10px]">ELOI</div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-black text-sky uppercase">Account Name</p>
                                <p className="text-2xl font-bold text-gray-800">ELOI GOSPEL CHURCH</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-black text-sky uppercase">Account Number</p>
                                <p className="text-4xl font-black text-wine tracking-tighter">0123456789</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-black text-sky uppercase">Bank Name</p>
                                <p className="text-xl font-bold text-gray-800 tracking-widest">ZENITH BANK</p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] text-center italic">
                                "God loves a cheerful giver — 2 Corinthians 9:7"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1); }
                .reveal-up { transform: translateY(60px); }
                .reveal-left { transform: translateX(-60px); }
                .reveal-right { transform: translateX(60px); }
                .reveal-visible { opacity: 1; transform: translate(0); }
            `}</style>
        </main>
    );
}