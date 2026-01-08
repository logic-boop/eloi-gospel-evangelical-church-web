"use client";
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isGiveModalOpen, setIsGiveModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isPartnershipOpen, setIsPartnershipOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  const OFFICIAL_ACC = "0510451553";
  const OFFICIAL_EMAIL = "eloigospelevangelicalchurch@gmail.com";

  useEffect(() => {
    document.title = "Eloi Gospel Evangelical Church | One in a Million";
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsPartnershipOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(OFFICIAL_ACC);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Sermons', href: '/sermons' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Plan Visit', href: '/plan-your-visit' },
    { name: 'Contact', href: '/contact' },
  ];

  const partners = [
    { name: 'CINO Nigeria', href: '/partnerships/cino', sub: 'Apostle Famose, President' },
    { name: 'World Evangelical Harvest', href: '/partnerships/weh', sub: 'Pastor Paul LeFavour, President' },
    { name: 'CAFO Global', href: '/partnerships/cafo', sub: 'Africa Representative Office' },
    { name: 'LCJE', href: '/partnerships/lcje', sub: 'Jewish Evangelism Network' }
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/church-logo2.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className="bg-[#050505] text-white selection:bg-[#C5A059] selection:text-[#0A192F] antialiased overflow-x-hidden w-full">

        {/* HEADER: Ultra-Deep Blue & Gold Accents */}
        <header
          className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled
            ? 'h-20 bg-[#0A192F]/60 backdrop-blur-2xl border-b border-white/5 shadow-2xl'
            : 'h-28 bg-transparent'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-4 group z-[110]">
              <div className="relative w-16 h-16 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <div className="absolute inset-[-10px] animate-[spin_40s_linear_infinite] opacity-100">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path id="headerPath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                    <text className="font-black text-[7.5px] uppercase tracking-[0.25em] fill-[#C5A059]">
                      <textPath href="#headerPath">ELOI GOSPEL EVANGELICAL CHURCH • (EGEC)</textPath>
                    </text>
                  </svg>
                </div>
                <div className="relative w-14 h-14 rounded-full border-2 border-[#C5A059]/40 shadow-[0_0_20px_rgba(197,160,89,0.2)] overflow-hidden bg-white">
                  <Image src="/church-logo2.png" alt="EGEC Logo" fill sizes="62px" className="object-contain" />
                </div>
              </div>

              <div className="hidden lg:flex flex-col">
                <span className="font-black text-lg tracking-tighter uppercase leading-none text-white">
                  ELOI GOSPEL EVANGELICAL CHURCH
                </span>
                <span className="font-bold text-[12px] tracking-[0.3em] uppercase leading-none mt-1 text-[#C5A059]">
                  KING'S WORSHIP CENTER • (KWC)
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="group relative text-[10px] font-black uppercase tracking-[0.2em] text-white/80 hover:text-white transition-all duration-500">
                  <span className="relative z-10 transition-transform duration-500 block group-hover:-translate-y-1">{link.name}</span>
                  <span className={`absolute -bottom-2 left-0 h-[1px] bg-[#C5A059] transition-all duration-500 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}

              {/* Missions Dropdown */}
              <div className="relative group/drop" onMouseEnter={() => setIsPartnershipOpen(true)} onMouseLeave={() => setIsPartnershipOpen(false)}>
                <button className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 text-white/80 hover:text-[#C5A059] transition-all duration-500">
                  Missions
                  <svg className={`w-3 h-3 transition-transform duration-500 ${isPartnershipOpen ? 'rotate-180 text-[#C5A059]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`absolute top-full -left-10 w-72 bg-[#0A192F] shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-3xl p-6 mt-4 transition-all duration-500 origin-top border border-[#C5A059]/10 ${isPartnershipOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
                  {partners.map((p) => (
                    <Link key={p.name} href={p.href} className="block p-4 hover:bg-white/5 rounded-2xl transition-all group/item">
                      <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest transition-transform group-hover/item:translate-x-1 duration-300">{p.name}</p>
                      <p className="text-[8px] text-white/40 mt-1 uppercase font-bold tracking-widest leading-none">{p.sub}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsGiveModalOpen(true)}
                className="bg-white text-[#0A192F] hover:bg-[#C5A059] hover:text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl transition-all duration-500 hover:scale-105 active:scale-95"
              >
                Give Online
              </button>
            </nav>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden w-11 h-11 flex flex-col items-center justify-center z-[110] rounded-full bg-white/5 border border-white/10 transition-colors">
              <span className={`w-5 h-[1.5px] transition-all duration-500 bg-[#C5A059] ${isOpen ? 'rotate-45 translate-y-[0.75px]' : '-translate-y-1'}`}></span>
              <span className={`w-5 h-[1.5px] mt-1 transition-all duration-500 bg-[#C5A059] ${isOpen ? '-rotate-45 -translate-y-[5.5px]' : 'translate-y-1'}`}></span>
            </button>
          </div>
        </header>

        {/* MOBILE MENU - Deep Blue & Gold */}
        <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-700 ${isOpen ? 'visible' : 'invisible'}`}>
          <div
            className={`absolute inset-0 bg-[#050505]/95 backdrop-blur-xl transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsOpen(false)}
          ></div>

          <nav className={`absolute top-0 right-0 w-[85%] h-[100dvh] bg-[#0A192F] border-l border-[#C5A059]/10 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex-1 overflow-y-auto px-8 pt-32 pb-10 scrollbar-hide">
              <div className="flex flex-col gap-8">
                <p className="text-[#C5A059]/40 font-black text-[9px] uppercase tracking-[0.5em]">Navigation</p>
                {navLinks.map((link, i) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={{ transitionDelay: `${i * 50}ms` }}
                    className={`text-4xl font-black uppercase tracking-tighter text-white transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-[1px] w-full bg-white/5 my-4" />
                <p className="text-[#C5A059]/40 font-black text-[9px] uppercase tracking-[0.5em]">Missions</p>
                <div className="flex flex-col gap-6">
                  {partners.map((p, i) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      style={{ transitionDelay: `${(navLinks.length + i) * 50}ms` }}
                      className={`group transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                    >
                      <p className="text-xl font-black uppercase text-white/90 group-hover:text-[#C5A059] transition-colors">{p.name}</p>
                      <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] mt-1">{p.sub}</p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className={`mt-16 transition-all duration-1000 delay-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <button
                  onClick={() => { setIsGiveModalOpen(true); setIsOpen(false); }}
                  className="w-full py-6 bg-[#C5A059] text-[#0A192F] rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl"
                >
                  Give Online
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* GIVE MODAL - The Prestige Look */}
        {isGiveModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-2xl" onClick={() => setIsGiveModalOpen(false)} />
            <div className="relative bg-white w-full max-w-lg rounded-[3.5rem] p-10 md:p-16 shadow-2xl animate-premiumUp border border-[#C5A059]/20">
              <button onClick={() => setIsGiveModalOpen(false)} className="absolute top-10 right-10 text-gray-400 hover:text-[#0A192F] font-black text-xl transition-colors">✕</button>
              <div className="text-center space-y-10">
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-[#0A192F] uppercase tracking-tighter">Prophetic <span className="text-[#C5A059]">Seed</span></h3>
                  <p className="text-gray-400 text-[10px] italic font-bold uppercase tracking-[0.3em]">"Honour the Lord with your substance"</p>
                </div>
                <div className="bg-[#0A192F] p-12 rounded-[2.5rem] shadow-inner space-y-6">
                  <div>
                    <p className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.3em] mb-2">Sterling Bank PLC</p>
                    <p className="text-4xl md:text-5xl font-black text-white tracking-tighter">{OFFICIAL_ACC}</p>
                  </div>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.4em]">ELOI GOSPEL EVANGELICAL CHURCH</p>
                </div>
                <button onClick={copyToClipboard} className={`w-full py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all duration-500 shadow-xl ${copied ? 'bg-green-600 text-white' : 'bg-[#C5A059] hover:bg-[#0A192F] text-white'}`}>
                  {copied ? '✓ Account Number Copied' : 'Copy Account Details'}
                </button>
              </div>
            </div>
          </div>
        )}

        <main className="min-h-screen w-full relative">
          {children}
        </main>

        {/* FOOTER - Pure Deep Blue & Gold */}
        <footer className="bg-[#0A192F] pt-32 pb-12 text-white px-6 w-full overflow-hidden border-t border-[#C5A059]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
            <div className="md:col-span-2 space-y-10">
              <h3 className="text-4xl font-black tracking-tighter uppercase leading-[0.9] text-white">
                ELOI GOSPEL <br /> <span className="text-[#C5A059]">EVANGELICAL CHURCH</span>
              </h3>
              <p className="text-white/50 font-medium max-w-sm italic text-lg leading-relaxed">"The fire shall ever be burning upon the altar; it shall never go out."</p>
              <p className="text-[#C5A059] font-bold text-[12px] tracking-[0.4em]">{OFFICIAL_EMAIL}</p>
            </div>
            <div className="space-y-8">
              <h4 className="text-[#C5A059] font-black uppercase text-[10px] tracking-[0.5em]">Global Presence</h4>
              <ul className="space-y-4 text-white/60 text-[11px] font-black uppercase tracking-widest">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" /> Ibadan, Nigeria
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" /> North Carolina, USA
                </li>
              </ul>
            </div>
            <div className="space-y-10">
              <h4 className="text-[#C5A059] font-black uppercase text-[10px] tracking-[0.5em]">Prophetic Connection</h4>
              <div className="flex flex-wrap gap-4">
                {['Facebook', 'Youtube', 'Instagram'].map((p) => (
                  <div key={p} className="px-6 py-3 bg-white/5 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#C5A059] hover:text-[#0A192F] transition-all duration-500 cursor-pointer group">
                    <span className="font-black text-[9px] uppercase tracking-[0.2em]">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.5em] font-bold">© {new Date().getFullYear()} E.G.E.C. One In A Million Generation.</p>
            <div className="flex gap-10 text-[10px] font-black uppercase text-white/30 tracking-[0.3em]">
              <span className="hover:text-[#C5A059] cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-[#C5A059] cursor-pointer transition-colors">Terms</span>
            </div>
          </div>
        </footer>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-10 right-10 z-[150] w-14 h-14 bg-white text-[#0A192F] rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center justify-center transition-all duration-700 hover:bg-[#C5A059] hover:text-white hover:scale-110 group ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[3] group-hover:-translate-y-1 transition-transform">
            <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <style jsx global>{`
          @keyframes premiumUp {
            from { opacity: 0; transform: scale(0.95) translateY(60px); filter: blur(15px); }
            to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
          }
          .animate-premiumUp { animation: premiumUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          body { overflow-x: hidden; width: 100%; position: relative; }
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </body>
    </html>
  );
}