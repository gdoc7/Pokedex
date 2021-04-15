import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import styled from 'styled-components'

const SLink  = styled(Link)`
    text-decoration: none;
    color: black;
    &:link{
        text-decoration:none;
    }
`;
// Agregar sombras a las cartas "3D"
export default class CartaPokemon extends Component {
    state ={
        name:'',
        imagen:'',
        id:'', 
     }
    componentDidMount(){
        const nombre = this.props.name;
        const url = this.props.url;
        const  id = url.split('/')[url.split('/').length -2] 
        const imagen = `https://github.com/PokeApi/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`;

        this.setState({nombre, id, imagen});

    }
    render() {
     
        return (
            <div className='col-md-3 col-sm-6 md-5 '>
                <SLink to={`pokemon/${this.state.id}`}>
                <div className="card m-2">
                    
                    <h5 className="card-header "> {this.state.id}</h5>    
                    <img src= {this.state.imagen} className="card-img-top"/>
                        <div className="card-body">
                           <h6 className="card-title"> {this.state.nombre}</h6>    
                             
                       </div>                
                </div>
                </SLink>
            </div>
        )
    }
}
