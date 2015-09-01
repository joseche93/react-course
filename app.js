/*Module Dependencies*/
import React from 'react';
import PokeApp from './components/pokeapp';

var pokemons =[
		{number: 1, name: 'bulbasaur'},
		{number: 2, name: 'Ivysur'},
		{number: 3, name: 'venasaur'}
	];
	
	React.render(
		<PokeApp pokemons={pokemons} />,
		document.getElementById('container')
	);

