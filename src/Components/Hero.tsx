'use client';

/* ─── src/Components/Hero.tsx ─────────────────────────────────────────── */
import { useEffect } from 'react';
import Rellax from 'rellax';
import Stats from './Stats';

export default function Hero() {
  useEffect(() => {
    // inicia una sola vez en el cliente
    new Rellax('.rellax', { speed: -2, center: true });
  }, []);

  return (
    <section
      className="
        pt-16 relative isolate overflow-hidden
        bg-gradient-to-b from-hero-top via-hero-mid to-hero-bot
        text-white
      "
    >
      {/* halo radial */}
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-2 lg:gap-10 lg:py-32">
        {/* ─── Columna de texto ────────────────────────── */}
        <div className="flex flex-col justify-center">
          {/* badge */}
          <span className="mb-6 w-fit rounded-full bg-slate-700/50 px-4 py-1 text-xs font-semibold text-slate-200 ring-1 ring-inset ring-slate-500/60">
            Acreditación ISO/IEC 17025 en proceso
          </span>

          {/* título */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Soluciones
            <br />
            Metrológicas de
            <br />
            <span className="text-slate-300">Alta Precisión</span>
          </h1>

          {/* descripción */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Más de 60 años de experiencia combinada resolviendo tus desafíos de
            calibración con trazabilidad ISO/IEC 17025. Tu aliado experto en
            metrología compleja.
          </p>

          {/* botones */}
          <div className="mt-10 flex gap-4">
            <a
              href="#contacto"
              className="rounded-md bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Solicitar cotización
            </a>
            <a
              href="#servicios"
              className="rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 transition hover:bg-white/20"
            >
              Conocer servicios
            </a>
          </div>

          {/* métricas */}
          <Stats />
        </div>

        {/* ─── Columna de imagen con efecto parallax ─── */}
        <div className="rellax mx-auto w-full max-w-lg lg:ml-auto lg:max-w-none" data-rellax-percentage="0.5">
          <video
            src="/qualister-logo-animation.mp4"
            autoPlay
            loop
            muted
            playsInline
            width={900}
            height={900}
            className="w-full drop-shadow-lg mix-blend-lighten opacity-80 saturate-110 brightness-105 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,white,transparent)]"
          />
        </div>
      </div>
    </section>
  );
}