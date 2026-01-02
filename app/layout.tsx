"use client";
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Note: For SEO, Next.js prefers metadata in Server Components. 
// This title will work for the browser tab.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isGiveModalOpen, setIsGiveModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.title = "Eloi Gospel Evangelical Church | One in a Million";
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    // Replace with your actual Church Zenith Bank Account
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
        <title>Eloi Gospel Evangelical Church | E.G.E.C</title>
        <meta name="description" content="Official portal for Eloi Gospel Evangelical Church. A One in a Million Generation raised for the last day revival." />
        <link rel="icon" href="/church-logo2.png" />
      </head>
      <body className="bg-[#FCFBFA] selection:bg-wine selection:text-white overflow-x-hidden antialiased">

        {/* HEADER SECTION */}
        <header
          className={`fixed top-0 w-full z-[100] transition-all duration-[800ms] ease-in-out ${scrolled
            ? 'bg-white/80 backdrop-blur-xl h-20 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border-b border-gray-100'
            : 'bg-transparent h-28 border-transparent'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            <Link href="/" className="flex items-center gap-5 group/logo z-[110]">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className={`absolute inset-[-8px] animate-[spin_25s_linear_infinite] opacity-30 group-hover/logo:opacity-100 group-hover/logo:scale-110 transition-all duration-700`}>
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path id="headerPath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                    <text className="fill-wine font-black text-[7px] uppercase tracking-[0.3em]">
                      <textPath href="#headerPath">ELOI GOSPEL EVANGELICAL CHURCH • (E.G.E.C)</textPath>
                    </text>
                  </svg>
                </div>
                <div className="relative w-14 h-14 rounded-full border-[1px] border-white shadow-xl overflow-hidden bg-white transition-all duration-500">
                  <Image src="/church-logo2.png" alt="EGEC Logo" fill className="object-contain p-1.5" />
                </div>
              </div>
              <div className="hidden lg:flex flex-col">
                <span className="font-black text-base text-wine tracking-tighter uppercase leading-none">ELOI GOSPEL EVANGELICAL CHURCH</span>
                <span className="font-bold text-sky-500/60 text-[11px] tracking-[0.4em] uppercase leading-none mt-1.5">One In A Million Generation</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className={`relative text-[13px] font-black uppercase tracking-[0.2em] transition-all duration-500 group/link ${pathname === link.href ? 'text-wine' : 'text-white-500 hover:text-wine'}`}>
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-[2px] bg-sky rounded-full transition-all duration-[600ms] ease-out ${pathname === link.href ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
                </Link>
              ))}
              <button onClick={() => setIsGiveModalOpen(true)} className="bg-wine text-white px-8 py-3 rounded-full text-[12px] font-black uppercase tracking-widest shadow-2xl transition-all duration-500 hover:bg-sky hover:scale-105 active:scale-95">
                Give Online
              </button>
            </nav>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden relative w-12 h-12 flex flex-col items-center justify-center z-[110] bg-white shadow-lg rounded-xl">
              <span className={`w-6 h-[2px] bg-wine transition-all ${isOpen ? 'rotate-45 translate-y-[2px]' : '-translate-y-1'}`}></span>
              <span className={`w-6 h-[2px] bg-wine mt-1 transition-all ${isOpen ? '-rotate-45 -translate-y-[4px]' : 'translate-y-1'}`}></span>
            </button>
          </div>
        </header>

        {/* MOBILE MENU */}
        <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-700 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
          <div className="absolute inset-0 bg-wine/20 backdrop-blur-md" onClick={() => setIsOpen(false)}></div>
          <nav className={`absolute top-0 left-0 w-full bg-white shadow-2xl rounded-b-[3rem] px-8 pt-36 pb-16 transition-transform duration-700 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className={`text-4xl font-black uppercase tracking-tighter ${pathname === link.href ? 'text-wine' : 'text-gray-300'}`}>
                  {link.name}
                </Link>
              ))}
              <button onClick={() => { setIsOpen(false); setIsGiveModalOpen(true); }} className="mt-4 bg-sky text-white py-6 rounded-2xl font-black uppercase tracking-widest text-xs">
                Sow a Seed
              </button>
            </div>
          </nav>
        </div>

        {/* GIVE MODAL */}
        {isGiveModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <div className="absolute inset-0 bg-wine/60 backdrop-blur-md" onClick={() => setIsGiveModalOpen(false)} />
            <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl animate-modalUp">
              <button onClick={() => setIsGiveModalOpen(false)} className="absolute top-8 right-8 text-gray-300 hover:text-wine font-black text-xs">✕ CLOSE</button>
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-black text-wine uppercase tracking-tight">Prophetic Giving</h3>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                  <div>
                    <p className="text-sky font-bold text-[10px] uppercase tracking-widest">Zenith Bank Account</p>
                    <p className="text-3xl font-black text-wine">0123456789</p>
                  </div>
                  <div>
                    <p className="text-sky font-bold text-[10px] uppercase tracking-widest">Account Name</p>
                    <p className="text-sm font-bold text-gray-600 uppercase">ELOI GOSPEL EVANGELICAL CHURCH</p>
                  </div>
                </div>
                <button onClick={copyToClipboard} className={`w-full py-5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all ${copied ? 'bg-sky text-white' : 'bg-wine text-white'}`}>
                  {copied ? '✓ Account Copied' : 'Copy Account Number'}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="min-h-screen">
          {children}
        </div>

        {/* FOOTER */}
        <footer className="bg-wine pt-24 pb-12 text-white px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-black tracking-tighter uppercase leading-tight">ELOI GOSPEL <br /> EVANGELICAL CHURCH</h3>
              <p className="text-white/50 font-light max-w-sm italic">"The fire shall ever be burning upon the altar; it shall never go out."</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sky font-black uppercase text-xs tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                {navLinks.map(link => (
                  <li key={link.name}><Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-sky font-black uppercase text-xs tracking-widest">Follow the Fire</h4>
              <div className="flex gap-4">
                {/* Replace # with your actual links */}
                <a href="https://facebook.com" target="_blank" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-sky transition-all cursor-pointer">
                  <span className="font-bold text-sm">FB</span>
                </a>
                <a href="https://youtube.com" target="_blank" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-sky transition-all cursor-pointer">
                  <span className="font-bold text-sm">YT</span>
                </a>
                <a href="https://instagram.com" target="_blank" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-sky transition-all cursor-pointer">
                  <span className="font-bold text-sm">IG</span>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">© {new Date().getFullYear()} E.G.E.C. One In A Million Generation.</p>
          </div>
        </footer>

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
          body { font-family: 'Inter', sans-serif; }
          @keyframes modalUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .animate-modalUp { animation: modalUp 0.5s ease-out forwards; }
        `}</style>
      </body>
    </html>
  );
}