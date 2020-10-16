import React from 'react';
import './App.css';
import Post from './components/Post/Post';


class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Chico Bento'}
          fotoUsuario={'https://vignette.wikia.nocookie.net/monica/images/6/6f/Chico_bento.png/revision/latest?cb=20140930163812&path-prefix=pt-br'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Mônica'}
          fotoUsuario={'https://i0.wp.com/cdnb.c3dt.com/icon/553831-br.com.zeroum.turmadamonica.png'}
          fotoPost={'https://picsum.photos/200/151'}
        />

        <Post
          nomeUsuario={'Cebolinha'}
          fotoUsuario={'https://cdn141.picsart.com/305520346131211.png?type=webp&to=min&r=640'}
          fotoPost={'https://picsum.photos/200/152'}
        />

      </div>
    );
  }
}

export default App;
