import React, { Component } from 'react';


class Resultado extends Component {
  resultado={};
  constructor(props){
    super(props);
    this.resultado = props.resultado;
  }

  render(){
    return (
    <div className="Item">
      <table width="100%" border="1">
        <tr>
          <td width="150">
            <div className="Imagen" align="center"><img src={this.resultado.thumbnail}/></div>
          </td>
          <div className="Titulo">  {this.resultado.title}</div>
          <div className="Precio">  {this.resultado.price}</div>
          <div className="Link">{this.resultado.permalink}</div>
        </tr>
      </table>
    </div>);
  }

}
export default Resultado;
