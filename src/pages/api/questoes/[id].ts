// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import questoes from '../bancoDeQuestoes'

export default function handler(req, res) {

  const idSelecionado = +req.query.id

  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado )

if(unicaQuestaoOuNada.length === 1){
  const questoesSelecionadas = unicaQuestaoOuNada[0].embaralharRespostas()
  res.status(200).json(questoesSelecionadas.paraObjeto())
}else{
 res.status(204)
  .send()
}

 
}
