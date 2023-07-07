import { Tablero } from './components/Tablero'
import { Winner } from './components/Winner'
import { useJuegoContext } from './hooks/useJuegoContext'
import './App.css'

function App() {
  const { reiniciarJuego, mostrarTablero } = useJuegoContext()

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
    </div>
  )
}

export default App
