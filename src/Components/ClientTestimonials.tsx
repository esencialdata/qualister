export default function ClientTestimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gray-500 uppercase">Testimonios</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro. Descubra por qué eligen Qualister para sus necesidades de metrología.
          </p>
        </div>

        {/* Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <blockquote className="italic text-gray-700 mb-4">
              “Qualister ha sido fundamental en nuestro proceso de certificación. Su expertise técnico y la calidad de sus calibraciones nos han permitido mantener los más altos estándares.”
            </blockquote>
            <div className="text-sm font-bold text-gray-900">Ing. María González</div>
            <div className="text-sm text-gray-600">Gerente de Calidad<br />Manufacturas Industriales SA</div>
            <span className="inline-block mt-2 text-xs font-medium bg-gray-200 text-gray-700 px-2 py-1 rounded">Automotriz</span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <blockquote className="italic text-gray-700 mb-4">
              “La precisión y confiabilidad de sus servicios, junto con la logística integral, han optimizado significativamente nuestros procesos de mantenimiento.”
            </blockquote>
            <div className="text-sm font-bold text-gray-900">Carlos Hernández</div>
            <div className="text-sm text-gray-600">Jefe de Mantenimiento<br />Aeronáutica Mexicana</div>
            <span className="inline-block mt-2 text-xs font-medium bg-gray-200 text-gray-700 px-2 py-1 rounded">Aeroespacial</span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <blockquote className="italic text-gray-700 mb-4">
              “Su capacidad para resolver desafíos metrológicos complejos y la rapidez en la entrega de certificados digitales superó nuestras expectativas.”
            </blockquote>
            <div className="text-sm font-bold text-gray-900">Dra. Ana Ruiz</div>
            <div className="text-sm text-gray-600">Directora Técnica<br />Laboratorios Farmacéuticos Unidos</div>
            <span className="inline-block mt-2 text-xs font-medium bg-gray-200 text-gray-700 px-2 py-1 rounded">Farmacéutica</span>
          </div>
        </div>

        {/* Logos */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Empresas que Confían en Nosotros</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center justify-center">
          {[
            'Manufacturas Industriales',
            'Aeronáutica Mexicana',
            'Laboratorios Unidos',
            'Energía Industrial',
            'Precisión México',
            'Calidad Total SA'
          ].map((company, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm border text-center">
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-br from-gray-300 to-gray-400" />
              <p className="text-xs text-gray-700">{company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}