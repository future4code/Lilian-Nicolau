import React from 'react';
import axios from 'axios';

class VerPlaylist extends React.Component{
    state = {
        playlistPage: [],
        playlistValue:""
    }

componentDidMount = () => {
    this.getAllPlaylists();
}

getAllPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
        headers: {
            Authorization: "lilian-nicolau-labenu"
        },
    })
    .then((resposta) => {
        this.setState({getAllPlaylists: resposta.data.result.list});
        
    })
    .catch((error) => {
        console.log(error.message)
    })

}




render () {
    const verPaginaPlayList = this.state.playlistPage.map((getAllPlaylists) => {
        return(
            <div>
            <p key={getAllPlaylists.id}>
                    {getAllPlaylists.name}
            </p>

            <button onClick={this.getAllPlaylists}>Ver playlist</button>
            </div>
        )
    })

        return <div>{verPaginaPlayList}</div>
 
    
}



}

export default VerPlaylist