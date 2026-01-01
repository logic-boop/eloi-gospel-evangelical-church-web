"use client";
import React, { useEffect, useState } from 'react';

export default function ServicesPage() {
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

    const programs = [
        {
            day: "Tuesday",
            title: "Women's Interdenominatory Prayer",
            time: "Weekly Encounter",
            venue: "Church Venue",
            description: "A specialized gathering for women from all walks of life to unite in powerful intercession and spiritual empowerment.",
            color: "border-wine"
        },
        {
            day: "Wednesday",
            title: "Bible Study",
            time: "Weekly Study",
            venue: "Church Venue",
            description: "A deep dive into the scriptures to equip the saints with the knowledge of God's word for practical Christian living.",
            color: "border-sky"
        },
        {
            day: "Last Friday",
            title: "Monthly Vigil (Power Night)",
            time: "Monthly Climax",
            venue: "Church Venue",
            description: "Our dedicated night of spiritual warfare and prophetic breakthrough. A time to experience the raw power of God.",
            color: "border-gray-900"
        },
        {
            day: "Saturday",
            title: "Choir Rehearsal",
            time: "Preparation",
            venue: "The Sanctuary",
            description: "A time of vocal and spiritual preparation for the Levites to set the atmosphere for worship.",
            color: "border-sky"
        }
    ];

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-1'} bg-[#FDFCFB] min-h-screen`}>

            {/* 1. IMPACT HERO SECTION - ADJUSTED PADDING FOR FIXED HEADER */}
            <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 px-6 bg-wine text-white overflow-hidden">
                {/* Visual Depth Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10 relative z-10">
                    <div className="space-y-6 reveal reveal-left">
                        <div className="inline-block px-4 py-1.5 bg-sky/20 rounded-full">
                            <h2 className="text-sky font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">The Eloi Calendar</h2>
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                            Weekly <br /> <span className="text-sky-400 italic">Programs</span>
                        </h1>
                    </div>

                    <div className="max-w-md text-white/70 text-lg md:text-xl font-light border-l-4 border-sky pl-8 reveal reveal-right delay-200">
                        Join us at the <span className="text-white font-bold italic">3rd Floor, Express Building</span>, Opp. Bolumole Junction, Ring Road, Ibadan for a one in a million experience.
                    </div>
                </div>
            </section>

            {/* 2. THE SUNDAY ANCHOR (THE WOW FACTOR) */}
            <section className="py-20 px-6 max-w-7xl mx-auto reveal reveal-up">
                <div className="group bg-white rounded-[3rem] md:rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100 flex flex-col lg:flex-row transition-all duration-700 hover:shadow-sky/10">
                    <div className="bg-sky p-12 md:p-16 lg:w-1/3 text-white flex flex-col justify-center relative overflow-hidden">
                        <span className="font-black text-9xl opacity-20 absolute -top-4 -left-4 select-none">SUN</span>
                        <h3 className="text-5xl font-black uppercase mt-4 relative z-10">The Lord's Day</h3>
                        <div className="w-12 h-1.5 bg-wine mt-6 mb-2 relative z-10"></div>
                        <p className="font-bold text-sky-900/40 italic relative z-10 uppercase tracking-widest text-xs">The Sanctuary Experience</p>
                    </div>

                    <div className="p-10 md:p-16 lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white">
                        <div className="space-y-4 hover:translate-x-2 transition-transform duration-300">
                            <span className="text-wine font-black uppercase text-[10px] tracking-[0.3em]">Session One</span>
                            <h4 className="text-3xl font-black text-gray-800 uppercase">Sunday School</h4>
                            <p className="text-5xl font-black text-wine tracking-tighter">08:15<span className="text-lg ml-1">AM</span></p>
                            <div className="w-full h-px bg-gray-100 my-4"></div>
                            <p className="text-gray-500 font-medium leading-relaxed">Systematic foundation in the Word.</p>
                        </div>

                        <div className="space-y-4 hover:translate-x-2 transition-transform duration-300 border-l-0 md:border-l border-gray-100 md:pl-12">
                            <span className="text-sky font-black uppercase text-[10px] tracking-[0.3em]">The Celebration</span>
                            <h4 className="text-3xl font-black text-gray-800 uppercase leading-none">Main Sunday <br /> Service</h4>
                            <p className="text-5xl font-black text-wine tracking-tighter">09:30<span className="text-lg ml-1">AM</span></p>
                            <div className="w-full h-px bg-gray-100 my-4"></div>
                            <p className="text-gray-500 font-medium leading-relaxed">Prophetic worship and the Word.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WEEKLY GRID */}
            <section className="pb-32 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {programs.map((p, i) => (
                        <div key={i}
                            className={`reveal reveal-up bg-white border-l-[16px] ${p.color} p-10 md:p-14 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-default`}
                            style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-sky font-black text-2xl tracking-tighter uppercase">{p.day}</span>
                                <div className="px-4 py-1.5 rounded-full bg-gray-50 text-gray-400 text-[9px] font-black uppercase tracking-[0.2em] border border-gray-100">
                                    {p.venue}
                                </div>
                            </div>
                            <h3 className="text-3xl font-black text-wine uppercase mb-6 group-hover:text-sky transition-colors duration-300 leading-tight">
                                {p.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg font-light">
                                {p.description}
                            </p>
                            <div className="mt-12 pt-8 border-t border-gray-50 flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Frequency</p>
                                    <span className="text-wine font-black text-xl uppercase tracking-tighter">{p.time}</span>
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-wine/5 flex items-center justify-center text-wine group-hover:bg-wine group-hover:text-white group-hover:rotate-45 transition-all duration-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. FINAL VENUE FOOTER */}
            <section className="py-24 bg-white border-t border-gray-100 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 space-y-10 reveal reveal-up relative z-10">
                    <div className="inline-block px-8 py-2 bg-wine/5 text-wine rounded-full font-black text-[10px] uppercase tracking-[0.5em]">The Sanctuary Location</div>
                    <p className="text-4xl md:text-5xl text-gray-800 font-black uppercase leading-[1.1] tracking-tighter">
                        Express Building, <br />
                        <span className="text-sky underline decoration-wine/20">Opp. Bolumole Junction</span>, <br />
                        Ring Road, Ibadan.
                    </p>
                    <button className="px-16 py-6 bg-wine text-white rounded-full font-black uppercase tracking-widest shadow-xl hover:bg-sky transition-all duration-500 transform hover:scale-105">
                        Get Directions
                    </button>
                </div>
            </section>

            <style jsx global>{`
                .reveal {
                    opacity: 0;
                    transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-up { transform: translateY(80px); }
                .reveal-left { transform: translateX(-80px); }
                .reveal-right { transform: translateX(80px); }
                .reveal-visible {
                    opacity: 1;
                    transform: translate(0);
                }
            `}</style>
        </main>
    );
}