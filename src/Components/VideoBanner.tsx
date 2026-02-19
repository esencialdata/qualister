'use client';

export default function VideoBanner() {
  return (
    <section
      className="
        relative isolate
        w-full
        bg-[#F2F3F3]
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
            opacity-100
            mix-blend-multiply
            contrast-200
            brightness-75
            saturate-0
          "
        />
      </div>
    </section>
  );
}
