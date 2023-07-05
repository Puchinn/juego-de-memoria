import confetti from 'canvas-confetti'

export function Winner({ hayGanador, ok }) {
  const mostrarConfetti = () => {
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

  if (hayGanador) {
    mostrarConfetti()
  }

  return (
    <div className={`win ${hayGanador && 'mostrarWin'}`}>
      <div className='win-box'>
        <h1>WINN!🎉</h1>
        <button onClick={ok}>OK</button>
      </div>
    </div>
  )
}
