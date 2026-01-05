"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Added to fix the ReferenceError

export default function ContactPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    useEffect(() => {
        setIsLoaded(true);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, []);

    const handlePrayerSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulating a premium submission experience
        setTimeout(() => setStatus('sent'), 2000);
    };

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#FDFCFB] pt-32`}>

            {/* --- 1. PREMIUM HERO: THE OPEN DOOR --- */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-wine">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
                </div>
                <div className="relative z-10 text-center px-6">
                    <h4 className="reveal reveal-up text-sky font-black uppercase tracking-[0.6em] text-[10px] mb-4">Direct Communication</h4>
                    <h1 className="reveal reveal-up delay-100 text-6xl md:text-[7.5rem] font-black text-white uppercase tracking-tighter leading-none">
                        Reach <span className="text-white/20 italic">The Altar</span>
                    </h1>
                </div>
            </section>

            {/* --- 2. GLOBAL DIRECTORY & HEADQUARTERS --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Institutional Office Details */}
                    <div className="reveal reveal-up space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-wine font-black uppercase tracking-widest text-sm flex items-center gap-3">
                                <span className="w-8 h-px bg-sky"></span> General Headquarters
                            </h3>
                            <div className="space-y-4 text-gray-500 font-light">
                                <p className="text-xl leading-relaxed">
                                    Eloi Gospel Evangelical Church <br />
                                    King's Worship Center <br />
                                    Ibadan, Nigeria.
                                </p>
                                <p className="text-sky font-bold uppercase text-[10px] tracking-[0.3em]">Apostolic Secretariat Office</p>
                            </div>
                        </div>

                        <div className="pt-10 border-t border-gray-100">
                            <h3 className="text-wine font-black uppercase tracking-widest text-sm mb-6">Partnership Liaison</h3>
                            <p className="text-gray-500 font-light italic leading-relaxed">
                                For CAFO Global or CINO Nigeria inquiries, please contact our international representative office for official documentation.
                            </p>
                        </div>
                    </div>

                    {/* Digital Connection Card */}
                    <div className="reveal reveal-up delay-100 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-12 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-gray-50">
                        <div className="space-y-4">
                            <h4 className="text-sky font-black uppercase tracking-widest text-[10px]">Call or WhatsApp</h4>
                            <p className="text-3xl font-black text-wine tracking-tighter hover:text-sky transition-colors cursor-pointer">+234 (805) 404 9868 | +234 (905) 340 1233 ELOI FIRE</p>
                            <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">Available Mon - Fri | 9am - 5pm WAT</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sky font-black uppercase tracking-widest text-[10px]">Official Email</h4>
                            <p className="text-2xl font-black text-wine tracking-tighter lowercase hover:text-sky transition-colors cursor-pointer">eloigospelevangelicalchurch@gmail.com</p>
                            <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">Apostolic Response within 24h</p>
                        </div>
                        <div className="md:col-span-2 pt-8 flex flex-wrap gap-4">
                            {['Facebook', 'YouTube', 'Instagram', 'Twitter'].map(social => (
                                <button key={social} className="px-8 py-4 rounded-2xl border border-gray-100 text-wine font-black uppercase text-[10px] tracking-widest hover:bg-wine hover:text-white hover:scale-105 transition-all duration-500">
                                    {social}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. PROPHETIC PRAYER PORTAL --- */}
            <section className="py-32 bg-wine relative overflow-hidden">
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[30deg] translate-x-32"></div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div className="reveal reveal-left space-y-10 text-white">
                        <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                            <span className="text-sky font-black uppercase tracking-widest text-[10px]">Intercessory Department</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                            Submit Your <br /> <span className="text-sky">Prayer Seed</span>
                        </h2>
                        <p className="text-white/60 text-xl font-light italic leading-relaxed max-w-lg">
                            "Every request is a seed. Apostle Dr. Moses Famose and the 'One in a Million' intercessors lay these petitions upon the altar daily."
                        </p>
                        <div className="flex items-center gap-6 pt-6">
                            <div className="w-16 h-16 rounded-2xl bg-sky/20 flex items-center justify-center text-3xl">🕊️</div>
                            <p className="text-sm text-white/40 font-light max-w-xs">Strict confidentiality is maintained within the Prophetic Office for all personal petitions.</p>
                        </div>
                    </div>

                    <div className="reveal reveal-right bg-white rounded-[4rem] p-12 md:p-16 shadow-2xl relative">
                        {status === 'sent' ? (
                            <div className="text-center py-20 animate-in fade-in zoom-in duration-1000">
                                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-3xl font-black text-wine uppercase tracking-tighter">Received in Faith</h3>
                                <p className="text-gray-500 mt-4 italic font-light">The fire is burning on the altar. Stand in expectation for your testimony.</p>
                                <button onClick={() => setStatus('idle')} className="mt-10 px-8 py-3 bg-gray-50 rounded-full text-sky font-black uppercase tracking-widest text-[10px] hover:bg-wine hover:text-white transition-all">Send another request</button>
                            </div>
                        ) : (
                            <form onSubmit={handlePrayerSubmit} className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Your Full Name</label>
                                    <input required type="text" className="w-full bg-gray-50 rounded-2xl px-8 py-5 border border-transparent focus:border-sky outline-none transition-all text-wine font-bold" placeholder="e.g. Samuel Adekunle" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Nature of Request</label>
                                    <div className="relative">
                                        <select className="w-full bg-gray-50 rounded-2xl px-8 py-5 border border-transparent focus:border-sky outline-none transition-all text-wine font-bold appearance-none cursor-pointer">
                                            <option>Healing & Deliverance</option>
                                            <option>Financial Breakthrough</option>
                                            <option>Family Restoration</option>
                                            <option>Prophetic Guidance</option>
                                            <option>Fruit of the Womb</option>
                                            <option>Other Testimony</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-wine">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Your Petition</label>
                                    <textarea required rows={4} className="w-full bg-gray-50 rounded-2xl px-8 py-5 border border-transparent focus:border-sky outline-none transition-all text-wine font-medium resize-none" placeholder="Explain your situation in detail..."></textarea>
                                </div>
                                <button disabled={status === 'sending'} className="w-full bg-wine text-white py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-sky hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-wine/20 group">
                                    <span className="flex items-center justify-center gap-3">
                                        {status === 'sending' ? 'Laying on Altar...' : 'Submit to the Prophetic Office'}
                                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                                    </span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* --- 4. THE AFRICA REPRESENTATIVE MAP SECTION --- */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto rounded-[4rem] overflow-hidden relative h-[600px] shadow-2xl group">
                    <Image
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                        alt="Lagos Headquarters Interior" fill className="object-cover transition-transform duration-[5000ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-wine/40 backdrop-blur-[2px] flex items-center justify-center">
                        <div className="text-center text-white bg-wine/80 backdrop-blur-xl p-12 md:p-20 rounded-[4rem] border border-white/10 mx-6 max-w-2xl reveal reveal-up">
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Visit Us In Person</h3>
                            <p className="text-white/60 font-light italic mb-10 leading-relaxed text-lg">
                                Experience the raw power and atmosphere of the "One in a Million" generation live at our Lagos headquarters.
                            </p>
                            <Link href="/plan-your-visit" className="inline-block bg-sky text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white hover:text-wine transition-all shadow-2xl">
                                Reserve Your Seat
                            </Link>
                        </div>
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