import { Tablero } from './components/Tablero'
import { Winner } from './components/Winner'
import { useJuegoContext } from './hooks/useJuegoContext'
import { tamaños } from './js/consts'
import './App.css'

const claves = Object.keys(tamaños)

function App() {
  const {
    reiniciarJuego,
    mostrarTablero,
    actualizarVelocidad,
    ocultarNumeros,
    motrarNumeros,
    actualizarTamaño,
    nuevoTablero,
  } = useJuegoContext()

  const botones = claves.map((tamaño) => (
    <button
      onClick={() => {
        actualizarTamaño(tamaño)
        nuevoTablero(tamaños[tamaño].cartasUnicas)
      }}
      key={tamaño}
    >
      {tamaño}
    </button>
  ))

  return (
    <div>
      <h1>Juego de memoria</h1>
      <Tablero />
      <div className='botones'>
        <button onClick={reiniciarJuego} className='btn-comenzar'>
          Nuevo Tablero
        </button>
        <button onClick={mostrarTablero}>Mostrar Tablero</button>
      </div>
      <Winner />
      <div className='botones'>
        <button onClick={() => actualizarVelocidad('rapido')}>Rapido</button>
        <button onClick={() => actualizarVelocidad('normal')}>Normal</button>
        <button onClick={() => actualizarVelocidad('lento')}>Lento</button>
      </div>
      <div className='botones'>
        <button onClick={motrarNumeros}>Mostrar Numeros</button>
        <button onClick={ocultarNumeros}>Ocultar Numeros</button>
      </div>
      <div className='botones'>{botones}</div>
    </div>
  )
}

export default App
