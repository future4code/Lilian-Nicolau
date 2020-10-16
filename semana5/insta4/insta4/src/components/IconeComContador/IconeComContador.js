import React from 'react'
import './IconeComContador.css'

export function IconeComContador(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</div>
}
//Esse componente representa o que eu vejo no post, é isso? Ele também chama a função que está lá no post.js... eu preciso mesmo  chamá-la aqui ou só tendo ela lá no post.js, já funcionaria?