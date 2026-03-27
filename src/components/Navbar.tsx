"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/programi", label: "Programi" },
    { href: "/radionice", label: "Edukacije & Radionice" },
    { href: "/raspored", label: "Raspored" },
    { href: "/o-nama", label: "O nama" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const isHome = pathname === "/";
  const navBg = isScrolled || !isHome ? "bg-stone-50/95 backdrop-blur-md border-b border-stone-200 text-stone-900 shadow-sm" : "bg-transparent text-stone-50 border-transparent";
  const logoColor = isScrolled || !isHome ? "text-brand-900" : "text-stone-50";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 md:py-6 flex justify-between items-center">
        <Magnetic>
          <Link href="/" className={`text-2xl font-serif tracking-[0.2em] uppercase origin-left transition-colors duration-500 block p-2 ${logoColor}`}>
            Apolon
          </Link>
        </Magnetic>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-sans text-xs tracking-widest uppercase items-center font-medium">
          {links.map((link) => (
            <Magnetic key={link.href}>
              <Link 
                href={link.href}
                className={`relative px-4 py-2 group transition-colors block ${pathname === link.href ? "text-brand-700" : ""}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-brand-500 transition-all duration-300 ${pathname === link.href ? "w-1/2 opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100"}`} />
              </Link>
            </Magnetic>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%", borderRadius: "0 0 100% 100%" }}
            animate={{ opacity: 1, y: 0, borderRadius: "0" }}
            exit={{ opacity: 0, y: "-100%", borderRadius: "0 0 100% 100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 min-h-screen bg-stone-900 text-stone-50 z-50 flex flex-col pt-24 px-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none" />
            
            <button 
              className="absolute top-6 right-6 p-2 text-stone-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-3xl font-serif tracking-widest mt-12 relative z-10">
              {links.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-block hover:text-brand-400 transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-brand-400 group-hover:w-full transition-all duration-500" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
