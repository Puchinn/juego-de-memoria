import { useState, useEffect } from 'react'
import { crearTablero } from '../funtions'
import { contenidoTarjetas } from '../consts'

export function useJuegoMemoria() {
  const tableroInicial = crearTablero({ arrayDeContenido: contenidoTarjetas })

  const [tablero, setTablero] = useState(tableroInicial)
  const [tarjetasReveladas, setTarjetasReveladas] = useState([])
  const [tarjetasSeleccionadas, setTarjetasSeleccionadas] = useState([])
  const [indicesCompletados, setIndicesCompletados] = useState(0)
  const [hayGanador, setHayGanador] = useState(false)

  const reiniciarJuego = () => {
    const nuevoTablero = crearTablero({ arrayDeContenido: contenidoTarjetas })
    setTablero(nuevoTablero)
    setTarjetasSeleccionadas([])
    setTarjetasReveladas([])
    setIndicesCompletados(0)
  }

  const handleClick = (indice, estaRevelado, estaSeleccionado) => {
    if (!estaRevelado) {
      setTarjetasReveladas([...tarjetasReveladas, indice])
    }
    if (!estaRevelado && !estaSeleccionado) {
      setTarjetasSeleccionadas([...tarjetasSeleccionadas, indice])
    }
  }

  const ok = () => {
    setHayGanador(false)
  }

  const mostrarTablero = () => {
    if (contenidoTarjetas.length === indicesCompletados) {
      return
    }
    const tableroRevelado = tablero.map((_, indice) => indice)
    const copiaTarjetasReveladas = [...tarjetasReveladas]
    setTarjetasReveladas(tableroRevelado)
    setTimeout(() => {
      setTarjetasReveladas(copiaTarjetasReveladas)
    }, 1500)
  }

  if (tarjetasSeleccionadas.length === 2) {
    const [indice1, indice2] = tarjetasSeleccionadas
    const valor1 = tablero[indice1]
    const valor2 = tablero[indice2]

    if (valor1 === valor2) {
      setTarjetasReveladas([...tarjetasReveladas, indice1, indice2])
      setIndicesCompletados(indicesCompletados + 1)
    } else {
      setTimeout(() => {
        setTarjetasReveladas(
          tarjetasReveladas.filter(
            (indice) => !tarjetasSeleccionadas.includes(indice)
          )
        )
      }, 200)
    }
    setTarjetasSeleccionadas([])
  }

  useEffect(() => {
    if (contenidoTarjetas.length === indicesCompletados) {
      setHayGanador(true)
    }
  }, [indicesCompletados])

  return {
    tablero,
    reiniciarJuego,
    handleClick,
    tarjetasReveladas,
    tarjetasSeleccionadas,
    mostrarTablero,
    hayGanador,
    ok,
  }
}
