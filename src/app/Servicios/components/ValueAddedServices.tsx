// src/app/Servicios/components/ValueAddedServices.tsx

import React from "react";

export default function ValueAddedServices() {
  const services = [
    {
      title: "Logística Integral",
      description: "Recolección y entrega de equipos en sus instalaciones",
    },
    {
      title: "Certificados Digitales",
      description: "Acceso inmediato y seguro a sus certificados de calibración",
    },
    {
      title: "Desarrollo Tecnológico",
      description: "Consultoría técnica y desarrollo de soluciones metrológicas",
    },
    {
      title: "Asesoría Especializada",
      description: "Guía experta en implementación de sistemas metrológicos",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A0F1A] mb-4">
          Servicios de Valor Añadido
        </h2>
        <p className="text-lg text-[#4B5563] mb-12 max-w-3xl mx-auto">
          Más que calibración: ofrecemos soluciones integrales que simplifican su proceso metrológico y agregan valor a su operación
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, description }, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-[#0A0F1A] mb-2">{title}</h3>
              <p className="text-sm text-[#4B5563]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}