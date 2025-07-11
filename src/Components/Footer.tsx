

export default function Footer() {
  return (
    <footer className="bg-[#0B1320] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo y descripción */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-qualister.svg" alt="Qualister" className="h-10 mb-4" />
          <p className="text-sm text-gray-300">
            Soluciones metrológicas de alta precisión con más de 60 años de experiencia combinada y acreditación ISO/IEC 17025.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="bg-[#1C2533] text-sm font-semibold py-1.5 px-3 rounded-md">ISO/IEC 17025</button>
            <button className="bg-[#1C2533] text-sm font-semibold py-1.5 px-3 rounded-md">PJLA Evaluation</button>
          </div>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="font-semibold mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Calibración Dimensional</li>
            <li>Calibración de Presión</li>
            <li>Pruebas Especializadas</li>
            <li>Desarrollo Tecnológico</li>
            <li>Logística Integral</li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="font-semibold mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Nosotros</li>
            <li>Calidad y Acreditaciones</li>
            <li>Casos de Éxito</li>
            <li>Recursos</li>
            <li>Carreras</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Europark II Bodega A34 Carretera 431 km 1.9<br />
            Entre el Parque Bernardo Quintana y El parque Innovación El Marqués, Querétaro<br />
            <strong>Tel:</strong> +52 (449) 150 8894<br />
            <strong>Email:</strong> <a href="mailto:ventasqlm@qlm.mx" className="underline">ventasqlm@qlm.mx</a>
          </p>
        </div>
      </div>
    </footer>
  );
}