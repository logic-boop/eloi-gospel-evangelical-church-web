"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
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

      {/* 1. HERO SECTION - Adjusted Padding for the New Header */}
      <section className="relative min-h-[120vh] w-full flex flex-col items-center justify-start overflow-hidden bg-wine pt-64 pb-24 px-6">

        {/* Background Layer */}
        <div className="absolute inset-0 z-0 opacity-30 scale-110 animate-pulse-slow">
          <div className="absolute inset-0 bg-gradient-to-b from-wine via-transparent to-wine z-10"></div>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-20 text-center max-w-7xl w-full flex flex-col items-center">

          {/* FULL NAME BRANDING */}
          <div className="reveal reveal-up mb-12">
            <h4 className="text-sky font-black uppercase tracking-[0.7em] text-[10px] mb-4"> Official Website of </h4>
            <div className="relative inline-block px-10 py-4">
              <div className="absolute inset-0 border border-white/10 rounded-full"></div>
              <h2 className="text-white font-bold text-lg md:text-3xl tracking-[0.15em] uppercase">
                Eloi Gospel Evangelical Church
              </h2>
              <h2 className="text-sky font-bold text-lg md:text-2xl tracking-[0.15em] uppercase">
                FAITH'S INTERNATIONAL MINISTRY
              </h2>
            </div>
          </div>

          <h1 className="reveal reveal-up delay-100 text-6xl md:text-[8.5rem] font-black text-white uppercase tracking-tighter leading-[0.85] mb-12">
            Raised for <br /> <span className="text-sky italic">Revival</span>
          </h1>

          <p className="reveal reveal-up delay-200 text-lg md:text-2xl text-white/50 font-light max-w-3xl mx-auto mb-16 leading-relaxed italic">
            "The fire shall ever be burning upon the altar; it shall never go out." Experience the presence at **Eloi Gospel Evangelical Church**.
          </p>

          {/* CTA ACTION CENTER */}
          <div className="reveal reveal-up delay-300 flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-2xl">
            <Link href="/plan-your-visit" className="w-full sm:w-1/2">
              <button className="w-full bg-white text-wine px-10 py-5 rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:bg-sky hover:text-white transition-all duration-700 shadow-2xl hover:scale-[1.03] active:scale-95">
                Plan Your Visit
              </button>
            </Link>
            <Link href="/sermons" className="w-full sm:w-1/2">
              <button className="w-full border-2 border-white/20 text-white px-10 py-5 rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-wine transition-all duration-700 backdrop-blur-2xl">
                Watch Sermons
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-20">
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"></div>
          <p className="text-white text-[8px] font-black uppercase tracking-[0.8em] [writing-mode:vertical-lr]">Scroll</p>
        </div>
      </section>

      {/* 2. THE MANDATE */}
      <section className="py-32 bg-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal reveal-left relative">
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
              {/* FIXED: Added sizes to clear console warning */}
              <Image
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
                alt="Worship at Eloi Gospel Evangelical Church"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-wine p-10 rounded-[3rem] shadow-2xl hidden md:block">
              <p className="text-sky font-black text-2xl tracking-tighter uppercase leading-tight italic">E.G.E.C <br /> Mandate</p>
            </div>
          </div>

          <div className="reveal reveal-right space-y-10">
            <div className="space-y-4">
              <h4 className="text-sky font-black uppercase tracking-[0.5em] text-xs">A People Set Apart</h4>
              <h2 className="text-5xl md:text-7xl font-black text-wine uppercase tracking-tighter leading-none">
                Eloi Gospel <br /> <span className="text-gray-200">Evangelical Church</span>
              </h2>
            </div>
            <p className="text-xl text-gray-500 leading-relaxed font-light border-l-4 border-sky pl-8">
              We are a "One in a Million" generation, forged in the fire of the Holy Ghost. Our assignment is to restore souls and activate the prophetic destiny of every believer.
            </p>
            <Link href="/about" className="inline-block group text-wine font-black uppercase tracking-widest text-[10px] bg-gray-50 px-8 py-4 rounded-full transition-all hover:bg-wine hover:text-white">
              View Our Full Mandate <span className="inline-block transition-transform group-hover:translate-x-2 ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONY GRID */}
      <section className="py-32 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h4 className="reveal reveal-up text-sky font-black uppercase tracking-[0.6em] text-xs">The Cloud of Witnesses</h4>
            <h2 className="reveal reveal-up delay-100 text-5xl md:text-7xl font-black text-wine uppercase tracking-tighter leading-none">
              Prophetic Encounters
            </h2>
            <p className="text-gray-400 font-medium uppercase tracking-widest text-[10px]">At Eloi Gospel Evangelical Church, ELOI answers by fire.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Deborah S.", tag: "Healing", text: "Chronic pain of 5 years vanished during Power Night at Eloi Gospel Evangelical Church. The atmosphere was charged!" },
              { name: "Samuel O.", tag: "Breakthrough", text: "A prophetic word from the lead pastor changed my career path in a single week. Testimony is real!" },
              { name: "Esther A.", tag: "Restoration", text: "My family was restored after joining the Eloi Gospel Evangelical Church family. God is indeed here." }
            ].map((t, i) => (
              <div key={i} className="reveal reveal-up bg-white p-10 rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100 group hover:-translate-y-4 transition-all duration-700" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, star) => <span key={star} className="text-sky text-base">★</span>)}
                </div>
                <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-wine text-white rounded-full flex items-center justify-center font-black text-lg shadow-lg">{t.name[0]}</div>
                  <div>
                    <h5 className="font-black text-wine uppercase text-sm">{t.name}</h5>
                    <p className="text-sky font-bold text-[9px] uppercase tracking-widest">{t.tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-wine rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-sky/5 skew-x-12 translate-x-20"></div>
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">Your Encounter <br /> Awaits</h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg font-light italic leading-relaxed">
              "Winning souls back to God in these last days through the raw power and presence of ELOI."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Link href="/plan-your-visit" className="bg-white text-wine px-12 py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-sky hover:text-white transition-all shadow-2xl">I will be there</Link>
              <Link href="/contact" className="border-2 border-white/20 text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-wine transition-all">Submit Prayer Request</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-pulse-slow { animation: pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.2; transform: scale(1.1); } 50% { opacity: 0.4; transform: scale(1.15); } }
        .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-up { transform: translateY(60px); }
        .reveal-left { transform: translateX(-60px); }
        .reveal-right { transform: translateX(60px); }
        .reveal-visible { opacity: 1; transform: translate(0); }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
      `}</style>
    </main>
  );
}