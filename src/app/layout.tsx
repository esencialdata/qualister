import './globals.css';
import { ReactNode } from 'react';
import Header from '../Components/Header';   // ← ojo a la C mayúscula
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Qualister - Metrología Industrial y Calibración de Equipos',
  description: 'Laboratorio de metrología industrial en México. Ofrecemos servicios de calibración de equipos, pruebas de calidad e innovación tecnológica para la industria.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="scroll-smooth antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}