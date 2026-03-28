"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/programi", label: "Programi" },
    { href: "/privatna-yoga", label: "Privatna praksa" },
    { href: "/raspored", label: "Raspored" },
    { href: "/o-nama", label: "O nama" },
    { href: "/tim", label: "Tim" },
    { href: "/novosti", label: "Novosti" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const isHome = pathname === "/";
  const isDarkModeHeader = isHome && !isScrolled;

  return (
    <>
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-in-out px-6 md:px-12 py-8 flex justify-between items-center ${
          isScrolled ? "bg-white/90 backdrop-blur-md border-b border-stone-200 py-4" : "bg-transparent border-transparent"
        }`}
      >
        <Link href="/" className={`text-xl md:text-2xl font-serif tracking-[0.1em] z-[101] uppercase transition-colors duration-500 ${isDarkModeHeader ? "text-stone-50" : "text-stone-900"}`}>
          Yoga Plejs
        </Link>
        
        <div className="hidden lg:flex gap-10 font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 group transition-colors duration-500 overflow-hidden
                    ${isActive 
                      ? (isDarkModeHeader ? "text-stone-50 font-medium" : "text-stone-900 font-medium") 
                      : (isDarkModeHeader ? "text-stone-300 hover:text-stone-50" : "text-stone-500 hover:text-stone-900")}
                  `}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-[1px] transition-transform duration-500 origin-left ${isDarkModeHeader ? "bg-stone-50" : "bg-stone-900"}
                      ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `} 
                  />
                </Link>
            );
          })}
        </div>

        <button 
          className={`lg:hidden p-2 z-[210] transition-transform active:scale-95 duration-500 ${isDarkModeHeader && !isMobileMenuOpen ? "text-stone-50" : "text-stone-900"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 min-h-screen bg-stone-50 z-[200] flex flex-col pt-32 px-8 overflow-hidden"
          >
            <div className="flex flex-col gap-6 text-4xl md:text-5xl font-serif tracking-tight mt-12 text-stone-900">
              {links.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-block hover:text-brand-500 transition-colors relative group"
                  >
                    <span className="font-sans text-[10px] tracking-widest uppercase text-stone-400 absolute -top-2 -left-6 md:-left-8 opacity-50">0{idx + 1}</span>
                    <span className="">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto mb-12 flex flex-col gap-4 text-xs font-sans tracking-widest uppercase text-stone-400">
               <a href="mailto:info@yogaplejs.com" className="hover:text-stone-900 transition-colors">info@yogaplejs.com</a>
               <p>Savska cesta 141 / Knežija</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}