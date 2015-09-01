/*Module Dependencies*/
import React from 'react';
import PokeTable from './components/poketable';

var pokemons =[
		{number: 1, name: 'bulbasaur'},
		{number: 2, name: 'Ivysur'},
		{number: 3, name: 'venasaur'}
	];
	
	React.render(
		<PokeTable pokemons={pokemons} />,
		document.getElementById('container')
	);

