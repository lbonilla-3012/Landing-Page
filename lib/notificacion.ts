export async function enviarNotificacionRegistro(datos: any): Promise<void> {
  // Obtenemos la URL desde las variables de entorno
  const googleUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  // Validación de seguridad básica: si no hay URL, no hacemos nada
  if (!googleUrl) {
    console.warn('Advertencia: NEXT_PUBLIC_GOOGLE_SCRIPT_URL no está configurada.');
    return;
  }

  try {
    await fetch(googleUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
      keepalive: true 
    });
  } catch (error) {
    console.error('Error enviando notificación:', error);
  }
}