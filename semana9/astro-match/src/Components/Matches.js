import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';


const urlGetMatches = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lilian/matches"
const urlPutClear = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lilian/clear"

const DeletarMatches = styled.button`
    background-color: pink;
`

function Matches (props) {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get(urlGetMatches)
        .then ((response) => {
            setMatches(response.data.matches)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const putMatches = () => {
        axios.put(urlPutClear)
        .then (() => {
            alert("Matches excluídos")
        })
        .catch(() => {
            alert("Não conseguimos exluir os matches")
        })
    }

    const onClickRefreshMatchesPage = () => {
        putMatches()
    }

    const matchList = matches.map ((match) => {
        return(
            <div key={match.id}>
            <img src={match.photo}/>
            <h3>{match.name}</h3>
            </div>
        )
    })

    return (
        <div>
            Matches
            <div>
                <img/>
                <DeletarMatches  onClick={onClickRefreshMatchesPage}>Deletar matches</DeletarMatches>
                {matchList}
                <button onClick={props.onClickMatches}>Profiles</button>
            </div>

        </div>
            
    )
}

export default Matches