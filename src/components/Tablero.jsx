import { Tarjeta } from './Tarjeta'
import { useJuegoContext } from '../hooks/useJuegoContext'

export function Tablero() {
  const { tablero, tamañoClase } = useJuegoContext()

  return (
    <ul className={`listaTarjetas t${tamañoClase}`}>
      {tablero.map((elemento, indice) => (
        <Tarjeta key={indice} indice={indice}>
          {elemento}
        </Tarjeta>
      ))}
    </ul>
  )
}
