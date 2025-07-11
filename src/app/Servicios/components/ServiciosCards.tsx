// src/components/Servicios/ServiciosCards.tsx

import React from "react";


const servicios = [
  {
    icon: "/icon-micrometro.svg",
    color: "text-blue-600",
    title: "Calibración Dimensional",
    description: "Medición de alta precisión para instrumentos dimensionales con trazabilidad certificada",
    items: [
      "Calibradores Vernier",
      "Micrómetros externos e internos",
      "Bloques patrón",
      "Reglas y cintas métricas",
      "Comparadores de carátula",
      "Instrumentos de medición especializados"
    ]
  },
  {
    icon: "/icon-manometro.svg",
    color: "text-red-600",
    title: "Calibración de Presión",
    description: "Calibración de manómetros e instrumentos de presión para todas las industrias",
    items: [
      "Manómetros de bourdon",
      "Manómetros digitales",
      "Transductores de presión",
      "Presión diferencial",
      "Sistemas neumáticos e hidráulicos",
      "Calibradores de presión"
    ]
  },
  {
    icon: "/icon-temperatura.svg",
    color: "text-orange-600",
    title: "Calibración de Temperatura",
    description: "Servicios especializados en instrumentos de medición de temperatura",
    items: [
      "Termómetros digitales",
      "Termopares",
      "RTD (PT100, PT1000)",
      "Termómetros infrarrojos",
      "Dataloggers de temperatura",
      "Hornos y baños de calibración"
    ]
  },
  {
    icon: "/icon-electrica.svg",
    color: "text-yellow-600",
    title: "Calibración Eléctrica",
    description: "Instrumentos eléctricos y electrónicos de medición",
    items: [
      "Multímetros digitales",
      "Pinzas amperimétricas",
      "Fuentes de voltaje/corriente",
      "Osciloscopios",
      "Medidores de aislamiento",
      "Calibradores eléctricos"
    ]
  },
  {
    icon: "/icon-masa.svg",
    color: "text-green-700",
    title: "Calibración de Masa",
    description: "Balanzas y sistemas de pesaje con máxima precisión",
    items: [
      "Balanzas analíticas",
      "Básculas industriales",
      "Pesas patrón",
      "Sistemas de pesaje",
      "Balanzas de precisión",
      "Instrumentos de densidad"
    ]
  },
  {
    icon: "/icon-volumen.svg",
    color: "text-purple-600",
    title: "Calibración de Volumen",
    description: "Material volumétrico y sistemas de medición de fluidos",
    items: [
      "Pipetas",
      "Buretas",
      "Matraces aforados",
      "Probetas graduadas",
      "Dispensadores automáticos",
      "Medidores de flujo"
    ]
  },
  {
    icon: "/icon-tiempo.svg",
    color: "text-indigo-600",
    title: "Calibración de Tiempo",
    description: "Instrumentos de medición temporal y frecuencia",
    items: [
      "Cronómetros",
      "Contadores de frecuencia",
      "Generadores de señal",
      "Osciloscopios temporales",
      "Sistemas de sincronización"
    ]
  },
  {
    icon: "/icon-fuerza.svg",
    color: "text-gray-700",
    title: "Calibración de Fuerza",
    description: "Instrumentos de medición de fuerza y torque",
    items: [
      "Dinamómetros",
      "Torquímetros",
      "Máquinas de tracción",
      "Celdas de carga",
      "Sistemas de fuerza",
      "Instrumentos de dureza"
    ]
  },
  {
    icon: "/icon-optica.svg",
    color: "text-emerald-700",
    title: "Calibración Óptica",
    description: "Instrumentos ópticos y sistemas de medición visual",
    items: [
      "Luxómetros",
      "Colorímetros",
      "Medidores de luminancia",
      "Sistemas ópticos",
      "Instrumentos fotométricos"
    ]
  }
];

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const ServiciosCards = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Servicios de Calibración Especializados
        </h2>
        <p className="text-gray-600 mt-4">
          Ofrecemos calibración acreditada en múltiples magnitudes, garantizando la trazabilidad y confiabilidad de sus instrumentos de medición
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicios.map((servicio, index) => (
          <div key={index} id={slugify(servicio.title)} className="border border-gray-200 rounded-lg p-6 text-left shadow-sm hover:shadow-md transition">
            <div className="flex items-center mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={servicio.icon} alt={`Icono de ${servicio.title}`} className="w-10 h-10 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                {servicio.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              {servicio.description}
            </p>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-4">
              {servicio.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <button className="mt-auto text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-md">
              Solicitar Cotización →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiciosCards;
