import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DeleteButton = styled.span`
    color: red;
    margin-left: 10px;
`
const p = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 50%;   
`

class Lista extends React.Component {
    state = {
        usuarios: [],
    };

    componentDidMount = () => {
        this.pegarUsuarios();
    };

    pegarUsuarios = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
            headers: {
                Authorization: "lilian-nicolau-dumont"
            }
        }
    )
        .then((resposta) => {
            this.setState({usuarios: resposta.data});
         })
        .catch((erro) => {
            alert("Desculpa, não foi possível exibir a lista de usuários no momento.")
        });
    };

        deletarUsuario = (userID) => {
            axios.delete(("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${`id`}"),
            {
                headers: {
                    Authorization: "lilian-nicolau-dumont",
                },
            }
                )
            .then((response) => {
                alert("Usuário deletado com sucesso");
                this.pegarUsuarios();
            })
            .catch((error) => {
                console.log(error.message);
            })
        }

        render() {
            const mostrarListaUsuario = this.state.usuarios.map((user) => {
                return(
                    <p key={user.id}>
                        {user.name}
                        <DeleteButton onClick={() => this.deletarUsuario(user.id)}>
                            X
                        </DeleteButton>
                    </p>
                );

            });

        return <div>{mostrarListaUsuario}</div>;
        }

}

    export default Lista;