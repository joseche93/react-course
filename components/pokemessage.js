/*Module Dependencies*/
import React from 'react';

export default class PokeMessage extends.ReactComponent{
	render(){
		return <li className='pokemessage'>{this.props.message.text}
	}
}