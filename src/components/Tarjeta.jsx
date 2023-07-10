import { useJuegoContext } from '../hooks/useJuegoContext'

export function Tarjeta({ indice, children }) {
  const { handleClick, mostrarTarjeta, claseVelocidad, mostrarNumeracion } =
    useJuegoContext()
  const deberiaMostrar = mostrarTarjeta(indice)

  const seleccionarTarjeta = () => {
    handleClick(indice)
  }

  const contenido =
    mostrarNumeracion && deberiaMostrar
      ? children
      : mostrarNumeracion
      ? indice
      : deberiaMostrar
      ? children
      : '?'

  return (
    <li
      onClick={seleccionarTarjeta}
      className={`tarjeta ${
        deberiaMostrar
          ? 'estaRevelada flip-in-ver-right-' + claseVelocidad
          : 'flip-in-ver-left-' + claseVelocidad
      }`}
    >
      {contenido}
    </li>
  )
}
