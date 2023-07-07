import { mostrarConfetti } from '../js/functions'
import { useJuegoContext } from '../hooks/useJuegoContext'

export function Winner() {
  const { tableroCompletado } = useJuegoContext()

  if (tableroCompletado) {
    mostrarConfetti()
  }

  const ok = () => {
    const divWinner = document.querySelector('.win')
    divWinner.classList.remove('mostrarWin')
  }

  return (
    <div className={`win ${tableroCompletado && 'mostrarWin'}`}>
      <div className='win-box'>
        <h1>WINN!🎉</h1>
        <button onClick={ok}>OK</button>
      </div>
    </div>
  )
}
