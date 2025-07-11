import React from "react";

export default function CtaSection() {
  return (
    <section className="bg-[#0F1F39] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="h-1 w-8 bg-white mx-auto md:mx-0 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesita una <br className="md:hidden" /> Solución Específica?
          </h2>
          <p className="text-lg mb-8">
            Nuestro equipo de expertos está listo para desarrollar soluciones metrológicas personalizadas<br className="hidden md:inline" />
            para sus necesidades específicas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white text-[#0A0F1A] px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
              Solicitar Cotización
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition">
              Agendar meet
            </button>
          </div>
          <div className="h-1 w-8 bg-white mx-auto md:mx-0 mt-6" />
        </div>

        <div className="md:w-1/2 relative overflow-hidden">
          <div
            className="w-full h-full"
            style={{
              transform: "translateZ(0)",
              willChange: "transform",
              backgroundImage: `url('/Qualister-CtaSection.gif')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              minHeight: "400px",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}