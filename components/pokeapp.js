/*Module Dependencies*/
import React from 'react';
import PokeTable from './poketable';
import PokeChat from './pokechat';

export default class PokeApp extends React.Component{

	construct(props){
		super(props);
		this.state = {messages: []};
	}

	onGrowl(name){
		var messages= this.state.messages.push({text: text});
		this.setState({messages: messages})
	}

	render(){
		var pokemons =[
		{number: 1, name: 'bulbasaur'},
		{number: 2, name: 'Ivysur'},
		{number: 3, name: 'venasaur'}
	];
		return  <div className='pokeapp'>
				<PokeTable pokemons={pokemons} growl={this.onGrowl.bind(this)} />
				<PokeChat />
				</div>
	}
}