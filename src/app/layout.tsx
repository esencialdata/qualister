import './globals.css';
import { ReactNode } from 'react';
import Header from '../Components/Header';   // ← ojo a la C mayúscula

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