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
  const [showBackToTop, setShowBackToTop] = useState(false); // New state for button
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  // Update Page Title
  useEffect(() => {
    document.title = "Eloi Gospel Evangelical Church | One in a Million";
  }, []);

  // Close mobile menu when page changes
  useEffect(() => setIsOpen(false), [pathname]);

  // Handle Scroll Effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 400); // Show button after 400px scroll
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("0123456789");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Sermons', href: '/sermons' },
    { name: 'Plan Visit', href: '/plan-your-visit' },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/church-logo2.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="bg-[#FCFBFA] text-gray-900 selection:bg-wine selection:text-white antialiased">

        {/* --- REFINED HEADER SECTION --- */}
        <header
          className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled
            ? 'bg-white/5 backdrop-blur-md h-20 border-b border-white/10 shadow-none'
            : 'bg-white h-24 border-b border-gray-50 shadow-none'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

            {/* Logo & Rotating Text */}
            <Link href="/" className="flex items-center gap-4 group z-[110]">
              <div className="relative w-16 h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-[-10px] animate-[spin_30s_linear_infinite] opacity-100">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                    <path id="headerPath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                    <text className={`font-black text-[7.8px] uppercase tracking-[0.2em] transition-colors duration-500 ${scrolled ? 'fill-wine/60' : 'fill-wine'}`}>
                      <textPath href="#headerPath">ELOI GOSPEL EVANGELICAL CHURCH • (E.G.E.C)</textPath>
                    </text>
                  </svg>
                </div>
                <div className="relative w-14 h-14 rounded-full border-2 border-wine/20 shadow-md overflow-hidden bg-white">
                  <Image src="/church-logo2.png" alt="EGEC Logo" fill sizes="62px" className="object-contain " />
                </div>
              </div>

              {/* Church Name - Hidden at 1140px and below */}
              <div className="hidden min-[1141px]:flex flex-col">
                <span className={`font-black text-lg tracking-tighter uppercase leading-none transition-colors duration-500 ${scrolled ? 'text-wine/80' : 'text-wine'}`}>
                  ELOI GOSPEL EVANGELICAL CHURCH (EGEC)
                </span>
                <span className={`font-bold text-[13px] tracking-[0.25em] uppercase leading-none mt-1 transition-colors duration-500 ${scrolled ? 'text-sky-500' : 'text-sky-600'}`}>
                  FAITH'S INTERNATION MINISTRY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative text-[13px] font-black uppercase tracking-widest transition-all duration-300 ${pathname === link.href ? 'text-wine' : 'text-gray-800'
                    }`}
                >
                  <span className="relative z-10 transition-transform duration-500 block group-hover:-translate-y-1.5 group-hover:text-wine">
                    {link.name}
                  </span>
                  <span className={`absolute -bottom-1 left-0 h-[3px] bg-sky rounded-full transition-all duration-500 ease-out ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </Link>
              ))}
              <button
                onClick={() => setIsGiveModalOpen(true)}
                className="relative overflow-hidden bg-wine text-white px-8 py-3.5 rounded-full text-[11px] font-black uppercase tracking-widest shadow-xl transition-all duration-500 hover:bg-sky hover:scale-105 group"
              >
                <span className="relative z-10">Give Online</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full transition-transform duration-700 group-hover:translate-x-0"></div>
              </button>
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-12 h-12 flex flex-col items-center justify-center z-[110] bg-gray-50/50 backdrop-blur-md rounded-xl border border-gray-200"
            >
              <span className={`w-6 h-[2.5px] bg-wine transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-[2.5px]' : '-translate-y-1'}`}></span>
              <span className={`w-6 h-[2.5px] bg-wine mt-1 transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-[4px]' : 'translate-y-1'}`}></span>
            </button>
          </div>
        </header>

        {/* --- MOBILE MENU --- */}
        <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-700 ${isOpen ? 'visible' : 'invisible'}`}>
          <div
            className={`absolute inset-0 bg-wine/20 backdrop-blur-3xl transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsOpen(false)}
          ></div>
          <nav className={`absolute top-0 left-0 w-full bg-white shadow-2xl px-10 pt-28 pb-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{ transitionDelay: isOpen ? `${i * 100}ms` : '0ms' }}
                  className={`text-3xl font-black uppercase tracking-tight transition-all duration-700 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} ${pathname === link.href ? 'text-wine' : 'text-gray-900 hover:text-wine'}`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => { setIsOpen(false); setIsGiveModalOpen(true); }}
                style={{ transitionDelay: isOpen ? '400ms' : '0ms' }}
                className={`bg-sky text-white py-5 rounded-3xl font-black uppercase tracking-widest text-xs shadow-2xl transition-all duration-700 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                Sow a Seed
              </button>
            </div>
          </nav>
        </div>

        {/* --- GIVE MODAL --- */}
        {isGiveModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <div className="absolute inset-0 bg-wine/90 backdrop-blur-xl animate-fadeIn" onClick={() => setIsGiveModalOpen(false)} />
            <div className="relative bg-white w-full max-w-lg rounded-[3.5rem] p-12 shadow-2xl animate-premiumUp">
              <button onClick={() => setIsGiveModalOpen(false)} className="absolute top-10 right-10 text-gray-400 font-bold text-[10px] tracking-widest hover:text-wine uppercase">✕ Close</button>
              <div className="text-center space-y-8">
                <h3 className="text-3xl font-black text-wine uppercase tracking-tight">Prophetic Giving</h3>
                <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 space-y-4">
                  <div>
                    <p className="text-sky font-black text-[10px] uppercase tracking-widest mb-1">Zenith Bank</p>
                    <p className="text-4xl font-black text-wine tracking-tighter">0123456789</p>
                  </div>
                  <div>
                    <p className="text-sky font-black text-[10px] uppercase tracking-widest mb-1">Account Name</p>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">ELOI GOSPEL EVANGELICAL CHURCH</p>
                  </div>
                </div>
                <button onClick={copyToClipboard} className={`w-full py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all duration-500 shadow-xl ${copied ? 'bg-green-500 scale-95' : 'bg-wine hover:bg-sky'} text-white`}>
                  {copied ? '✓ Account Copied' : 'Copy Account Number'}
                </button>
              </div>
            </div>
          </div>
        )}

        <main className="min-h-screen">
          {children}
        </main>

        {/* --- PREMIUM BACK TO TOP BUTTON --- */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-[150] w-14 h-14 bg-wine text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-sky hover:scale-110 active:scale-90 group ${showBackToTop ? 'translate-y-0 opacity-100 visible' : 'translate-y-20 opacity-0 invisible'
            }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-none stroke-current stroke-[3] transition-transform duration-500 group-hover:-translate-y-1"
          >
            <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <footer className="bg-wine pt-20 pb-10 text-white px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-black tracking-tighter uppercase leading-tight">ELOI GOSPEL <br /> EVANGELICAL CHURCH</h3>
              <p className="text-white/40 font-light max-w-sm italic">"The fire shall ever be burning upon the altar; it shall never go out."</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sky font-black uppercase text-xs tracking-widest">Navigation</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                {navLinks.map(link => (
                  <li key={link.name}><Link href={link.href} className="hover:text-sky transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-sky font-black uppercase text-xs tracking-widest">Stay Connected</h4>
              <div className="flex gap-4">
                {['FB', 'YT', 'IG'].map((p) => (
                  <div key={p} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-sky hover:scale-110 transition-all cursor-pointer border border-white/5">
                    <span className="font-bold text-xs">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em]">© {new Date().getFullYear()} E.G.E.C. One In A Million Generation.</p>
          </div>
        </footer>

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
          body { font-family: 'Inter', sans-serif; }
          
          @keyframes premiumUp {
            from { opacity: 0; transform: scale(0.95) translateY(50px); filter: blur(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
          }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          
          .animate-premiumUp { animation: premiumUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
        `}</style>
      </body>
    </html>
  );
}