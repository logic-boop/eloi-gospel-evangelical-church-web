"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AboutPage() {
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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#FDFCFB]`}>

            {/* SECTION 1: HEADER & MANDATE */}
            <section className="pt-48 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="reveal reveal-up border-l-4 border-sky pl-6 mb-12">
                        <h4 className="text-sky font-black uppercase tracking-[0.4em] text-[10px] mb-2">Our Identity</h4>
                        <h1 className="text-4xl md:text-6xl font-black text-wine uppercase tracking-tight">
                            Eloi Gospel <br /> Evangelical Church
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="reveal reveal-left space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                                A <span className="text-wine italic">One in a Million</span> Prophetic Vessel for the Final Revival.
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-lg font-light">
                                In an age of spiritual lukewarmness, <strong>Eloi Gospel Evangelical Church</strong> stands as a furnace of fire. We are not just another denomination; we are a prophetic solution raised to win the souls of humanity back to the Creator.
                            </p>
                            <p className="text-gray-500 leading-relaxed text-lg font-light">
                                Our mission is built on the urgency of the hour, focused on emptying hell and filling heaven through the raw manifestation of God's power.
                            </p>
                        </div>

                        {/* DETAILED MISSION BOX */}
                        <div className="reveal reveal-right bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-sky/5 rounded-full -mr-10 -mt-10"></div>
                            <h4 className="text-wine font-black uppercase tracking-widest text-xs mb-8 border-b border-gray-100 pb-4">The Mandate Pillars</h4>
                            <div className="space-y-6">
                                {[
                                    { title: "Restoration", desc: "Restoring the altar of prayer and power in the hearts of men." },
                                    { title: "Evangelism", desc: "Aggressive soul-winning to secure the global harvest." },
                                    { title: "Tangibility", desc: "Creating a sanctuary where God's presence is undeniable." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-sky shadow-[0_0_10px_rgba(0,191,255,0.8)]"></div>
                                        <div>
                                            <h5 className="font-bold text-wine text-sm uppercase tracking-wide">{item.title}</h5>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE FOUNDER */}
            <section className="py-24 bg-wine text-white px-6 relative overflow-hidden">
                {/* Subtle texture background */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                    {/* IMAGE COLUMN */}
                    <div className="lg:col-span-5 reveal reveal-scale">
                        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/5 group">
                            <Image
                                src="/apostle.png"
                                alt="Apostle Dr. Moses B. Olubode Famose"
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-wine via-transparent to-transparent opacity-40"></div>
                        </div>
                    </div>

                    {/* BIO COLUMN */}
                    <div className="lg:col-span-7 space-y-8 reveal reveal-right">
                        <div>
                            <h4 className="text-sky font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Visionary Mantle</h4>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                                Apostle Dr. <br /> Moses B. Olubode Famose
                            </h2>
                            <div className="h-1 w-16 bg-sky mt-6 rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
                            <p>
                                Commissioned by God with a unique apostolic mantle, his life is a testament to the power of a "Last Day Revival" fire. He has been used by God to plant **Eloi Gospel Evangelical Church** as a ministry that transcends regular tradition.
                            </p>
                            <p>
                                Through his leadership at the **Express Building, Ring Road, Ibadan**, he has mentored thousands into their spiritual inheritance, ensuring the church operates in full spiritual authority.
                            </p>
                        </div>

                        {/* FOUNDER'S QUOTE */}
                        <div className="bg-white/5 border-l-2 border-sky p-6 rounded-r-xl italic">
                            <p className="text-white text-lg font-medium">
                                "We are here for the divine announcement of your victory. My God (ELOI) never fails."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: VISION & VALUES */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="reveal reveal-up space-y-4">
                            <span className="text-sky font-black text-xs uppercase tracking-widest">Vision</span>
                            <h4 className="text-wine font-bold text-2xl uppercase tracking-tight">Spiritual Awakening</h4>
                            <p className="text-gray-500 font-light leading-relaxed">To raise a global army of believers who walk in the reality of the prophetic and the power of the Holy Spirit.</p>
                        </div>
                        <div className="reveal reveal-up delay-100 space-y-4">
                            <span className="text-sky font-black text-xs uppercase tracking-widest">Mission</span>
                            <h4 className="text-wine font-bold text-2xl uppercase tracking-tight">Kingdom Expansion</h4>
                            <p className="text-gray-500 font-light leading-relaxed">To evangelize the world with the message of Christ, confirming the Word with signs and wonders following.</p>
                        </div>
                        <div className="reveal reveal-up delay-200 space-y-4">
                            <span className="text-sky font-black text-xs uppercase tracking-widest">Values</span>
                            <h4 className="text-wine font-bold text-2xl uppercase tracking-tight">The ELOI Way</h4>
                            <p className="text-gray-500 font-light leading-relaxed">Holiness, Integrity, Prophetic Precision, and Unconditional Love for all humanity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA - CONNECTS TO PLAN YOUR VISIT */}
            <section className="py-24 bg-[#F9F8F6] text-center px-6">
                <div className="max-w-4xl mx-auto space-y-8 reveal reveal-up">
                    <h2 className="text-4xl md:text-5xl font-black text-wine uppercase tracking-tighter">Join the Movement</h2>
                    <p className="text-xl text-gray-400 font-light max-w-xl mx-auto italic">
                        Experience the raw presence of God at Eloi Gospel Evangelical Church this Sunday.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/plan-your-visit">
                            <button className="px-10 py-4 bg-wine text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-sky transition-all duration-500">
                                Plan Your Visit
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="px-10 py-4 border border-wine text-wine rounded-xl font-black text-xs uppercase tracking-widest hover:bg-wine hover:text-white transition-all duration-500">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                .reveal {
                    opacity: 0;
                    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-up { transform: translateY(40px); }
                .reveal-left { transform: translateX(-40px); }
                .reveal-right { transform: translateX(40px); }
                .reveal-scale { transform: scale(0.98); }
                
                .reveal-visible {
                    opacity: 1;
                    transform: translate(0) scale(1);
                }
                .delay-100 { transition-delay: 100ms; }
                .delay-200 { transition-delay: 200ms; }
            `}</style>
        </main>
    );
}