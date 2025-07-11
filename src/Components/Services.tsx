import Link from 'next/link';

export default function Services() {
  const DATA = [
    {
      title: 'Calibración Dimensional',
      desc: 'Medición de alta precisión para instrumentos dimensionales con trazabilidad certificada.',
      icon: '/icon-micrometro.svg',
      bullets: [
        'Micrómetros',
        'Calibradores',
        'Bloques patrón',
        'Instrumentos de medición',
      ],
    },
    {
      title: 'Calibración de Presión',
      desc: 'Calibración de manómetros e instrumentos de presión para todas las industrias.',
      icon: '/icon-manometro.svg',
      bullets: [
        'Manómetros',
        'Transductores',
        'Presión diferencial',
        'Sistemas neumáticos',
      ],
    },
    {
      title: 'Pruebas Especializadas',
      desc: 'Desarrollo de métodos y pruebas específicas para aplicaciones complejas.',
      icon: '/icon-lupa.svg',
      bullets: [
        'Métodos customizados',
        'Análisis técnico',
        'Validaciones',
        'Certificaciones especiales',
      ],
    },
    {
      title: 'Desarrollo Tecnológico',
      desc: 'Consultoría técnica y desarrollo de soluciones metrológicas innovadoras.',
      icon: '/icon-microchip.svg',
      bullets: [
        'Asesoría técnica',
        'Implementación',
        'Capacitación',
        'Soporte continuo',
      ],
    },
  ];

  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

  return (
    <section
      id="servicios"
      className="bg-white text-slate-900 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
          Nuestros servicios
        </h2>

        <div className="grid gap-10 lg:grid-cols-4">
          {DATA.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.icon} alt={`Icono de ${item.title}`} className="mx-auto h-12 w-12" />
              </div>
              <h3 className="mb-2 text-base font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm text-slate-700 mb-4">{item.desc}</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 text-left">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href={`/Servicios#${slugify(item.title)}`} className="w-full block rounded border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
                  Ver Detalles
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}