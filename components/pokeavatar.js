/*Module Dependencies*/
import React from 'react';

/*Componente PokeAvatar*/
export default class PokeAvatar extends React.Component{
		render() {
			var url= `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
			return <img  src={url} className='Avatar' />
		}
	}