import './App.css';
import React from 'react';
import axios from "axios";
import CriarPlaylist from "./components/CriarPaylist";
import VerPlaylist from "./components/VerPlaylist";


class App extends React.Component {
  state = {
    CriarPaylist: true
  };

  trocaPagina = () => {
    this.setState({CriarPaylist: !this.state.CriarPaylist});
  };
  
  render () {
    const paginaAtual = this.state.CriarPaylist ? <CriarPlaylist/> : <VerPlaylist/>;

  return (
    <div className="App">
      {paginaAtual}
      <button onClick={this.trocaPagina}>Ver Playlists</button>
      {this.props.verPaginaPlayList}
    </div>
      
  );
}
} 

export default App;
