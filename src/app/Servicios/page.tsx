// src/app/servicios/page.tsx

import React from "react";
import Hero from "./components/Hero";
import ServiciosCards from "./components/ServiciosCards";
import ValueAddedServices from "./components/ValueAddedServices";
import CtaSection from "./components/CtaSection";
import Footer from "../../Components/Footer";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios de Calibración y Metrología Industrial | Qualister',
  description: 'Descubre nuestros servicios especializados en calibración de equipos, pruebas de calidad y soluciones de metrología industrial para optimizar tus procesos.',
}

export default function ServiciosPage() {
  return (
    <>
      <Hero />

      <ServiciosCards />
      <ValueAddedServices />
      <CtaSection />
      <Footer />
    </>
  );
}
