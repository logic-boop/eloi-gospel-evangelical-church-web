import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-wine text-white pt-24 pb-12 px-6 overflow-hidden relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">

                {/* COLUMN 1: BRAND */}
                <div className="md:col-span-2 space-y-8">
                    <div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter">Eloi Gospel <br /> <span className="text-sky">Evangelical Church</span></h3>
                        <p className="text-white/40 text-sm mt-4 max-w-sm leading-relaxed">
                            Raised for Revival. A "One in a Million" generation focused on winning souls back to God through the raw power of ELOI.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        {['FB', 'IG', 'YT'].map(social => (
                            <div key={social} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-sky hover:border-sky transition-all cursor-pointer">
                                {social}
                            </div>
                        ))}
                    </div>
                </div>

                {/* COLUMN 2: QUICK LINKS */}
                <div className="space-y-6">
                    <h4 className="text-sky font-black uppercase text-[10px] tracking-widest">Navigation</h4>
                    <ul className="space-y-4 text-sm text-white/60">
                        <li><Link href="/about" className="hover:text-white transition-colors">Our Mandate</Link></li>
                        <li><Link href="/sermons" className="hover:text-white transition-colors">Sermon Archive</Link></li>
                        <li><Link href="/plan-your-visit" className="hover:text-white transition-colors">Plan Your Visit</Link></li>
                    </ul>
                </div>

                {/* COLUMN 3: CONTACT */}
                <div className="space-y-6">
                    <h4 className="text-sky font-black uppercase text-[10px] tracking-widest">Connect</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                        Express Building, Ring Road,<br /> Ibadan, Oyo State, Nigeria.
                    </p>
                    <p className="text-sm text-sky font-bold">info@eloigospel.org</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
                <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">© 2024 Eloi Gospel Evangelical Church. All Rights Reserved.</p>
                <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Built for the Kingdom</p>
            </div>
        </footer>
    );
}