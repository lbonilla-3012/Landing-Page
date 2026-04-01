import { supabase } from './supabase'

export interface DatosCliente {
  nombre: string
  apellido: string
  email: string
  telefono: string
  ciudad: string
  placaVehiculo: string
  servicioSolicitado: string
}

export interface RespuestaRegistro {
  ok: boolean
  id_cliente?: number
  id_politica?: number
  mensaje: string
}

/**
 * Obtiene la IP pública del dispositivo desde un servicio externo
 */
async function obtenerIP(): Promise<string> {
  try {
    const res = await fetch('https://api.ipify.org?format=json')
    const data = await res.json()
    return data.ip
  } catch {
    return 'unknown'
  }
}

/**
 * Registra un cliente con su consentimiento en Supabase.
 * Llama al SP registrar_cliente_consentimiento.
 * acepta_terminos siempre es TRUE — el formulario no permite
 * enviar sin que el checkbox esté marcado.
 */
export async function registrarClienteConsentimiento(
  datos: DatosCliente,
  canal: string = 'web-formulario'
): Promise<RespuestaRegistro> {
  try {
    const ipDispositivo = await obtenerIP()
    const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : 'server'

    const { data, error } = await supabase.rpc('registrar_cliente_consentimiento', {
      p_nombre:              datos.nombre,
      p_apellido:            datos.apellido,
      p_email:               datos.email,
      p_telefono:            datos.telefono,
      p_ciudad:              datos.ciudad,
      p_placa_vehiculo:      datos.placaVehiculo,
      p_servicio_solicitado: datos.servicioSolicitado,
      p_canal:               canal,
      p_ip_dispositivo:      ipDispositivo,
      p_user_agent:          userAgent,
    })

    if (error) {
      console.error('Error al registrar cliente:', error)
      return {
        ok: false,
        mensaje: error.message || 'Error al registrar el cliente',
      }
    }

    return data as RespuestaRegistro

  } catch (error) {
    console.error('Error inesperado:', error)
    return {
      ok: false,
      mensaje: 'Error inesperado al procesar la solicitud',
    }
  }
}

/**
 * Abre WhatsApp con un mensaje predefinido
 */
export function abrirWhatsApp(mensaje?: string): void {
  const numeroWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const mensajePredefinido = mensaje || 'Hola 1001Talleres, quiero mi diagnóstico GRATIS'
  const mensajeCodificado = encodeURIComponent(mensajePredefinido)
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`

  if (typeof window !== 'undefined') {
    window.open(urlWhatsApp, '_blank')
  }
}

/**
 * Obtiene la URL de términos y condiciones
 */
export function obtenerUrlTerminos(): string {
  return process.env.NEXT_PUBLIC_TERMINOS_URL || ''
}