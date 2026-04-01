'use client'

import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from 'lucide-react'
import { abrirWhatsApp } from '@/lib/servicios'

// Datos de las agencias
const agencias = [
  {
    id: 1,
    nombre: 'MONTESERRÍN',
    ciudad: 'Quito',
    direccion: 'De las Alondras, y y De Las Higueras n45b, Quito',
    telefono: '+593 99 999 9001',
    horario: 'Lun-Vie: 7:00-17:00 | Sáb: 8:00-14:00',
    esPrincipal: true,
    esNueva: false,
    mapaUrl: 'https://maps.app.goo.gl/6bvaoMXFpsCqA7gJ8',
    mapaEmbed: 'https://www.google.com/maps/embed?pb=!4v1775019193823!6m8!1m7!1sLvPD5QDKiVAoXmoQWTsJ9A!2m2!1d-0.1596448768806974!2d-78.46337688615509!3f55.089024!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
  },
  {
    id: 2,
    nombre: 'BRASIL',
    ciudad: 'Quito',
    direccion: 'Av. Brasil, Quito',
    telefono: '+593 96 411 7777',
    horario: 'Lun-Vie: 8:00-17:00 | Sáb: 8:00-14:00',
    esPrincipal: false,
    esNueva: false,
    mapaUrl: 'https://maps.app.goo.gl/jWFitCnu24ifNsdv7',
    mapaEmbed: 'https://www.google.com/maps/embed?pb=!4v1775019260385!6m8!1m7!1sICHPBUw3J1UZ_1QFsA936g!2m2!1d-0.1633727203334992!2d-78.48954476631958!3f57.055244!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
  },
  {
    id: 3,
    nombre: 'ELOY ALFARO',
    ciudad: 'Quito',
    direccion: 'De Las Higueras y Av. Eloy Alfaro 100 y, Quito',
    telefono: '+593 98 725 6144',
    horario: 'Lun-Vie: 8:00-18:00',
    esPrincipal: false,
    esNueva: false,
    mapaUrl: 'https://maps.app.goo.gl/acVZDUrnriBZ3hTU9',
    mapaEmbed: 'https://www.google.com/maps/embed?pb=!4v1775019359047!6m8!1m7!1srJtchoQkVHask1NN3VxPOQ!2m2!1d-0.1600389007628354!2d-78.46587629660095!3f164.09363231812313!4f-5.289148399713426!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
  },
  {
    id: 4,
    nombre: 'GUAYAQUIL',
    ciudad: 'Guayaquil',
    direccion: 'Av. Juan Tanca Marengo 305, 2º Pasaje 2A Mz21 Villa 4, Guayaquil',
    telefono: '+593 96 356 7777',
    horario: 'Lun-Vie: 8:00-18:00 | Sáb: 8:00-14:00',
    esPrincipal: false,
    esNueva: true,
    mapaUrl: 'https://maps.google.com/?q=Guayaquil+Ecuador',
    mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.123456789!2d-79.89!3d-2.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTAnMTIuMCJTIDc5wrA1Myc0OC4wIlc!5e0!3m2!1ses!2sec!4v1234567890',
  },
]

const IconoWhatsApp = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

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
                  <IconoWhatsApp/>
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
            <IconoWhatsApp/>
            Escríbenos por WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}
