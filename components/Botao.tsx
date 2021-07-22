
import styles from '../src/styles/Botao.module.css'

import Link from 'next/link'
interface BotaoProps {
      texto:string
      href?: string
      
      onClick?:(e: any) => void
}

export default function Botao (props: BotaoProps) {

  function RenderizarBotao () {
    return (
      <button className={styles.botao} onClick={props.onClick}>{props.texto}</button>
    )
  }
  return ( props.href ? (<Link href={props.href}>{RenderizarBotao()}</Link>) : RenderizarBotao())
}