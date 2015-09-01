/*Module Dependencies*/
import React from 'react';
import PokeMessage from './pokemessage'

export default class PokeChat extends.ReactComponent{
	
	render(){
		return  <ul className="Pokechat">
				{
					this.props.messages.map((message)=>
						{
							return <PokeMessage message={message} />
						});
				}
				</ul>
	}
}