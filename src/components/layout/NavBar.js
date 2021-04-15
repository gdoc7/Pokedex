import React, { Component } from 'react'
import logo from "../../pokemon.png"

import './../../App.css';
export default class NavBar extends Component {
    render() {
        return (
            <div>                
                <nav class="navbar  fixed-top "> 
                    <a class="navbar-logo" href="/">
                        <img src={logo} />
                    </a>
                </nav>                    
            </div>
        )
    }
}

