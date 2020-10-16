import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'


class App extends React.Component {
    state = {
      posts: [
        {
        nomeUsuario: "Chico Bento",
        fotoUsuario: "https://vignette.wikia.nocookie.net/monica/images/6/6f/Chico_bento.png/revision/latest?cb=20140930163812&path-prefix=pt-br",
        fotoPost: "https://picsum.photos/200/150"
      },
        {
        nomeUsuario: "Mônica",
        fotoUsuario: "https://i0.wp.com/cdnb.c3dt.com/icon/553831-br.com.zeroum.turmadamonica.png",
        fotoPost: "https://picsum.photos/200/151"

      },
      {
        nomeUsuario: "Cebolinha",
        fotoUsuario: "https://cdn141.picsart.com/305520346131211.png?type=webp&to=min&r=640",
        fotoPost: "https://picsum.photos/200/152"
      }

     ],
        valorInputNomeUsuario: "",
        valorInputFotoUsuario: "",
        valorInputFotoPost: ""

    };

    adicionaPost = () => {
      const novoPost = {
        nomeUsuario: this.state.valorInputNomeUsuario,
        fotoUsuario: this.state.valorInputFotoUsuario,
        fotoPost: this.state.valorInputFotoPost
      };
      const novosPosts = [...this.state.posts, novoPost];
      this.setState({posts: novosPosts}); 
    };

    onChangeInputUsuario = (event) => {
      this.setState({valorInputNomeUsuario: event.target.value})
    }

    onChangeInputFotoUsuario = (event) => {
      this.setState({valorInputFotoUsuario: event.target.value})
    }

    onChangeInputFotoPost = (event) => {
      this.setState({valorInputFotoPost: event.target.value})
    }

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario= {post.nomeUsuario} 
          fotoUsuario = {post.fotoUsuario} 
          fotoPost = {post.fotoPost}
        />
    )
      })
      return (
        <input
          value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"Seu nome"}
        />

        <button onClick={this.adicionaPost}>Adicionar post</button>

        <div className="Postagens">
          {listaDePosts}
        </div>
        

      );
      }
  }


export default App;
