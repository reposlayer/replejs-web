import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-stone-50 text-stone-600 py-16 md:py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 space-y-4">
          <Link href="/" className="text-2xl font-serif tracking-[0.1em] uppercase text-stone-900 mb-2 block">
            Yoga Plejs
          </Link>
          <p className="leading-relaxed text-stone-500 max-w-xs font-light">
            Integrirani pilates i joga centar u Zagrebu koji već 11 godina živi autentičnost.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="text-stone-900 font-sans tracking-[0.2em] text-[10px] uppercase mb-6 border-b border-stone-200 pb-2 font-medium">Otkrijte</h4>
          <ul className="space-y-4 font-light">
            <li><Link href="/programi" className="hover:text-stone-900 transition-colors inline-block hover:translate-x-1 duration-300">Programi & Satovi</Link></li>
            <li><Link href="/privatna-yoga" className="hover:text-stone-900 transition-colors inline-block hover:translate-x-1 duration-300">Privatna Praksa</Link></li>
            <li><Link href="/raspored" className="hover:text-stone-900 transition-colors inline-block hover:translate-x-1 duration-300">Raspored</Link></li>
            <li><Link href="/o-nama" className="hover:text-stone-900 transition-colors inline-block hover:translate-x-1 duration-300">O nama i naša misija</Link></li>
            <li><Link href="/tim" className="hover:text-stone-900 transition-colors inline-block hover:translate-x-1 duration-300">Naš Tim</Link></li>
            <li><Link href="/novosti" className="hover:text-stone-900 transition-colors inline-block hover:translate-x-1 duration-300">Novosti</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-4">
          <h4 className="text-stone-900 font-sans tracking-[0.2em] text-[10px] uppercase mb-6 border-b border-stone-200 pb-2 font-medium">Lokacije</h4>
          <ul className="space-y-4 font-light">
            <li className="flex flex-col gap-1">
              <span className="text-stone-900 font-medium text-xs">Yoga Plejs</span>
              <a href="https://maps.app.goo.gl/" target="_blank" className="hover:text-brand-500 transition-colors">
                Savska cesta 141, Zagreb
              </a>
            </li>
            <li className="flex flex-col gap-1 mt-4">
              <span className="text-stone-900 font-medium text-xs">REplejs</span>
              <a href="https://maps.app.goo.gl/" target="_blank" className="hover:text-brand-500 transition-colors">
                Davorina Bazjanca 9, Zagreb
              </a>
            </li>
          </ul>
        </div>

        {/* Action area */}
        <div className="flex flex-col items-start pt-6 md:pt-0">
           <h4 className="font-serif text-2xl text-stone-900 mb-2">Prvi posjet?</h4>
           <p className="font-light text-stone-500 mb-6 max-w-[200px] leading-relaxed">
             Pridružite nam se na Intro to Yoga programu.
           </p>
           <Link href="/nacin-prijave" className="group inline-flex items-center gap-3 border-b-2 border-stone-900 pb-1 text-stone-900 uppercase tracking-[0.2em] text-[10px] font-semibold hover:text-brand-600 hover:border-brand-600 transition-colors">
             Započni praksu <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-8 border-t border-stone-200 text-xs flex flex-col md:flex-row justify-between items-center text-stone-400 gap-4 font-light tracking-wide">
        <p>&copy; {new Date().getFullYear()} Yoga Plejs. Sva prava pridržana.</p>
        <div className="flex gap-6">
          <Link href="/privatnost" className="hover:text-stone-900 transition-colors">Politika Privatnosti</Link>
          <Link href="/uvjeti" className="hover:text-stone-900 transition-colors">Uvjeti Korištenja</Link>
        </div>
      </div>
    </footer>
  );
}
