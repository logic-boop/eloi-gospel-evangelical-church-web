"use client";
import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- I. PORTAL CONFIGURATION (Using your local public images as covers) ---
const PORTALS = [
    { id: 'all', title: 'THE TOTALITY', subtitle: 'The Full Mandate Archive', cover: '/totality.jpeg', color: 'border-white' },
    { id: 'cafo', title: 'CAFO', subtitle: 'Apostolic Family Office', cover: '/cafo.jpeg', color: 'border-sky' },
    { id: 'lcje', title: 'LCJE', subtitle: 'Leadership Circle', cover: '/lcje.jpeg', color: 'border-white' },
    { id: 'cino', title: 'CINO', subtitle: 'The Fatherless Mandate', cover: '/cino.jpeg', color: 'border-wine' },
    { id: 'weh', title: 'WEH', subtitle: 'Worship Encounter Hub', cover: '/totality1.jpeg', color: 'border-wine' }, // Placeholder as WEH was empty
    { id: 'convention', title: 'CONVENTION', subtitle: 'Annual Convocation', cover: '/totality5.jpeg', color: 'border-sky' },
];

// --- II. THE RELATIONAL DATABASE (Mapping your exact filenames) ---
const VAULT_DATABASE = [
    // ALL / TOTALITY BATCH
    ...Array.from({ length: 21 }, (_, i) => ({
        id: `all-${i}`,
        cat: 'all',
        src: i === 12 ? '/totality.12jpeg' : `/totality${i === 0 ? '' : i}.jpeg`,
        title: `Mandate Moment ${i}`
    })),
    // CAFO BATCH
    ...Array.from({ length: 9 }, (_, i) => ({
        id: `cafo-${i}`,
        cat: 'cafo',
        src: `/cafo${i === 0 ? '' : i}.jpeg`,
        title: `CAFO Session ${i}`
    })),
    // LCJE BATCH
    { id: 'lcje-0', cat: 'lcje', src: '/lcje.jpeg', title: 'Leadership Encounter' },
    { id: 'lcje-1', cat: 'lcje', src: '/lcje1.jpeg', title: 'Apostolic Circle' },
    // CINO BATCH
    { id: 'cino-0', cat: 'cino', src: '/cino.jpeg', title: 'Mission Outreach' },
    { id: 'cino-1', cat: 'cino', src: '/cino1.jpeg', title: 'Fatherless No More' },
    { id: 'cino-2', cat: 'cino', src: '/cino2.jpeg', title: 'Territory Restoration' },
];

export default function ImperialGallery() {
    const [activeVault, setActiveVault] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const filteredImages = useMemo(() => {
        if (!activeVault) return [];
        return VAULT_DATABASE.filter(img => img.cat === activeVault);
    }, [activeVault]);

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505] min-h-screen text-white selection:bg-sky overflow-x-hidden`}>

            {/* --- 1. HERO HEADER --- */}
            <section className="relative pt-40 pb-24 px-6 text-center">
                <motion.h4
                    initial={{ opacity: 0, letterSpacing: "0.2em" }}
                    animate={{ opacity: 1, letterSpacing: "1.2em" }}
                    className="text-sky font-black uppercase text-[10px] mb-8"
                >
                    The Apostolic Archives
                </motion.h4>
                <h1 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.7] mb-4">
                    THE <span className="text-transparent border-b-4 border-wine italic">VAULTS.</span>
                </h1>
            </section>

            {/* --- 2. PORTAL SELECTION GRID --- */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border-y border-white/5">
                {PORTALS.map((portal) => (
                    <motion.div
                        key={portal.id}
                        onClick={() => setActiveVault(portal.id)}
                        className="relative h-[70vh] group cursor-none overflow-hidden bg-[#050505]"
                    >
                        <Image
                            src={portal.cover}
                            alt={portal.title}
                            fill
                            className="object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />

                        <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end items-start">
                            <span className="text-sky font-black uppercase tracking-[0.4em] text-[9px] mb-2">Access_Vault</span>
                            <h3 className="text-5xl font-black uppercase tracking-tighter leading-none group-hover:text-wine transition-colors">{portal.title}</h3>
                            <div className="mt-6 w-12 h-px bg-white group-hover:w-full transition-all duration-1000" />
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* --- 3. THE SLIDING VAULT LAYER --- */}
            <AnimatePresence>
                {activeVault && (
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 40, stiffness: 200 }}
                        className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto"
                    >
                        {/* Vault Controls */}
                        <div className="sticky top-0 z-[110] bg-[#050505]/90 backdrop-blur-2xl border-b border-white/5 px-8 py-10 flex justify-between items-center">
                            <h2 className="text-3xl font-black uppercase tracking-tighter">
                                {activeVault} <span className="text-sky">Archive</span>
                            </h2>
                            <button
                                onClick={() => setActiveVault(null)}
                                className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 hover:text-white transition-all border border-white/10 px-6 py-3"
                            >
                                [ Close Vault ]
                            </button>
                        </div>

                        {/* Image Masonry */}
                        <div className="max-w-[1800px] mx-auto px-6 py-20">
                            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                                {filteredImages.map((img) => (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        key={img.id}
                                        className="relative group border border-white/5 bg-[#0A0A0A]"
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.title}
                                            width={800}
                                            height={1200}
                                            className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- 4. IMPERIAL FOOTER --- */}
            <section className="py-40 text-center">
                <div className="w-px h-24 bg-gradient-to-b from-wine to-transparent mx-auto" />
            </section>

            <style jsx global>{`
                ::-webkit-scrollbar { width: 2px; }
                ::-webkit-scrollbar-track { background: #050505; }
                ::-webkit-scrollbar-thumb { background: #C5A059; }
            `}</style>
        </main>
    );
}