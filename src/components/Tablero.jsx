import { Tarjeta } from './Tarjeta'
import { useJuegoContext } from '../hooks/useJuegoContext'

export function Tablero() {
  const { tablero } = useJuegoContext()

  return (
    <ul className='listaTarjetas'>
      {tablero.map((elemento, indice) => (
        <Tarjeta key={indice} indice={indice}>
          {elemento}
        </Tarjeta>
      ))}
    </ul>
  )
}
