import { useState, useEffect } from 'react'
import './App.css'

const numeroRandom = () => {
  return Math.trunc(Math.random() * 16)
}

let primerArray = new Array(16).fill(0)
const cosas = [
  {
    valor: '🤩',
  },
  {
    valor: '🏆',
  },
  {
    valor: '💖',
  },
  {
    valor: '🌈',
  },
  {
    valor: '😎',
  },
  {
    valor: '🚁',
  },
  {
    valor: '😈',
  },
  {
    valor: '🍅',
  },
]

const crearTablero = (array) => {
  cosas.forEach((ele) => {
    const comprobar = (numero) => {
      const posicionAleatoria = numeroRandom()
      if (array[numero] === 0) {
        array[numero] = ele.valor
        return
      }
      return comprobar(posicionAleatoria)
    }
    comprobar(numeroRandom())
    comprobar(numeroRandom())
  })
}

crearTablero(primerArray)

function App() {
  const [tablero, setTablero] = useState(primerArray)
  const [tarjetasReveladas, setTarjetasReveladas] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ])
  const [tarjetasSeleccionadas, setTarjetasSeleccionadas] = useState([])

  const reiniciarJuego = () => {
    const nuevoTablero = new Array(16).fill(0)
    crearTablero(nuevoTablero)
    setTablero(nuevoTablero)
    setTarjetasReveladas([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    setTarjetasSeleccionadas([])
  }

  const handleClick = (indice, estaRevelado, estaSeleccionado) => {
    if (!estaRevelado) {
      setTarjetasReveladas([...tarjetasReveladas, indice])
    }
    if (!estaRevelado && !estaSeleccionado) {
      setTarjetasSeleccionadas([...tarjetasSeleccionadas, indice])
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setTarjetasReveladas([])
    }, 2000)
  }, [tablero])

  useEffect(() => {
    if (tarjetasSeleccionadas.length === 2) {
      const [indice1, indice2] = tarjetasSeleccionadas
      const valor1 = tablero[indice1]
      const valor2 = tablero[indice2]

      if (valor1 === valor2) {
        // Si las tarjetas forman un par coincidente, déjalas reveladas.
        setTarjetasReveladas([...tarjetasReveladas, indice1, indice2])
      } else {
        // Si no forman un par coincidente, oculta las tarjetas después de un tiempo.
        setTimeout(() => {
          setTarjetasReveladas(
            tarjetasReveladas.filter(
              (indice) => !tarjetasSeleccionadas.includes(indice)
            )
          )
        }, 200)
      }

      // Reinicia las tarjetas seleccionadas después de verificar el par.
      setTarjetasSeleccionadas([])
    }
  }, [tarjetasSeleccionadas])

  return (
    <>
      <div>
        <h1>Juego de memoria</h1>
        <div>
          <ul className='listaTarjetas'>
            {tablero.map((i, indice) => (
              <Tarjeta
                tarjetasReveladas={tarjetasReveladas}
                key={indice}
                indice={indice}
                handleClick={handleClick}
                tarjetasSeleccionadas={tarjetasSeleccionadas}
              >
                {i}
              </Tarjeta>
            ))}
          </ul>
        </div>
        <button onClick={reiniciarJuego} className='btn-comenzar'>
          Nuevo Juego
        </button>
      </div>
    </>
  )
}

export default App

function Tarjeta({
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

// const numeroRandom = (numero) => {
//   const random = Math.trunc(Math.random() * 16)
//   if (numero !== random) {
//     return random
//   }
//   return numeroRandom(numero)
// }

// const [movimientos, setMovimientos] = useState(0)
//   const [seleccionados, setSeleccionados] = useState([])
//   const [completados, setCompletados] = useState([])

// const reiniciarJuego = () => {
//   const nuevoTablero = new Array(16).fill(0)
//   crearTablero(nuevoTablero)
//   setTablero(nuevoTablero)
//   setSeleccionados([])
//   setCompletados([])
//   setMovimientos(0)
// }

//   const agregarSeleccionado = (valor) => {
//     const nuevoSeleccionados = structuredClone(seleccionados)
//     const encontrado = nuevoSeleccionados.find((i) => i.id === valor)
//     if (encontrado) {
//       nuevoSeleccionados[0].vecesSeleccionado += 1
//       setMovimientos(movimientos + 1)
//     } else {
//       nuevoSeleccionados.push({ id: valor, vecesSeleccionado: 1 })
//       setMovimientos(movimientos + 1)
//     }
//     setSeleccionados(nuevoSeleccionados)
//   }

//   console.log(seleccionados)

//   if (movimientos === 2) {
//     const nuevosCompletados = structuredClone(completados)
//     if (seleccionados.length > 1) {
//       setSeleccionados([])
//       setMovimientos(0)
//       return
//     }
//     nuevosCompletados.push(seleccionados[0].id)
//     setMovimientos(0)
//     setSeleccionados([])
//     setCompletados(nuevosCompletados)
//   }
