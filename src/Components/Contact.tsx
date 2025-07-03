export default function Contact() {
  return (
    <section className="bg-hero-mid py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        {/* Formulario de contacto */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Solicitar Cotización</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Su nombre"
                className="bg-hero-bot p-3 rounded-md border border-gray-600 placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Nombre de la empresa"
                className="bg-hero-bot p-3 rounded-md border border-gray-600 placeholder-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="su.email@empresa.com"
                className="bg-hero-bot p-3 rounded-md border border-gray-600 placeholder-gray-400"
              />
              <input
                type="tel"
                placeholder="+52 (555) 123-4567"
                className="bg-hero-bot p-3 rounded-md border border-gray-600 placeholder-gray-400"
              />
            </div>
            <select className="w-full bg-hero-bot p-3 rounded-md border border-gray-600 text-gray-300">
              <option>Seleccione un servicio</option>
              <option>Calibración Dimensional</option>
              <option>Calibración de Presión</option>
              <option>Pruebas Especializadas</option>
              <option>Desarrollo Tecnológico</option>
            </select>
            <textarea
              placeholder="Describa sus necesidades específicas de calibración..."
              className="w-full bg-hero-bot p-3 rounded-md border border-gray-600 placeholder-gray-400"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gray-600 hover:bg-gray-500 transition-colors p-3 rounded-md font-semibold"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>

        {/* Información de contacto */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Información de Contacto</h3>
            <p className="mb-1">Dirección</p>
            <p className="text-sm text-gray-300">
              Av. Innovación 123, Parque Tecnológico<br />
              Col. Industrial Norte<br />
              Ciudad de México, 01234
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Contacto Directo</h4>
            <p className="text-sm text-gray-300">
              Teléfono: +52 (55) 1234-5678<br />
              Email: ventas@qualister.com<br />
              Soporte: soporte@qualister.com
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Garantía de Calidad</h4>
            <ul className="list-disc list-inside text-sm text-gray-300">
              <li>Acreditación ISO/IEC 17025</li>
              <li>Trazabilidad Internacional</li>
              <li>Certificados Digitales</li>
              <li>Servicio de Logística</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Horario de Atención</h4>
            <p className="text-sm text-gray-300">
              Lunes - Viernes: 8:00 AM - 6:00 PM<br />
              Sábados: 9:00 AM - 2:00 PM<br />
              Domingos: Cerrado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}