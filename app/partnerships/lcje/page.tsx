"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LCJEPage() {
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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#fdfbf7] text-[#1a1a1a]`}>

            {/* 1. HERITAGE HERO SECTION */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#0a192f]">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image
                        src="https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1974&auto=format&fit=crop"
                        alt="Jerusalem Heritage" fill className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fdfbf7] z-10" />

                <div className="relative z-20 text-center px-6 max-w-5xl">
                    <h4 className="reveal reveal-up text-[#c5a059] font-black uppercase tracking-[0.6em] text-[10px] mb-8">The Lausanne Consultation</h4>
                    <h1 className="reveal reveal-up delay-100 text-6xl md:text-[100px] font-serif italic text-white leading-none tracking-tight">
                        Jewish <br /> <span className="text-[#c5a059] not-italic font-sans font-black uppercase tracking-tighter">Evangelism</span>
                    </h1>
                    <div className="reveal reveal-up delay-200 mt-12 flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-[#c5a059]" />
                        <p className="text-white/200 font-bold tracking-[0.3em] uppercase text-[12px]">A Global Apostolic Mandate</p>
                        <div className="h-px w-12 bg-[#c5a059]" />
                    </div>
                </div>
            </section>

            {/* 2. THE VISIONARY NARRATIVE */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="reveal reveal-left relative">
                        <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop"
                                alt="Prophetic Connection" fill className="object-cover"
                            />
                        </div>
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#c5a059] rounded-full flex items-center justify-center text-white text-center p-6 shadow-xl border-8 border-[#fdfbf7]">
                            <p className="font-black uppercase tracking-tighter text-xs">Apostolic Partnership Since 2024</p>
                        </div>
                    </div>

                    <div className="reveal reveal-right space-y-8">
                        <h2 className="text-5xl font-black uppercase tracking-tighter text-[#0a192f]">To The Jew <span className="text-[#c5a059]">First</span></h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-light italic">
                            "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile." — Romans 1:16
                        </p>
                        <div className="space-y-6 text-gray-700 leading-loose">
                            <p>
                                The **LCJE** is the only global network of its kind, bringing together Jewish believers and Gentile allies to fulfill the Great Commission within the Jewish community.
                            </p>
                            <p>
                                Under the leadership of **Apostle (Dr.) Moses Famose**, EGEC has aligned with the Lausanne movement to ensure the "One in a Million" generation understands the spiritual roots of our faith and participates in the restoration of Israel.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE COMMITMENTS (PREMIUM CARDS) */}
            <section className="py-32 bg-[#0a192f] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 opacity-5 pointer-events-none uppercase font-black text-[20vw] leading-none select-none">LCJE</div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h3 className="text-[#c5a059] font-black uppercase tracking-[0.4em] text-xs mb-4">Strategic Focus</h3>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Missionary <span className="text-white/30 italic">Pillars</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Theological Depth",
                                desc: "Engaging in high-level consultation on the biblical mandate for Jewish evangelism.",
                                num: "01"
                            },
                            {
                                title: "Global Networking",
                                desc: "Connecting EGEC with messianic congregations and mission agencies worldwide.",
                                num: "02"
                            },
                            {
                                title: "Information Exchange",
                                desc: "Equipping the local church with resources to share the Gospel sensitively and effectively.",
                                num: "03"
                            }
                        ].map((item, i) => (
                            <div key={i} className="reveal reveal-up group">
                                <div className="text-6xl font-black text-[#c5a059]/20 mb-6 group-hover:text-[#c5a059] transition-colors duration-500">{item.num}</div>
                                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">{item.title}</h4>
                                <div className="w-12 h-1 bg-[#c5a059] mb-6 group-hover:w-full transition-all duration-700" />
                                <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE APOSTOLIC CALL TO ACTION */}
            <section className="py-40 px-6">
                <div className="max-w-3xl mx-auto text-center reveal reveal-up bg-white p-20 rounded-[4rem] shadow-xl border border-gray-100">
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-[#0a192f] mb-8">Join The <span className="text-[#c5a059]">Restoration</span></h2>
                    <p className="text-gray-500 mb-12 font-light text-lg">
                        EGEC is committed to standing with the LCJE in prayer and evangelistic action. Discover how you can support this global move.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-10 py-5 bg-[#0a192f] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#c5a059] transition-all">
                            Partner With LCJE
                        </button>
                        <button className="px-10 py-5 border-2 border-gray-100 text-[#0a192f] rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-gray-50 transition-all">
                            Request Resources
                        </button>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(60px); }
                .reveal-left { transform: translateX(-60px); }
                .reveal-right { transform: translateX(60px); }
                .reveal-visible { opacity: 1; transform: translate(0); }
            `}</style>
        </main>
    );
}