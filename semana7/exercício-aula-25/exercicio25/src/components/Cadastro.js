import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const ContainerUsuarios = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class Cadastro extends React.Component {
    state = {
        nameValue: "",
        emailValue: ""
    };

    fazerCadastro = () => {
        const body = {
            name:this.state.nameValue,
            email: this.state.emailValue
        };
    
    
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
        {
            headers: {
                Authorization: "lilian-nicolau-dumont",
            }
        }
        
    )
        .then((resposta) => {
            alert("Usuário criado com sucesso")
        this.setState({nameValue:"", emailValue:""})
        
    })
        .catch((erro) => {
        alert("Desculpa, não foi possível completar o seu cadastro.")
    });
    
    };
    
      onChangeNameValue = (event) => {
        this.setState({nameValue: event.target.value});
      };

      onChangeEmailValue = (event) => {
        this.setState({emailValue: event.target.value});
      };
    
      render () {
          return (
              <div className="containerUsuarios">
              <p>
              <label>Nome</label> <br/>
              <input type="text" value={this.state.nameValue} onChange={this.onChangeNameValue}/> <br/>
              <label>E-mail</label> <br/>
              <input type="text" value={this.state.emailValue} onChange={this.onChangeEmailValue}/> <br/>
              <button onClick={this.fazerCadastro}>Criar Usuário</button>

              </p>
              </div>
          );
      };
    };
    
export default Cadastro