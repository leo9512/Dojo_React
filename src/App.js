import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resultado from './Resultado'
import database from './database'




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      resultados:[],
      encontrado:false,
      nombre:"",

    }
    this.buscarCodigo = this.buscarCodigo.bind(this);
  }


  buscarCodigo(codigo){
    this.setState({encontrado:false})
    for (let info in database){
      if( database[info].codigo == codigo.target.value){
        this.setState({nombre:database[info].nombre})
        this.setState({encontrado:true})
      }
    }
  }



  render() {
    let string=null;
    if(this.state.encontrado){
      string = `El codigo ingresado corresponde a ${this.state.nombre}`
    }
    else{
      string = 'El codigo ingresado no se ha encontrado.'
    }
    return (
      <div className="App">
            <input type="text" placeholder="Ingrese el código" onChange={this.buscarCodigo}/>
            <p>{string}</p>
      </div>
    );
  }
}

export default App;
