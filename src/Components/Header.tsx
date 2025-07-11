'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      setMenuOpen(false); // Cierra el menú en scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  useEffect(() => {
    const sectionIds = ['inicio', 'servicios', 'por-que-qualister', 'contacto'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0b1624]/80 backdrop-blur' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center w-full">
          <Link href="/#inicio" className="flex items-center space-x-2">
            <Image
              src="/logo-qualister.svg"
              alt="Logo Qualister"
              width={336}
              height={76.8}
              className="h-[76.8px] w-auto"
              priority
            />
          </Link>

          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <nav>
            {/* Menú grande: visible en pantallas grandes */}
            <div className="hidden lg:flex gap-6 items-center">
              <Link
                href="/#inicio"
                className={`text-white hover:text-cyan-300 transition ${currentSection === 'inicio' ? 'text-cyan-300 font-semibold' : ''}`}
              >
                Inicio
              </Link>
              <Link
                href="/Servicios"
                className={`text-white hover:text-cyan-300 transition ${currentSection === 'servicios' ? 'text-cyan-300 font-semibold' : ''}`}
              >
                Servicios
              </Link>
              <a href="#por-que-qualister" className={`text-white hover:text-cyan-300 transition ${currentSection === 'por-que-qualister' ? 'text-cyan-300 font-semibold' : ''}`}>Nosotros</a>
              <a href="#contacto" className={`text-white hover:text-cyan-300 transition ${currentSection === 'contacto' ? 'text-cyan-300 font-semibold' : ''}`}>Contacto</a>
              <a
                href="#contacto"
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded transition"
              >
                Solicitar Cotización
              </a>
            </div>

            {/* Menú móvil en pantalla completa */}
            <div className={`lg:hidden fixed inset-0 z-40 h-screen w-screen bg-[#0b1624] text-white flex flex-col items-center justify-center text-center px-6 transition-opacity duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <button
                className="absolute top-6 right-6 text-white text-3xl z-50 focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                &times;
              </button>
              <ul className="space-y-8 text-2xl py-12">
                <li><Link href="/#inicio" className="text-white hover:text-cyan-300" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                <li><Link href="/Servicios" className="text-white hover:text-cyan-300" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
                <li><a href="#por-que-qualister" className="text-white hover:text-cyan-300" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
                <li><a href="#contacto" className="text-white hover:text-cyan-300" onClick={() => setMenuOpen(false)}>Contacto</a></li>
                <li>
                  <a
                    href="#contacto"
                    onClick={() => setMenuOpen(false)}
                    className="block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded transition"
                  >
                    Solicitar Cotización
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}