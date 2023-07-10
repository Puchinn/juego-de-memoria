import confetti from 'canvas-confetti'

const numeroRandom = (rango) => {
  return Math.trunc(Math.random() * rango)
}

export function crearTablero({ arrayDeContenido, longitud }) {
  const recotarTablero = arrayDeContenido.slice(0, longitud)
  const nuevoTablero = new Array(recotarTablero.length * 2).fill(0)
  const rangoDeNumeros = nuevoTablero.length
  recotarTablero.forEach((ele) => {
    const comprobar = (numero) => {
      const posicionAleatoria = numeroRandom(rangoDeNumeros)
      if (nuevoTablero[numero] === 0) {
        nuevoTablero[numero] = ele.valor
        return
      }
      return comprobar(posicionAleatoria)
    }
    comprobar(numeroRandom(rangoDeNumeros))
    comprobar(numeroRandom(rangoDeNumeros))
  })
  return nuevoTablero
}

export function encontrarPar(tablero, tarjetasSeleccionadas) {
  const [indice1, indice2] = tarjetasSeleccionadas
  const valor1 = tablero[indice1]
  const valor2 = tablero[indice2]
  return valor1 === valor2
}

export function mostrarConfetti() {
  const count = 200
  const defaults = {
    origin: { y: 0.7 },
  }

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    )
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  })
  fire(0.2, {
    spread: 60,
  })
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  })
}
