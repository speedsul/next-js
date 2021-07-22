
import { useRouter } from 'next/router'
import Botao from '../../components/Botao'
import Estatistica from '../../components/Estatistica'
import styles from '../styles/Resultado.module.css'
export default function Resultado() {

  const router = useRouter()

  const total = +router.query.total
  const certas = +router.query.certas
  const percentual = Math.round((certas / total) * 100)
  return (
    <div className={styles.resultado}>
      <h1>Resultado final</h1>
      <div className={styles.displayStatistica}>
        <Estatistica texto="Perguntas" valor={total} />
        <Estatistica texto="Certas" valor={certas} corFundo="#9CD2A4"/>
        <Estatistica texto="Percentual" valor={`${percentual}%`} corFundo="#da4f19"/>
      </div>
      <Botao href="/" texto="Tentar novamente"/>
    </div>
  )
}