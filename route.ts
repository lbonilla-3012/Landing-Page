import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Asegúrate de agregar RESEND_API_KEY en tu archivo .env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const datos = await req.json();

    // IMPORTANTE: Cuando verifiques tu dominio en Resend, 
    // cambia 'onboarding@resend.dev' por 'notificaciones@tu-dominio.com'
    const { data, error } = await resend.emails.send({
      from: '1001 Talleres <onboarding@resend.dev>', 
      to: ['tu-correo@ejemplo.com'], // El correo donde quieres recibir la información
      reply_to: datos.email, // Permite responder directamente al cliente desde Gmail
      subject: `Nuevo Lead: ${datos.nombre} ${datos.apellido} - ${datos.ciudad}`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #1d4ed8;">Nueva solicitud de diagnóstico</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p>Has recibido un nuevo prospecto desde la Landing Page:</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0;"><strong>Cliente:</strong></td><td>${datos.nombre} ${datos.apellido}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Email:</strong></td><td>${datos.email}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Teléfono:</strong></td><td>${datos.telefono}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Ciudad:</strong></td><td>${datos.ciudad}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Vehículo (Placa):</strong></td><td><span style="background: #fef08a; padding: 2px 6px; border-radius: 4px;">${datos.placaVehiculo}</span></td></tr>
            <tr><td style="padding: 8px 0;"><strong>Servicio:</strong></td><td>${datos.servicioSolicitado}</td></tr>
          </table>
          
          <p style="margin-top: 25px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
            Este mensaje fue enviado automáticamente desde el formulario de contacto.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}