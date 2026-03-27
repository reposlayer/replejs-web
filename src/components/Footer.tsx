import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 md:py-24 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 space-y-4">
          <Link href="/" className="text-2xl font-serif tracking-[0.2em] uppercase text-stone-50 mb-2 block">
            Apolon
          </Link>
          <p className="leading-relaxed opacity-75 max-w-xs">
            Centar za zdravlje i osobni rast. Od 2006. godine, Zagreb.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="text-stone-50 font-sans tracking-widest text-xs uppercase mb-6 border-b border-stone-800 pb-2">Otkrijte</h4>
          <ul className="space-y-3">
            <li><Link href="/programi" className="hover:text-brand-400 transition-colors">Programi & Satovi</Link></li>
            <li><Link href="/radionice" className="hover:text-brand-400 transition-colors">Edukacije & Radionice</Link></li>
            <li><Link href="/raspored" className="hover:text-brand-400 transition-colors">Tjedni Raspored</Link></li>
            <li><Link href="/o-nama" className="hover:text-brand-400 transition-colors">Naša Priča</Link></li>
          </ul>
        </div>

        {/* Contact info w/ styling */}
        <div className="space-y-4">
          <h4 className="text-stone-50 font-sans tracking-widest text-xs uppercase mb-6 border-b border-stone-800 pb-2">Kontakt</h4>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <span className="opacity-50 min-w-16">Adresa:</span>
              <a href="https://maps.app.goo.gl/3QW6..." target="_blank" className="hover:text-white transition-colors flex-1">
                Kvaternikov trg, F. Ivekovića, Zagreb
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <span className="opacity-50 min-w-16">Telefon:</span>
              <a href="tel:+385958168818" className="hover:text-white transition-colors">095 816 8818</a>
            </li>
            <li className="flex gap-2 items-center">
              <span className="opacity-50 min-w-16">Email:</span>
              <a href="mailto:info@apoloncentar.com" className="hover:text-white transition-colors break-all">info@apoloncentar.com</a>
            </li>
          </ul>
        </div>

        {/* Action card inside footer */}
        <div className="bg-stone-800/50 p-6 border border-stone-700 rounded-sm flex flex-col justify-between items-start">
           <h4 className="font-serif text-lg text-white mb-2">Prvi posjet?</h4>
           <p className="text-xs opacity-75 mb-6">Pridružite nam se na uvodnom satu i doživite Apolon iskustvo.</p>
           <Link href="/kontakt" className="group flex items-center gap-2 text-brand-400 text-xs tracking-widest uppercase font-semibold hover:text-white transition-all">
             Započnite <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-stone-800 text-xs flex flex-col md:flex-row justify-between items-center opacity-50 gap-4">
        <p>&copy; {new Date().getFullYear()} Apolon Centar. Sva prava pridržana.</p>
        <div className="flex gap-4">
          <Link href="/privatnost" className="hover:text-white transition-colors">Politika Privatnosti</Link>
          <Link href="/uvjeti" className="hover:text-white transition-colors">Uvjeti Korištenja</Link>
        </div>
      </div>
    </footer>
  );
}
