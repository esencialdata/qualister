export default function ValueAddedServices() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          Servicios de Valor Añadido
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Logística Integral
            </h3>
            <p className="text-slate-600 text-base">
              Recolección y entrega de equipos en sus instalaciones, simplificando su proceso de calibración.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Certificados Digitales
            </h3>
            <p className="text-slate-600 text-base">
              Acceso inmediato y seguro a sus certificados de calibración a través de nuestra plataforma digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}