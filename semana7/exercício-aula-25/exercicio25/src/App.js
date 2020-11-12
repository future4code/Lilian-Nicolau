import './App.css';
import axios from "axios";
import React from "react";
import Lista from "./components/Lista";
import Cadastro from "./components/Cadastro";
import style from "styled-components";


class App extends React.Component {
  state = {
    paginaCadastro: true
  };

  mudaPagina = () => {
    this.setState({ paginaCadastro: !this.state.paginaCadastro});
  };

  render() {
    const paginaAtual = this.state.paginaCadastro ? <Cadastro/> : <Lista/>;

  return (
    <div className="App">
      {paginaAtual}
     
      <button onClick={this.mudaPagina}>Mudar de página</button>
      </div>
      
    
  );
}
}
export default App;
