import React, { Component } from 'react'

import './../../App.css';
export default class NavBar extends Component {
    render() {
        return (
            <div>                
                <nav class="navbar  fixed-top "> 
                    <a class="navbar-brand" href="/">
                        <img  id="logo" src="src/pokemon.png"/>
                    </a>
                </nav>                    
            </div>
        )
    }
}

