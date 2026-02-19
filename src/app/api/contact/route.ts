import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const DESTINATION_EMAIL = 'ventasqlm@qlm.mx';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string; // Honeypot
};

const clean = (value: unknown) => String(value ?? '').trim();

const getEnv = (key: string) => {
  const value = process.env[key];
  return value ? value.trim() : '';
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = clean(body.name);
    const company = clean(body.company);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const service = clean(body.service);
    const message = clean(body.message);
    const website = clean(body.website);

    // Honeypot simple para bots
    if (website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Completa los campos obligatorios.' },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'El correo electrónico no es válido.' },
        { status: 400 },
      );
    }

    if (message.length > 4000) {
      return NextResponse.json(
        { error: 'El mensaje es demasiado largo.' },
        { status: 400 },
      );
    }

    const host = getEnv('SMTP_HOST');
    const port = Number(getEnv('SMTP_PORT') || 587);
    const user = getEnv('SMTP_USER');
    const pass = getEnv('SMTP_PASS');
    const from = getEnv('SMTP_FROM') || user;
    const secure = getEnv('SMTP_SECURE') === 'true';

    if (!host || !port || !user || !pass || !from) {
      return NextResponse.json(
        { error: 'La configuración de correo del servidor está incompleta.' },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const text = [
      'Nueva solicitud de cotización',
      '',
      `Nombre: ${name}`,
      `Empresa: ${company || 'No especificada'}`,
      `Email: ${email}`,
      `Teléfono: ${phone || 'No especificado'}`,
      `Servicio: ${service}`,
      '',
      'Mensaje:',
      message,
    ].join('\n');

    const html = `
      <h2>Nueva solicitud de cotización</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(company || 'No especificada')}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(phone || 'No especificado')}</p>
      <p><strong>Servicio:</strong> ${escapeHtml(service)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `;

    await transporter.sendMail({
      from,
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `Nueva solicitud: ${service}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: 'No se pudo procesar la solicitud.' },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
