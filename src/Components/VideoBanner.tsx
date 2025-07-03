'use client';

export default function VideoBanner() {
  return (
    <section
      className="
        relative isolate
        w-full
        bg-[#F5FAF6]
        py-4 md:py-6                 /* ← padding vertical extra */
        h-[272px] md:h-[300px]       /* alto TOTAL (video + padding) */
        overflow-hidden
      "
    >
      <div className="mx-auto max-w-7xl h-full px-6 lg:px-8">
        {/* vídeo dentro del contenedor central */}
        <video
          src="/qualister-multimetro.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
            h-full w-full
            object-contain            /* no desborda; respeta márgenes */
            opacity-75
          "
        />
      </div>

      {/* velo claro para suavizar el clip */}
      <div className="absolute inset-0 bg-white/55 mix-blend-lighten pointer-events-none" />
    </section>
  );
}