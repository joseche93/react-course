/*Module Dependencies*/
import React from 'react';
import PokeAvatar from './pokeavatar';

/*Componente PokeRow*/
export default class PokeRow extends React.Component{
	onClick(event){
		this.props.growl.call(this, this.props.name)

	}
		render() {
			return  <li> 
						<PokeAvatar  number={this.props.number} onClick={this.onClick.bind(this)} />
						{this.props.name} 
					</li>

		}
	}