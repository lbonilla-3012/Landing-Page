'use client'

import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from 'lucide-react'
import { abrirWhatsApp } from '@/lib/servicios'

// Datos de las agencias
const agencias = [
  {
    id: 1,
    nombre: 'MONTESERRÍN',
    ciudad: 'Quito',
    direccion: 'Av. Monteserrín y Calle Principal, Quito',
    telefono: '+593 99 999 9001',
    horario: 'Lun-Vie: 8:00-18:00 | Sáb: 8:00-14:00',
    esPrincipal: true,
    esNueva: false,
    mapaUrl: 'https://maps.google.com/?q=Monteserrin+Quito+Ecuador',
    mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.123456789!2d-78.48!3d-0.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTAnMTIuMCJTIDc4wrAyOCc0OC4wIlc!5e0!3m2!1ses!2sec!4v1234567890',
  },
  {
    id: 2,
    nombre: 'BRASIL',
    ciudad: 'Quito',
    direccion: 'Av. Brasil y Naciones Unidas, Quito',
    telefono: '+593 99 999 9002',
    horario: 'Lun-Vie: 8:00-18:00 | Sáb: 8:00-14:00',
    esPrincipal: false,
    esNueva: false,
    mapaUrl: 'https://maps.google.com/?q=Av+Brasil+Quito+Ecuador',
    mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.123456789!2d-78.49!3d-0.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTAnMTIuMCJTIDc4wrAyOSc0OC4wIlc!5e0!3m2!1ses!2sec!4v1234567890',
  },
  {
    id: 3,
    nombre: 'ELOY ALFARO',
    ciudad: 'Quito',
    direccion: 'Av. Eloy Alfaro y 6 de Diciembre, Quito',
    telefono: '+593 99 999 9003',
    horario: 'Lun-Vie: 8:00-18:00 | Sáb: 8:00-14:00',
    esPrincipal: false,
    esNueva: false,
    mapaUrl: 'https://maps.google.com/?q=Av+Eloy+Alfaro+Quito+Ecuador',
    mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.123456789!2d-78.47!3d-0.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTEnMTIuMCJTIDc4wrAyOCcwMC4wIlc!5e0!3m2!1ses!2sec!4v1234567890',
  },
  {
    id: 4,
    nombre: 'GUAYAQUIL',
    ciudad: 'Guayaquil',
    direccion: 'Av. Principal, Guayaquil',
    telefono: '+593 99 999 9004',
    horario: 'Lun-Vie: 8:00-18:00 | Sáb: 8:00-14:00',
    esPrincipal: false,
    esNueva: true,
    mapaUrl: 'https://maps.google.com/?q=Guayaquil+Ecuador',
    mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.123456789!2d-79.89!3d-2.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTAnMTIuMCJTIDc5wrA1Myc0OC4wIlc!5e0!3m2!1ses!2sec!4v1234567890',
  },
]

export function SeccionAgencias() {
  const manejarContactoAgencia = (nombreAgencia: string) => {
    abrirWhatsApp(`Hola 1001Talleres, me interesa visitarlos en la agencia ${nombreAgencia}`)
  }

  return (
    <section id="ubicaciones" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-marca-amarillo text-marca-azul font-bold text-sm px-4 py-2 rounded-full mb-4">
            NUESTRAS AGENCIAS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-marca-azul mb-4 text-balance">
            Estamos cerca de ti
            <br />
            <span className="text-marca-amarillo">4 ubicaciones en Ecuador</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Encuéntranos en Quito (3 agencias) y Guayaquil. Siempre con atención inmediata, sin cita previa.
          </p>
        </div>

        {/* Grid de agencias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {agencias.map((agencia) => (
            <div
              key={agencia.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Mapa */}
              <div className="relative h-48 bg-gray-200">
                <iframe
                  src={agencia.mapaEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${agencia.nombre}`}
                />
                <a
                  href={agencia.mapaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 flex items-center gap-1 bg-white text-marca-azul text-sm font-medium px-3 py-1.5 rounded-lg shadow hover:bg-gray-50 transition-colors"
                >
                  Abrir en Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Información */}
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-marca-azul">{agencia.nombre}</h3>
                    <p className="text-marca-amarillo font-medium">{agencia.ciudad}</p>
                  </div>
                  {agencia.esPrincipal && (
                    <span className="bg-marca-azul text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      PRINCIPAL
                    </span>
                  )}
                  {agencia.esNueva && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      NUEVA
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-gray-600 text-sm mb-5">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-marca-amarillo flex-shrink-0 mt-0.5" />
                    <span>{agencia.direccion}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-marca-amarillo flex-shrink-0" />
                    <span>{agencia.telefono}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-marca-amarillo flex-shrink-0" />
                    <span>{agencia.horario}</span>
                  </div>
                </div>

                <button
                  onClick={() => manejarContactoAgencia(agencia.nombre)}
                  className="w-full flex items-center justify-center gap-2 bg-marca-amarillo text-marca-azul font-bold py-3 px-4 rounded-full hover:bg-marca-amarillo/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar esta agencia
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12 md:mt-16" id="contacto">
          <p className="text-gray-600 mb-4">
            ¿No sabes cuál queda más cerca? Escríbenos y te ayudamos.
          </p>
          <button
            onClick={() => abrirWhatsApp('Hola 1001Talleres, necesito ayuda para encontrar la agencia más cercana')}
            className="inline-flex items-center justify-center gap-2 bg-marca-azul text-white font-bold py-3 px-8 rounded-full hover:bg-marca-azul/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Escríbenos por WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}
