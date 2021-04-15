import React, { Component } from 'react';
import axios from 'axios';

const colores = {
    normal: 'A8A77A',
    fire:  'EE8130',
    water:  '6390F0',
    electric:  'F7D02C',
    grass:  '7AC74C',
    ice:  '96D9D6',
    fighting:  'C22E28',
    poison:  'A33EA1',
    ground:  'E2BF65',
    flying:  'A98FF3',
    psychic:  'F95587',
    bug:  'A6B91A',
    rock:  'B6A136',
    ghost:  '735797',
    dragon:  '6F35FC',
    dark:  '705746',
    steel:  'B7B7CE',
    fairy:  'D685AD'
};

export default class Pokemon extends Component {
    state ={
        name:'',
        id:'',
        imagen:'', 
        types:[],
        description:'',
        stats:{
            hp:"",
            attack:"",
            defense:"",
            speed:"",
            specialAttack:"",
            specialDefense:""
        },
        height:'',
        weight:'',
        abilities:'',
 

    }
    async componentDidMount(){
        const {id}= this.props.match.params;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
        const especieUrl= `https://pokeapi.co/api/v2/pokemon-species/${id}/`
        const res = await axios.get(url);
        
        const name = res.data.name;
        const imagen = res.data.sprites.front_default;
        this.setState({name})
        
        let {hp, attack, defense, speed, specialAttack, specialDefense}='';
        
        res.data.stats.map(stat=>{
            switch(stat.stat.name){
                case'hp':
                    hp=stat['base_stat'];
                    break;
                case'attack':
                    attack=stat['base_stat'];
                    break;
                case'defense':
                    defense=stat['base_stat'];
                    break;
                case'speed':
                    speed=stat['base_stat'];
                    break;
                case'special-attack':
                    specialAttack=stat['base_stat'];
                    break;
                case'special-defense':
                    specialDefense=stat['base_stat'];
                    break;
            }
        });
        
        const height = Math.round(res.data.height * 10); // cm
        const weight = Math.round(res.data.weight / 10 ) // kg
        
        const types= res.data.types.map(type => type.type.name);

        const abilities = res.data.abilities.map(ability =>{
            return ability.ability.name
        });
        await axios.get(especieUrl).then(res =>{
            let description ='';
            res.data.flavor_text_entries.some( flavor =>{
                if(flavor.language.name === 'es'){
                    description = flavor.flavor_text;
                    return; 
                }
            });
            this.setState({description});

        });

        this.setState({
            imagen, 
            id, 
            name, 
            types, 
            stats: {
                hp, 
                attack, 
                defense, 
                speed, 
                specialAttack,
                specialDefense
            },
            height,
            weight, 
            abilities, 
            
        })
    }
    render() {
        return (
            <div className = "col">
                <div className ="card">
                    <div className= "card-header">
                        <div className ="row">
                            <div className="col-5">
                                <h5>{this.state.name}</h5>
                            </div>
                            <div className="col-7">
                                <div className ="float-right">
                                    {this.state.types.map(type =>(
                                        <span key={type} className=" badge  badge-pill mr-1"  style={{ backgroundColor: `#${colores[type]}`}}>{type}</span>
                                    ))
                                }
                            </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className= "row align-items-center">
                                <div className= "col-md-3">
                                    <img src ={this.state.imagen} className="card-img-top mx-auto mt-2"/>
                                </div> 
                                <div className="col-md-9">
                                    <h4>Estadisticas</h4>
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-3">HP</div> 
                                        <div className="col-12 col-md-9">
                                                <div className="progress">
                                                    <div className="progress-bar" style={{width: `${this.state.stats.hp}%`} } aria-valuemax="100" areia-aria-valuemin="0">
                                                        <small>{this.state.stats.hp}</small>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-3">Ataque</div> 
                                        <div className="col-12 col-md-9">
                                                <div className="progress">
                                                    <div className="progress-bar" style={{width: `${this.state.stats.attack}%`} } aria-volumen="10" aria-valuemax="108" areia-aria-valuemin="9">
                                                        <small>{this.state.stats.attack}</small>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-3">Defensa</div> 
                                        <div className="col-12 col-md-9">
                                                <div className="progress">
                                                    <div className="progress-bar" style={{width: `${this.state.stats.defense}%`} } aria-volumen="10" aria-valuemax="108" areia-aria-valuemin="9">
                                                        <small>{this.state.stats.defense}</small>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-3">Ataque especial</div> 
                                        <div className="col-12 col-md-9">
                                                <div className="progress">
                                                    <div className="progress-bar" style={{width: `${this.state.stats.specialAttack}%`} } aria-volumen="10" aria-valuemax="108" areia-aria-valuemin="9">
                                                        <small>{this.state.stats.specialAttack}</small>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-3">Defensa especial</div> 
                                        <div className="col-12 col-md-9">
                                                <div className="progress">
                                                    <div className="progress-bar" style={{width: `${this.state.stats.specialDefense}%`} } aria-volumen="10" aria-valuemax="108" areia-aria-valuemin="9">
                                                        <small>{this.state.stats.specialDefense}</small>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>  
                                                               
                            </div>  
                            <div className="row">                                
                                <h5>Descripcion</h5> 
                            </div>
                            <div  className="col">
                                    <p className="p-1"> {this.state.description} </p>
                            </div>
                            <div className="row">
                                 <span> Peso:  {this.state.weight} Kg</span>
                            </div>
                            <div className="row">
                                 <span className="float-left"> 
                                     Altura:  {this.state.height} Cm </span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
