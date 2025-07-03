// src/app/servicios/page.tsx

import React from "react";
import Header from "../../Components/Header";
import Hero from "./components/Hero";
import ServiciosCards from "./components/ServiciosCards";
import ValueAddedServices from "./components/ValueAddedServices";
import CtaSection from "./components/CtaSection";
import Footer from "../../Components/Footer";

export default function ServiciosPage() {
  return (
    <>
      <Header />

      <Hero />

      <ServiciosCards />
      <ValueAddedServices />
      <CtaSection />
      <Footer />
    </>
  );
}