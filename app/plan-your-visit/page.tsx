"use client";
import React, { useState, useEffect } from 'react';

export default function PlanYourVisit() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

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
        setFormSubmitted(true);
        setTimeout(() => {
            setIsFormOpen(false);
            setFormSubmitted(false);
        }, 3000);
    };

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#FDFCFB] pt-48 pb-20`}>

            {/* 1. HERO SECTION */}
            <section className="px-6 max-w-4xl mx-auto mb-16 text-center">
                <div className="reveal reveal-up">
                    <h4 className="text-sky font-black uppercase tracking-[0.4em] text-[10px] mb-3">Join The Family</h4>
                    <h1 className="text-4xl md:text-6xl font-black text-wine uppercase tracking-tight leading-tight">
                        Your Seat is <br /> <span className="text-gray-300 italic font-light lowercase">Reserved.</span>
                    </h1>
                    <p className="mt-8 text-gray-500 font-light text-lg leading-relaxed max-w-2xl mx-auto">
                        We believe your visit to **Eloi Gospel Evangelical Church** isn't an accident. It's a divine appointment.
                    </p>
                </div>
            </section>

            {/* 2. ACTION AREA */}
            <section className="px-6 max-w-4xl mx-auto mb-24">
                <div className="reveal reveal-scale bg-wine rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 left-0 w-full h-full bg-sky/5 -skew-y-6 transform origin-top-left"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tighter">Ready to Visit?</h2>
                        <p className="text-white/60 mb-10 text-sm md:text-lg font-light italic">Let us know you're coming for a VIP "One in a Million" welcome.</p>
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="px-12 py-5 bg-white text-wine rounded-xl font-black uppercase tracking-widest text-xs hover:bg-sky hover:text-white transition-all duration-500 shadow-xl active:scale-95"
                        >
                            Start Planning My Sunday
                        </button>
                    </div>
                </div>
            </section>

            {/* 3. INFO GRID */}
            <section className="px-6 max-w-5xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="reveal reveal-left bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-sky/10 rounded-full flex items-center justify-center mb-6">
                        <span className="text-sky font-black text-xs">🕒</span>
                    </div>
                    <p className="text-sky font-bold text-[10px] uppercase tracking-widest mb-2">Service Times</p>
                    <h4 className="text-wine font-black text-2xl uppercase mb-6">Sundays</h4>
                    <ul className="text-gray-500 space-y-4 text-sm">
                        <li className="flex justify-between border-b border-gray-50 pb-2">
                            <span className="font-bold text-wine">Morning Revival</span>
                            <span>08:00 AM</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-50 pb-2">
                            <span className="font-bold text-wine">Prophetic Service</span>
                            <span>10:00 AM</span>
                        </li>
                    </ul>
                </div>

                <div className="reveal reveal-right bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-sky/10 rounded-full flex items-center justify-center mb-6">
                        <span className="text-sky font-black text-xs">📍</span>
                    </div>
                    <p className="text-sky font-bold text-[10px] uppercase tracking-widest mb-2">Location</p>
                    <h4 className="text-wine font-black text-2xl uppercase mb-6">Ibadan</h4>
                    <p className="text-gray-500 text-lg leading-relaxed font-light">
                        Express Building, Ring Road,<br />
                        <span className="text-wine font-medium">Ibadan, Oyo State, Nigeria.</span>
                    </p>
                </div>
            </section>

            {/* 4. MODAL - FORM */}
            {isFormOpen && (
                <div className="fixed inset-0 z-[9999] bg-wine/95 backdrop-blur-xl overflow-y-auto pt-24 sm:pt-32 pb-10 px-4">
                    <div className="bg-white w-full max-w-lg mx-auto rounded-[3rem] shadow-3xl relative animate-modal-pop overflow-hidden">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsFormOpen(false)}
                            className="absolute top-8 right-8 text-gray-300 hover:text-wine text-2xl z-20 transition-colors"
                        >
                            ✕
                        </button>

                        <div className="p-10 md:p-14">
                            {!formSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="text-center mb-10">
                                        <h3 className="text-3xl font-black text-wine uppercase tracking-tight">Guest Registration</h3>
                                        <div className="h-1 w-12 bg-sky mx-auto mt-4 rounded-full"></div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input required type="text" placeholder="First Name" className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-100 text-sm focus:outline-none focus:border-sky focus:bg-white transition-all" />
                                        <input required type="text" placeholder="Last Name" className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-100 text-sm focus:outline-none focus:border-sky focus:bg-white transition-all" />
                                    </div>

                                    <input required type="email" placeholder="Email Address" className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-100 text-sm focus:outline-none focus:border-sky focus:bg-white transition-all" />

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 tracking-widest">Number of Guests</label>
                                        <select className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-100 text-sm text-gray-500 appearance-none">
                                            <option>1 Person</option>
                                            <option>2 People</option>
                                            <option>Family (3+)</option>
                                        </select>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                                        <p className="text-[10px] font-black text-wine uppercase tracking-widest mb-4">Bringing Kids?</p>
                                        <div className="flex gap-3">
                                            <button type="button" className="flex-1 py-4 bg-white border border-gray-200 rounded-xl text-xs font-bold hover:border-sky hover:text-sky transition-all uppercase tracking-widest">Yes</button>
                                            <button type="button" className="flex-1 py-4 bg-white border border-gray-200 rounded-xl text-xs font-bold hover:border-sky hover:text-sky transition-all uppercase tracking-widest">No</button>
                                        </div>
                                    </div>

                                    <button className="w-full py-6 bg-wine text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:bg-sky transition-all transform active:scale-95">
                                        Confirm My Attendance
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-12 space-y-6">
                                    <div className="w-20 h-20 bg-sky text-white rounded-full flex items-center justify-center text-3xl mx-auto shadow-2xl animate-bounce">✓</div>
                                    <h3 className="text-3xl font-black text-wine uppercase">We're Ready!</h3>
                                    <p className="text-gray-500 text-lg font-light leading-relaxed">
                                        Your seat is reserved. A member of our team will reach out to ensure your visit is <strong>One in a Million</strong>.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
                @keyframes modal-pop {
                    0% { opacity: 0; transform: scale(0.9) translateY(40px); }
                    100% { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-modal-pop { animation: modal-pop 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(50px); }
                .reveal-left { transform: translateX(-50px); }
                .reveal-right { transform: translateX(50px); }
                .reveal-visible { opacity: 1; transform: translate(0) scale(1); }
            `}</style>
        </main>
    );
}