import { useJuegoContext } from '../hooks/useJuegoContext'

export function Tarjeta({ indice, children }) {
  const { handleClick, mostrarTarjeta } = useJuegoContext()
  const deberiaMostrar = mostrarTarjeta(indice)

  const seleccionarTarjeta = () => {
    handleClick(indice)
  }

  return (
    <li
      onClick={seleccionarTarjeta}
      className={`tarjeta ${
        deberiaMostrar ? 'estaRevelada flip-in-ver-right' : 'flip-in-ver-left'
      }`}
    >
      {deberiaMostrar ? children : '?'}
    </li>
  )
}
