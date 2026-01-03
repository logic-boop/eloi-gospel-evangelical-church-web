"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CafoPage() {
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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-white`}>

            {/* --- 1. GLOBAL HERO: CAFO PARTNERSHIP --- */}
            <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-32 px-6">
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
                    {/* Official CAFO Summit Style Background */}
                    <Image
                        src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop"
                        alt="Global Leadership Background"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="relative z-20 text-center max-w-6xl">
                    <div className="reveal reveal-up inline-block px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-10">
                        <span className="text-sky font-black uppercase tracking-[0.5em] text-[11px]">Official Global Partner of CAFO.org</span>
                    </div>
                    <h1 className="reveal reveal-up delay-100 text-5xl md:text-[8rem] font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
                        World <br /> <span className="text-sky italic">Authority</span>
                    </h1>
                    <p className="reveal reveal-up delay-200 text-xl md:text-2xl text-white/50 font-light max-w-3xl mx-auto italic leading-relaxed">
                        "Bridging the gap between the Global Church and the African Orphan through the Apostolic Office."
                    </p>
                </div>
            </section>

            {/* --- 2. THE FOUNDER'S OFFICIAL SEAT (CAFO AFRICA REPRESENTATIVE) --- */}
            <section className="py-32 px-6 bg-[#FCFBFA]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    <div className="reveal reveal-left space-y-10">
                        <div className="inline-block px-5 py-2 bg-wine/5 rounded-lg border-l-4 border-wine">
                            <span className="text-wine font-black uppercase tracking-widest text-xs">The Continental Mandate</span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black text-wine uppercase tracking-tighter leading-none">
                            Africa <br /> <span className="text-gray-300">Continent</span> <br /> <span className="text-sky">Representative</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            As the designated **Africa Continent Representative for CAFO**, Apostle Dr. Moses Babatunde Olubode Famose stands at the forefront of global orphan care advocacy. His leadership ensures that African voices are heard in global summits and that world-class research is applied locally.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div>
                                <h4 className="font-black text-wine text-3xl">120+</h4>
                                <p className="text-gray-400 uppercase font-bold text-[10px] tracking-widest mt-2">Nations Represented</p>
                            </div>
                            <div>
                                <h4 className="font-black text-sky text-3xl">200k+</h4>
                                <p className="text-gray-400 uppercase font-bold text-[10px] tracking-widest mt-2">Children Impacted</p>
                            </div>
                        </div>
                    </div>

                    <div className="reveal reveal-right relative">
                        {/* FRAME FOR OFFICIAL CAFO WEBSITE PHOTO OF FOUNDER */}
                        <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1974&auto=format&fit=crop"
                                alt="Apostle Dr. Moses Babatunde Olubode Famose at CAFO Summit"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-wine/60 via-transparent to-transparent"></div>
                        </div>
                        {/* OFFICIAL BADGE */}
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white rounded-full flex items-center justify-center p-6 shadow-2xl border border-gray-100">
                            <p className="text-[10px] font-black text-wine text-center uppercase tracking-tighter">Official Delegate <br /> <span className="text-sky text-lg">CAFO</span> <br /> Global Alliance</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- 3. THE APOSTOLIC GALLERY (PHOTOS FROM CAFO.ORG CONTEXT) --- */}
            <section className="py-32 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <div>
                            <h4 className="text-sky font-black uppercase tracking-[0.5em] text-xs mb-4">Official Documentation</h4>
                            <h2 className="text-4xl md:text-6xl font-black text-wine uppercase tracking-tighter">Global <span className="italic font-light text-gray-300">Footprints</span></h2>
                        </div>
                        <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-2 max-w-xs text-right">
                            Moments of impact featuring the Founder across CAFO global activities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
                        <div className="md:col-span-8 relative rounded-[3rem] overflow-hidden group reveal reveal-up">
                            <Image src="https://images.unsplash.com/photo-1475721027187-402ad2989a3b?q=80&w=2070&auto=format&fit=crop" alt="Founder Global Summit" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                            <div className="absolute bottom-10 left-10 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h5 className="font-black uppercase tracking-widest">Leadership Roundtable</h5>
                                <p className="text-xs text-white/70 italic">Representing the Africa Continent Office</p>
                            </div>
                        </div>
                        <div className="md:col-span-4 grid grid-rows-2 gap-6">
                            <div className="relative rounded-[3rem] overflow-hidden group reveal reveal-up delay-100">
                                <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" alt="CAFO Strategy Session" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                            </div>
                            <div className="relative rounded-[3rem] overflow-hidden group reveal reveal-up delay-200">
                                <Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" alt="African Delegate Meeting" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. CAFO CORE MISSION PILLARS --- */}
            <section className="py-32 bg-wine">
                <div className="max-w-7xl mx-auto px-6 text-center mb-20">
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">Pure Religion <br /> <span className="text-sky/40">Pure Impact</span></h2>
                </div>
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: "The CAFO Way", desc: "Equipping churches to move from simple charity to excellence-based care.", icon: "💎" },
                        { title: "Global Research", desc: "Implementing trauma-informed care models backed by world-class research.", icon: "🧬" },
                        { title: "Africa Policy", desc: "Shaping the future of foster care across the African continent.", icon: "📜" }
                    ].map((item, i) => (
                        <div key={i} className="reveal reveal-up bg-white/5 border border-white/10 p-12 rounded-[3.5rem] hover:bg-white/10 transition-colors duration-500" style={{ transitionDelay: `${i * 150}ms` }}>
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h4 className="text-sky font-black uppercase tracking-widest text-sm mb-4">{item.title}</h4>
                            <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-32 flex flex-col items-center text-center px-6">
                <h2 className="reveal reveal-up text-4xl md:text-6xl font-black text-wine uppercase tracking-tighter mb-10">
                    Witness the <br /> <span className="text-sky">Local Impact</span>
                </h2>
                <Link href="/partnerships/cino" className="reveal reveal-up delay-100 bg-wine text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-sky transition-all shadow-2xl">
                    Go to CINO Nigeria Office
                </Link>
            </section>

            <style jsx>{`
        .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-up { transform: translateY(60px); }
        .reveal-left { transform: translateX(-60px); }
        .reveal-right { transform: translateX(60px); }
        .reveal-visible { opacity: 1; transform: translate(0); }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
      `}</style>
        </main>
    );
}