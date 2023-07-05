export function Tarjeta({
  children,
  indice,
  tarjetasReveladas,
  handleClick,
  tarjetasSeleccionadas,
}) {
  const estaRevelada = tarjetasReveladas.includes(indice)
  const estaSeleccionada = tarjetasSeleccionadas.includes(indice)

  const handleClickTarjeta = () => {
    handleClick(indice, estaRevelada)
  }

  return (
    <li
      onClick={handleClickTarjeta}
      className={`tarjeta ${estaRevelada && 'estaRevelada'}`}
    >
      {estaRevelada || estaSeleccionada ? children : '?'}
    </li>
  )
}
