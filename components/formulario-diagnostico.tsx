'use client'

import { useState } from 'react'
import { X, Loader2 } from 'lucide-react'
import { registrarClienteConsentimiento, obtenerUrlTerminos, type DatosCliente } from '@/lib/servicios'

interface FormularioDiagnosticoProps {
  estaAbierto: boolean
  alCerrar: () => void
}

export function FormularioDiagnostico({ estaAbierto, alCerrar }: FormularioDiagnosticoProps) {
  const [enviando, setEnviando] = useState(false)
  const [exito, setExito] = useState(false)
  const [error, setError] = useState('')
  const [aceptaTerminos, setAceptaTerminos] = useState(false)
  const [datosFormulario, setDatosFormulario] = useState<DatosCliente>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    ciudad: '',
    placaVehiculo: '',
    servicioSolicitado: '',
  })

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setDatosFormulario((prev) => ({ ...prev, [name]: value }))
  }

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!aceptaTerminos) {
      setError('Debes aceptar los términos y condiciones')
      return
    }

    setEnviando(true)
    setError('')

    const resultado = await registrarClienteConsentimiento(datosFormulario)

    if (resultado.ok) {
      setExito(true)
      setDatosFormulario({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        ciudad: '',
        placaVehiculo: '',
        servicioSolicitado: '',
      })
      setAceptaTerminos(false)
      setTimeout(() => {
        alCerrar()
        setExito(false)
      }, 3000)
    } else {
      setError(resultado.mensaje)
    }

    setEnviando(false)
  }

  if (!estaAbierto) return null

  const urlTerminos = obtenerUrlTerminos()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Fondo oscuro */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={alCerrar}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        {/* Cabecera */}
        <div className="sticky top-0 bg-marca-azul px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-xl font-bold text-white">Solicita tu Diagnóstico GRATIS</h2>
          <button 
            onClick={alCerrar}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6">
          {exito ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-marca-azul mb-2">¡Solicitud Enviada!</h3>
              <p className="text-gray-600">Nos pondremos en contacto contigo muy pronto.</p>
            </div>
          ) : (
            <form onSubmit={manejarEnvio} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={datosFormulario.nombre}
                    onChange={manejarCambio}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marca-amarillo focus:border-marca-amarillo transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    required
                    value={datosFormulario.apellido}
                    onChange={manejarCambio}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marca-amarillo focus:border-marca-amarillo transition-colors"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={datosFormulario.email}
                  onChange={manejarCambio}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marca-amarillo focus:border-marca-amarillo transition-colors"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={datosFormulario.telefono}
                    onChange={manejarCambio}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marca-amarillo focus:border-marca-amarillo transition-colors"
                    placeholder="+593 99 999 9999"
                  />
                </div>
                <div>
                  <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-1">
                    Ciudad *
                  </label>
                  <select
                    id="ciudad"
                    name="ciudad"
                    required
                    value={datosFormulario.ciudad}
                    onChange={manejarCambio}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marca-amarillo focus:border-marca-amarillo transition-colors"
                  >
                    <option value="">Selecciona tu ciudad</option>
                    <option value="Quito">Quito</option>
                    <option value="Guayaquil">Guayaquil</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="placaVehiculo" className="block text-sm font-medium text-gray-700 mb-1">
                  Placa del Vehículo *
                </label>
                <input
                  type="text"
                  id="placaVehiculo"
                  name="placaVehiculo"
                  required
                  value={datosFormulario.placaVehiculo}
                  onChange={manejarCambio}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marca-amarillo focus:border-marca-amarillo transition-colors uppercase"
                  placeholder="ABC-1234"
                />
              </div>

              <div>
                <label htmlFor="servicioSolicitado" className="block text-sm font-medium text-gray-700 mb-1">
                  Servicio Solicitado *
                </label>
                <select
                  id="servicioSolicitado"
                  name="servicioSolicitado"
                  required
                  value={datosFormulario.servicioSolicitado}
                  onChange={manejarCambio}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marca-amarillo focus:border-marca-amarillo transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Diagnóstico gratuito">Diagnóstico gratuito</option>
                  <option value="Mantenimiento preventivo">Mantenimiento preventivo</option>
                  <option value="Mantenimiento correctivo">Mantenimiento correctivo</option>
                  <option value="Cambio de aceite">Cambio de aceite</option>
                  <option value="Frenos">Frenos</option>
                  <option value="Suspensión">Suspensión</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Checkbox de términos */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="aceptaTerminos"
                  checked={aceptaTerminos}
                  onChange={(e) => setAceptaTerminos(e.target.checked)}
                  className="w-5 h-5 mt-0.5 text-marca-amarillo border-gray-300 rounded focus:ring-marca-amarillo cursor-pointer"
                />
                <label htmlFor="aceptaTerminos" className="text-sm text-gray-600 cursor-pointer">
                  Acepto los{' '}
                  <a
                    href={urlTerminos}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-marca-azul font-medium hover:underline"
                  >
                    Términos y Condiciones
                  </a>
                  {' '}y la política de protección de datos personales.
                </label>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-marca-amarillo text-marca-azul font-bold py-3 px-6 rounded-full hover:bg-marca-amarillo/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {enviando ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Solicitar Diagnóstico GRATIS'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
