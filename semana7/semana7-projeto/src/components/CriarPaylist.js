import React from 'react';
import axios from 'axios';

class CriarPlaylist extends React.Component{
    state = {
        nameValue:  "",
        artistValue: "",
        urlValue: ""
        
    };

    criarPlaylist = () => {
        const body = {
            name: this.state.nameValue,
            artist: this.state.artistValue,
            url: this.state.urlValue
        }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
        {
            headers: {
                Authorization: "lilian-nicolau-dumont"
            }
        }
    )
    .then((resposta) => {
        alert("Playlist criada com sucesso")
        this.setState({nameValue: "", artistValue:"", urlValue:""});
    })
    .catch((error) => {
        console.log(error.message);
    });

    };

    onChangeNameValue = (event) => {
        this.setState({nameValue: event.target.value});
    };

    onChangeArtistValue = (event) => {
        this.setState({artistValue: event.target.value});
    };

    onChangeUrlValue = (event) => {
        this.setState({urlValue: event.target.value});
    };


    render () {
        return (
            <div className="criandoPlaylists">
            <input type="text" placeholder="Nome da playlist" value={this.state.nameValue} 
                onChange={this.onChangeNameValue}></input>
            <input type="text" placeholder="Artista" value={this.state.artistValue} 
                onChange={this.onChangeArtistValue}></input>
            <input type="text" placeholder="Link para músicas" value={this.state.urlValue}
                onChange={this.onChangeUrlValue}></input>
            <button onClick={this.criarPlaylist}>CriarPlaylist</button>

            </div>
        )
    }

}

export default CriarPlaylist