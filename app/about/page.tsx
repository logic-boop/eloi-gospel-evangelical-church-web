"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-white`}>

            {/* --- 1. HERO SECTION: THE FOUNDATIONAL CALL --- */}
            <section className="relative min-h-[95vh] w-full flex flex-col items-center justify-center overflow-hidden bg-wine pt-32 px-6">
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-b from-wine via-transparent to-wine z-10"></div>
                    {/* Symbolic image of a church foundation or prophetic vision */}
                    <Image
                        src="https://images.unsplash.com/photo-1543780332-901b17b203c8?q=80&w=2070&auto=format&fit=crop"
                        alt="Foundational Vision"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="relative z-20 text-center max-w-5xl">
                    <div className="reveal reveal-up inline-block px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-10">
                        <span className="text-sky font-black uppercase tracking-[0.5em] text-[11px]">Our Story. Our Mandate.</span>
                    </div>
                    <h1 className="reveal reveal-up delay-100 text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                        The Fire <br /> <span className="text-white/30 italic">On The Altar</span>
                    </h1>
                    <p className="reveal reveal-up delay-200 text-xl md:text-2xl text-white/70 font-light max-w-3xl mx-auto italic leading-relaxed">
                        "Built on a divine encounter, Eloi Gospel Evangelical Church carries a mandate to restore souls and activate destinies across nations."
                    </p>
                </div>
            </section>

            {/* --- 2. THE APOSTOLIC JOURNEY: FOUNDER'S BIOGRAPHY --- */}
            <section className="py-32 px-6 bg-[#FCFBFA]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="reveal reveal-left relative">
                        <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white">
                            {/* Founder's Image - Professional Portrait */}
                            <Image
                                src="https://images.unsplash.com/photo-1616409890141-94578e6308ba?q=80&w=1974&auto=format&fit=crop" // Placeholder for Apostle's portrait
                                alt="Apostle Dr. Moses Babatunde Olubode Famose"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-wine/70 to-transparent"></div>
                            <div className="absolute bottom-10 left-10 right-10">
                                <p className="text-white font-black text-2xl uppercase tracking-tighter leading-snug">
                                    Apostle Dr. Moses <br /> Olubode Famose
                                </p>
                                <p className="text-sky font-bold text-[10px] uppercase tracking-widest mt-2">Founder & Senior Pastor</p>
                            </div>
                        </div>
                    </div>

                    <div className="reveal reveal-right space-y-10">
                        <h4 className="text-wine font-black uppercase tracking-[0.5em] text-xs">The Vision Bearer</h4>
                        <h2 className="text-4xl md:text-6xl font-black text-wine uppercase tracking-tighter leading-none">
                            A Prophetic <br /> <span className="text-gray-300">Commission</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                            <p>
                                **Apostle Dr. Moses Babatunde Olubode Famose** is a seasoned apostolic voice raised with a distinct prophetic mandate for this generation. His journey is marked by profound divine encounters that shaped the very foundation of Eloi Gospel Evangelical Church.
                            </p>
                            <p>
                                Called to "fan the flames of revival," Apostle Famose's ministry spans over two decades, touching lives through powerful biblical teachings, demonstrative acts of God's power, and a relentless pursuit of souls. His global impact led to his appointment as the **Africa Continent Representative for CAFO**, championing the cause of vulnerable children with both spiritual fervor and strategic excellence.
                            </p>
                        </div>
                        <Link href="/sermons" className="inline-block bg-sky text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-wine transition-all shadow-xl">
                            Hear His Teachings
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- 3. THE "ONE IN A MILLION" MANDATE --- */}
            <section className="py-32 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h4 className="reveal reveal-up text-sky font-black uppercase tracking-[0.6em] text-xs">Our Core Identity</h4>
                        <h2 className="reveal reveal-up delay-100 text-5xl md:text-7xl font-black text-wine uppercase tracking-tighter leading-none">
                            One in a Million <br /> <span className="text-gray-300 italic">Generation</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Prophetic Activation", desc: "Unlocking the divine destiny within every believer through revelatory teaching and personal impartation.", icon: "🔥" },
                            { title: "Soul Restoration", desc: "Leading individuals back to God through genuine encounters with the Holy Spirit and biblical truth.", icon: "🕊️" },
                            { title: "Global Impact", desc: "Extending God's kingdom beyond borders, starting with our work for Nigerian orphans and reaching the world.", icon: "🌍" }
                        ].map((mandate, i) => (
                            <div key={i} className="reveal reveal-up group bg-[#FCFBFA] p-12 rounded-[3.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-4 transition-all duration-700" style={{ transitionDelay: `${i * 150}ms` }}>
                                <div className="text-4xl text-sky mb-8">{mandate.icon}</div>
                                <h4 className="text-wine font-black uppercase tracking-widest text-lg mb-4">{mandate.title}</h4>
                                <p className="text-gray-500 font-light leading-relaxed">{mandate.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. OUR BELIEFS & VALUES (ACCORDION/EXPANDABLE) --- */}
            <section className="py-32 bg-[#F9F8F6] px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="reveal reveal-left space-y-8">
                        <h4 className="text-wine font-black uppercase tracking-[0.5em] text-xs">The Unshakable Foundation</h4>
                        <h2 className="text-4xl md:text-6xl font-black text-wine uppercase tracking-tighter leading-none">
                            What We <br /> <span className="text-sky">Believe</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed font-light">
                            Our faith is rooted in the unchanging Word of God, leading us to a dynamic experience of His presence and power. These are the pillars that uphold our ministry and guide our every action.
                        </p>
                    </div>
                    <div className="reveal reveal-right space-y-6">
                        {[
                            { title: "The Authority of Scripture", content: "The Bible is the inspired, infallible Word of God, our final authority in faith and life." },
                            { title: "The Triune God", content: "We believe in one God, eternally existing in three persons: Father, Son (Jesus Christ), and Holy Spirit." },
                            { title: "Salvation Through Christ", content: "Salvation is by grace through faith in Jesus Christ alone, who died for our sins and rose again." },
                            { title: "The Power of the Holy Spirit", content: "We believe in the present-day operation of the Holy Spirit, empowering believers for victorious living and service." },
                            { title: "The Blessed Hope", content: "We believe in the literal, physical return of Jesus Christ to establish His kingdom on earth." }
                        ].map((item, i) => (
                            <details key={i} className="group bg-white p-6 rounded-2xl shadow-md border border-gray-100 cursor-pointer transition-all duration-500 hover:shadow-xl">
                                <summary className="flex justify-between items-center font-bold text-wine text-lg uppercase tracking-tight group-hover:text-sky transition-colors">
                                    {item.title}
                                    <svg className="w-5 h-5 text-wine group-hover:text-sky transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </summary>
                                <p className="mt-4 text-gray-600 text-base leading-relaxed">{item.content}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 5. THE GLOBAL & LOCAL IMPACT GALLERY --- */}
            <section className="py-32 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h4 className="reveal reveal-up text-sky font-black uppercase tracking-[0.5em] text-xs">From Lagos to the Nations</h4>
                        <h2 className="reveal reveal-up delay-100 text-4xl md:text-7xl font-black text-wine uppercase tracking-tighter leading-none">
                            Our <span className="text-gray-300 italic">Impact</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Nigerian Christian Children's Home",
                                desc: "Providing a loving home and holistic care through CINO, directly overseen by the Apostle.",
                                img: "https://images.unsplash.com/photo-1544272898-3563964f434c?q=80&w=2070&auto=format&fit=crop"
                            },
                            {
                                title: "Global Leadership Summits",
                                desc: "Apostle Famose representing Africa at CAFO conferences, shaping policy for orphan care.",
                                img: "https://images.unsplash.com/photo-1531545514256-d18f5358079a?q=80&w=2070&auto=format&fit=crop"
                            },
                            {
                                title: "Community Outreach & Revival",
                                desc: "Weekly outreaches bringing the fire of revival and practical support to local communities.",
                                img: "https://images.unsplash.com/photo-1523961129506-6df798e4d2a9?q=80&w=2070&auto=format&fit=crop"
                            }
                        ].map((impact, i) => (
                            <div key={i} className="reveal reveal-up group bg-[#FCFBFA] rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-4 transition-all duration-700" style={{ transitionDelay: `${i * 150}ms` }}>
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image src={impact.img} alt={impact.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-wine/30 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="p-8">
                                    <h5 className="text-wine font-black uppercase tracking-widest text-sm mb-3">{impact.title}</h5>
                                    <p className="text-gray-600 text-sm leading-relaxed">{impact.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 6. CALL TO ACTION: CONNECT WITH US --- */}
            <section className="py-32 bg-wine px-6">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="reveal reveal-up text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-10">
                        Join the <br /> <span className="text-sky/50 italic">Movement</span>
                    </h2>
                    <p className="reveal reveal-up delay-100 text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto mb-12 italic leading-relaxed">
                        "Your journey of faith, purpose, and impact begins here. Discover your place in the 'One in a Million' generation."
                    </p>
                    <div className="reveal reveal-up delay-200 flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/plan-your-visit" className="bg-white text-wine px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-sky hover:text-white transition-all shadow-xl">
                            Plan Your First Visit
                        </Link>
                        <Link href="/contact" className="border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-wine transition-all">
                            Contact Us
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