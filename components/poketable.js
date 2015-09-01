/*Module Dependencies*/
import React from 'react';
import Pokerow from './pokerow';
import PokeAvatar from './pokeavatar'

/*Componente PokeTAble*/
export default class PokeTable extends React.Component{
		render(){
			return  <ul className="Poketable">
						{
							this.props.pokemons.map((pokemon) => {

								return <PokeRow key={pokemon.number} name={pokemon.name} number={pokemon.number} /> 
							})
						}
				   	</ul>
		}	
	}