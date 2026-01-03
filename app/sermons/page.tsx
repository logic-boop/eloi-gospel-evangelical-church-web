"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SermonsPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');

    // Updated Sermon Data - Replace videoUrl and imageUrl with your actual content
    const sermons = [
        {
            id: '1',
            title: 'The Fire Shall Never Go Out',
            speaker: 'Apostle Dr. Moses Famose',
            date: 'October 27, 2023',
            category: 'Revival',
            imageUrl: 'https://images.unsplash.com/photo-1542867015-7096c429bf70?q=80&w=2070&auto=format&fit=crop',
            videoUrl: 'https://www.youtube.com/@your-channel-name' 
        },
        {
            id: '2',
            title: 'Unlocking Your Prophetic Destiny',
            speaker: 'Apostle Dr. Moses Famose',
            date: 'October 20, 2023',
            category: 'Prophetic',
            imageUrl: 'https://images.unsplash.com/photo-1510511459019-5fda772437bb?q=80&w=2070&auto=format&fit=crop',
            videoUrl: 'https://www.youtube.com/@your-channel-name'
        },
        {
            id: '3',
            title: 'Grace For The Race',
            speaker: 'Guest Minister',
            date: 'October 13, 2023',
            category: 'Grace',
            imageUrl: 'https://images.unsplash.com/photo-1518042468305-b1a72d73f1d9?q=80&w=2070&auto=format&fit=crop',
            videoUrl: 'https://www.youtube.com/@your-channel-name'
        },
        {
            id: '4',
            title: 'The Healing Power of ELOI',
            speaker: 'Apostle Dr. Moses Famose',
            date: 'October 6, 2023',
            category: 'Healing',
            imageUrl: 'https://images.unsplash.com/photo-1510798831610-d8d17277742d?q=80&w=2070&auto=format&fit=crop',
            videoUrl: 'https://www.youtube.com/@your-channel-name'
        },
        {
            id: '5',
            title: 'Keys to Abundant Living',
            speaker: 'Associate Pastor',
            date: 'September 29, 2023',
            category: 'Faith',
            imageUrl: 'https://images.unsplash.com/photo-1506784983877-ad60ce81e28d?q=80&w=2070&auto=format&fit=crop',
            videoUrl: 'https://www.youtube.com/@your-channel-name'
        },
        {
            id: '6',
            title: 'The Mandate of Fire',
            speaker: 'Apostle Dr. Moses Famose',
            date: 'September 22, 2023',
            category: 'Revival',
            imageUrl: 'https://images.unsplash.com/photo-1498146864149-a35985859942?q=80&w=2070&auto=format&fit=crop',
            videoUrl: 'https://www.youtube.com/@your-channel-name'
        }
    ];

    const categories = ['All', 'Revival', 'Prophetic', 'Grace', 'Healing', 'Faith'];

    const filteredSermons = activeCategory === 'All'
        ? sermons
        : sermons.filter(sermon => sermon.category === activeCategory);

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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#FDFCFB] pt-48 pb-20`}>

            {/* HEADER TEXT */}
            <section className="px-6 max-w-7xl mx-auto mb-16">
                <div className="reveal reveal-up border-l-4 border-sky pl-6">
                    <h4 className="text-sky font-black uppercase tracking-[0.4em] text-[10px] mb-2">Media Archive</h4>
                    <h1 className="text-4xl md:text-6xl font-black text-wine uppercase tracking-tight">
                        Spiritual <br /> Nourishment
                    </h1>
                </div>
            </section>

            {/* 1. HERO SECTION: FEATURED MESSAGE */}
            <section className="px-6 max-w-7xl mx-auto mb-24">
                <div className="relative h-[60vh] md:h-[70vh] w-full rounded-[3rem] overflow-hidden reveal reveal-up shadow-2xl">
                    <Image
                        src={sermons[0].imageUrl}
                        alt={sermons[0].title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wine/95 via-wine/40 to-transparent flex items-end p-8 md:p-16 text-white">
                        <div className="max-w-4xl space-y-4 relative z-10">
                            <p className="text-sky font-black uppercase tracking-widest text-xs mb-2">Latest Message</p>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                                {sermons[0].title}
                            </h2>
                            <p className="text-white/70 text-lg font-light italic">{sermons[0].speaker} — {sermons[0].date}</p>
                            <Link href={sermons[0].videoUrl} target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-3 px-10 py-5 bg-sky text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-wine transition-all shadow-xl mt-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.313 2.706-1.638L18.817 12l-11.61 7.985c-1.177.675-2.706-.211-2.706-1.638V5.653Z" clipRule="evenodd" />
                                    </svg>
                                    Watch Full Message
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SERMONS GRID & FILTERS */}
            <section className="px-6 max-w-7xl mx-auto mb-32">
                <div className="flex flex-wrap gap-3 mb-12 reveal reveal-up">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all ${activeCategory === category
                                    ? 'bg-wine text-white shadow-lg'
                                    : 'bg-white text-gray-400 border border-gray-100 hover:border-sky'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredSermons.map((sermon, i) => (
                        <div key={sermon.id} className="reveal reveal-up group bg-white rounded-[2.5rem] shadow-sm overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={sermon.imageUrl}
                                    alt={sermon.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-wine/20 group-hover:bg-wine/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <Link href={sermon.videoUrl} target="_blank" rel="noopener noreferrer">
                                        <button className="w-16 h-16 rounded-full bg-sky text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.313 2.706-1.638L18.817 12l-11.61 7.985c-1.177.675-2.706-.211-2.706-1.638V5.653Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-8 space-y-3">
                                <p className="text-sky font-bold text-[10px] uppercase tracking-widest">{sermon.category}</p>
                                <h3 className="text-xl font-bold text-wine leading-tight">{sermon.title}</h3>
                                <p className="text-gray-400 text-xs font-light">{sermon.speaker} • {sermon.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. CALL TO ACTION */}
            <section className="px-6 max-w-5xl mx-auto text-center pb-24">
                <div className="reveal reveal-up bg-wine rounded-[3rem] p-12 md:p-20 shadow-2xl text-white space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky/10 rounded-full -mr-32 -mt-32"></div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight relative z-10">Subscribe for More</h2>
                    <p className="text-white/60 max-w-lg mx-auto font-light italic relative z-10">
                        Join our digital family on YouTube and never miss a prophetic encounter.
                    </p>
                    <Link href="https://www.youtube.com/@your-channel-name" target="_blank" rel="noopener noreferrer" className="inline-block relative z-10">
                        <button className="flex items-center gap-3 justify-center px-12 py-5 bg-white text-wine rounded-xl font-black uppercase tracking-widest text-xs hover:bg-sky hover:text-white transition-all shadow-xl mt-6">
                           Visit Channel
                        </button>
                    </Link>
                </div>
            </section>

            <style jsx global>{`
                .reveal { opacity: 0; transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-up { transform: translateY(40px); }
                .reveal-visible { opacity: 1; transform: translate(0) scale(1); }
            `}</style>
        </main>
    );
}