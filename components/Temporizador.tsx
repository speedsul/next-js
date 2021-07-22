import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../src/styles/Temporizador.module.css'


interface TemporizadorProps {
  key: any
  duracao: number
  tempoEsgotado: () => void
}

export default function Temporizador (props: TemporizadorProps) {
  return(
    <div className={styles.temporizador}>
      <CountdownCircleTimer 
        duration={props.duracao}
        size={120}
        isPlaying
        onComplete={props.tempoEsgotado}
          colors={[
            ['#7dfb06', 0.33],
            ['#b86609', 0.33],
            ['#e41405', 0.33]
          ]}

      >
        {({remainingTime})=> remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}