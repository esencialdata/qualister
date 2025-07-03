export default function WhyQualister() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="inline-block bg-slate-600 text-white text-sm font-semibold px-6 py-2 rounded-full mb-4">
          Por Qué Elegir Qualister
        </p>
        <h2 className="text-4xl font-bold mb-6">
          Precisión Acreditada y Expertise en Metrología
        </h2>
        <p className="text-lg text-slate-300 mb-16">
          Resolvemos sus desafíos más complejos con la experiencia y certificaciones que su industria exige.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-20 text-left">
          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-2">60+ años</h3>
            <h4 className="font-semibold text-base mb-2">Expertise Comprobado</h4>
            <p className="text-sm text-slate-300">
              Más de 60 años de experiencia combinada enfocada en resolver problemas metrológicos complejos.
            </p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-2">ISO 17025</h3>
            <h4 className="font-semibold text-base mb-2">Calidad Acreditada</h4>
            <p className="text-sm text-slate-300">
              Laboratorio acreditado ISO/IEC 17025 como garantía de calidad y competencia técnica.
            </p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-2">100% Digital</h3>
            <h4 className="font-semibold text-base mb-2">Servicio Integral</h4>
            <p className="text-sm text-slate-300">
              Incluye logística de recolección/entrega y certificados digitales accesibles 24/7.
            </p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-10 text-left grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Nuestro Equipo Experto</h3>
            <p className="text-slate-300 mb-6">
              Contamos con un equipo altamente especializado que combina décadas de experiencia en metrología industrial. Nuestra capacidad de diagnóstico y desarrollo de soluciones a medida nos permite abordar los desafíos más complejos de la industria.
            </p>
            <ul className="text-slate-300 list-disc pl-5 space-y-2 text-sm">
              <li>Especialistas en calibración dimensional y de presión</li>
              <li>Experiencia en desarrollo de métodos personalizados</li>
              <li>Capacitación continua en normas internacionales</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <h4 className="text-2xl font-bold">15+</h4>
              <p className="text-sm text-slate-300">Años Promedio de Experiencia</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">500+</h4>
              <p className="text-sm text-slate-300">Calibraciones Anuales</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">99%</h4>
              <p className="text-sm text-slate-300">Satisfacción del Cliente</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">24h</h4>
              <p className="text-sm text-slate-300">Tiempo de Respuesta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}