"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CinoPage() {
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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#FCFBFA]`}>

            {/* --- 1. HERO SECTION: CONTINENTAL LEADERSHIP --- */}
            <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden bg-wine pt-32 px-6">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-wine via-transparent to-wine z-10"></div>
                    {/* Background image representing African Landscape/Mission */}
                    <Image
                        src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2067&auto=format&fit=crop"
                        alt="Africa Mission Background"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="relative z-20 text-center max-w-5xl">
                    <div className="reveal reveal-up inline-block px-6 py-2 border border-sky/30 rounded-full mb-8">
                        <span className="text-sky font-black uppercase tracking-[0.4em] text-[10px]">Africa Continent Representative Office</span>
                    </div>
                    <h1 className="reveal reveal-up delay-100 text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                        CINO <br /> <span className="text-sky">Nigeria</span>
                    </h1>
                    <p className="reveal reveal-up delay-200 text-xl md:text-2xl text-white/60 font-light italic max-w-3xl mx-auto leading-relaxed">
                        "Under the apostolic leadership of Apostle Dr. Moses Babatunde Olubode Famose, we are restoring the dignity of the Nigerian orphan through prophetic initiative."
                    </p>
                </div>
            </section>

            {/* --- 2. THE APOSTOLIC FOOTPRINT --- */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="reveal reveal-left relative">
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
                            {/* This would be the image of the Apostle in action */}
                            <Image
                                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
                                alt="Apostle Dr. Moses Babatunde Olubode Famose in Mission"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-sky p-8 rounded-3xl shadow-xl">
                            <p className="text-white font-black text-sm uppercase tracking-widest">Global Voice <br /> for Africa</p>
                        </div>
                    </div>

                    <div className="reveal reveal-right space-y-8">
                        <h4 className="text-wine font-black uppercase tracking-[0.4em] text-xs">The Visionary Leader</h4>
                        <h2 className="text-4xl md:text-6xl font-black text-wine uppercase tracking-tighter leading-tight">
                            Apostle Dr. Moses <br /> <span className="text-sky">Olubode Famose</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                As the **Africa Continent Representative**, Apostle Famose serves as the strategic link between global humanitarian resources and the specific needs of orphans across the Nigerian landscape.
                            </p>
                            <p>
                                The **Christian Initiative for Nigerian Orphans (CINO)** is not just a charity; it is a prophetic movement to ensure that no child "one in a million" is left without a father, a home, or a destiny.
                            </p>
                        </div>
                        <div className="pt-4">
                            <div className="flex items-center gap-4 py-4 border-t border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-wine/5 flex items-center justify-center text-wine font-bold">01</div>
                                <p className="font-bold uppercase text-xs tracking-widest text-wine">Policy & Protection for Orphans</p>
                            </div>
                            <div className="flex items-center gap-4 py-4 border-t border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-wine/5 flex items-center justify-center text-wine font-bold">02</div>
                                <p className="font-bold uppercase text-xs tracking-widest text-wine">Educational & Spiritual Sponsorship</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. MISSION IN ACTION GALLERY --- */}
            <section className="py-32 bg-[#F9F8F6] px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-7xl font-black text-wine uppercase tracking-tighter">Mission in Action</h2>
                        <p className="text-sky font-bold uppercase tracking-widest text-[10px] mt-4">Field Reports from CINO Nigeria Outreaches</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Community Feeding",
                                desc: "Strategic 'Tea and Bread' outreaches providing immediate nutrition and spiritual fellowship.",
                                img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                            },
                            {
                                title: "Educational Support",
                                desc: "Equipping orphans with tools for academic excellence under the CINO scholarship mandate.",
                                img: "https://images.unsplash.com/photo-1503919919749-64674567ef5d?q=80&w=2074&auto=format&fit=crop"
                            },
                            {
                                title: "Prophetic Prayer",
                                desc: "The Apostle leading prayer sessions for the activation of juvenile destinies.",
                                img: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2070&auto=format&fit=crop"
                            }
                        ].map((item, i) => (
                            <div key={i} className="reveal reveal-up group bg-white rounded-[2.5rem] overflow-hidden shadow-xl" style={{ transitionDelay: `${i * 200}ms` }}>
                                <div className="relative h-72 w-full overflow-hidden">
                                    <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-wine/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-wine font-black uppercase text-lg mb-2">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. GLOBAL CONNECTION (CAFO LINK) --- */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto bg-sky rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Global Standard, <br /> Local Impact</h3>
                        <p className="text-white/80 max-w-2xl mx-auto text-lg mb-10 italic">
                            "CINO operates in direct alignment with CAFO (Christian Alliance for Orphans), bringing world-class orphan care standards to every village in Nigeria."
                        </p>
                        <Link href="/partnerships/cafo" className="inline-block bg-white text-sky px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-wine hover:text-white transition-all shadow-2xl">
                            Explore Global Partnership
                        </Link>
                    </div>
                </div>
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