/*Module Dependencies*/
import React from 'react';
import PokeAvatar from './pokeavatar';

/*Componente PokeRow*/
export default class PokeRow extends React.Component{
		render() {
			return  <li> 
						<PokeAvatar  number={this.props.number} />
						{this.props.name} 
					</li>

		}
	}