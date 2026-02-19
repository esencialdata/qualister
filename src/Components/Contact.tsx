'use client';

import { FormEvent, useState } from 'react';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('loading');
    setSubmitMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      service: String(formData.get('service') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
      website: String(formData.get('website') ?? '').trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'No se pudo enviar el formulario.');
      }

      setSubmitState('success');
      setSubmitMessage('Solicitud enviada correctamente. Te contactaremos pronto.');
      form.reset();
      return;
    } catch (error) {
      setSubmitState('error');
      setSubmitMessage(
        error instanceof Error ? error.message : 'Ocurrió un error al enviar el formulario.',
      );
    }
  };

  return (
    <section className="bg-hero-mid py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        {/* Formulario de contacto */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Solicitar Cotización</h2>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Su nombre"
                autoComplete="name"
                required
                className="bg-hero-bot p-3 rounded-md border border-gray-600 placeholder-gray-400"
              />
              <input
                name="company"
                type="text"
                placeholder="Nombre de la empresa"
                autoComplete="organization"
                className="bg-hero-bot p-3 rounded-md border border-gray-600 placeholder-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                placeholder="su.email@empresa.com"
                autoComplete="email"
                required
                className="bg-hero-bot p-3 rounded-md border border-gray-600 placeholder-gray-400"
              />
              <input
                name="phone"
                type="tel"
                placeholder="+52 (555) 123-4567"
                autoComplete="tel"
                className="bg-hero-bot p-3 rounded-md border border-gray-600 placeholder-gray-400"
              />
            </div>
            <select
              name="service"
              required
              defaultValue=""
              className="w-full bg-hero-bot p-3 rounded-md border border-gray-600 text-gray-300"
            >
              <option value="" disabled>
                Seleccione un servicio
              </option>
              <option>Calibración Dimensional</option>
              <option>Calibración de Presión</option>
              <option>Calibración de Temperatura</option>
              <option>Calibración Eléctrica</option>
              <option>Calibración de Masa</option>
              <option>Calibración de Volumen</option>
              <option>Calibración de Tiempo</option>
              <option>Calibración de Fuerza</option>
              <option>Calibración Óptica</option>
              <option>Pruebas Especializadas</option>
              <option>Desarrollo Tecnológico</option>
            </select>
            <textarea
              name="message"
              placeholder="Describa sus necesidades específicas de calibración..."
              className="w-full bg-hero-bot p-3 rounded-md border border-gray-600 placeholder-gray-400"
              rows={4}
              required
            ></textarea>
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <button
              type="submit"
              disabled={submitState === 'loading'}
              className="w-full bg-gray-600 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-70 transition-colors p-3 rounded-md font-semibold"
            >
              {submitState === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
            <p
              aria-live="polite"
              className={`text-sm ${submitState === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}
            >
              {submitState === 'idle' ? '' : submitMessage}
            </p>
          </form>
        </div>

        {/* Información de contacto */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Información de Contacto</h3>
            <p className="mb-1">Dirección</p>
            <p className="text-sm text-gray-300">
              Europark II Bodega A34 Carretera 431 km 1.9<br />
              Entre el Parque Bernardo Quintana y El parque Innovación El Marqués, Querétaro
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Contacto Directo</h4>
            <p className="text-sm text-gray-300">
              Tel: +52 (449) 150 8894<br />
              Email: ventasqlm@qlm.mx
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
