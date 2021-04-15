import React, { Component } from 'react'
import PokemonList from '../pokemon/ListaPokemon'
export default class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <PokemonList/>
                    </div>                
            </div>
        )
    }
}
