// src/app/Servicios/components/Hero.tsx

import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden text-white flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Servicios especializados para tu industria
        </h1>
        <p className="text-lg md:text-xl">
          Con soluciones en calibración, pruebas e innovación tecnológica.
        </p>
      </div>
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
}