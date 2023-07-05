import { Tarjeta } from './Tarjeta'

export function Tablero({
  tablero,
  handleClick,
  tarjetasReveladas,
  tarjetasSeleccionadas,
}) {
  return (
    <ul className='listaTarjetas'>
      {tablero.map((elemento, indice) => (
        <Tarjeta
          tarjetasReveladas={tarjetasReveladas}
          key={indice}
          indice={indice}
          handleClick={handleClick}
          tarjetasSeleccionadas={tarjetasSeleccionadas}
        >
          {elemento}
        </Tarjeta>
      ))}
    </ul>
  )
}
