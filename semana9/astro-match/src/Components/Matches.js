import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import trashIcon from './images/trashIcon.png';


const urlGetMatches = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lilian/matches"
const urlPutClear = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lilian/clear"

const ButtonTrash = styled.img`
    width: 4vw;
    height: 8vh;
`
const ButtonBack = styled.button`
    width: 8vw;
    height: 6vh;
    margin-left: 50px;
`
const IconesPaginaMatches = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const MatchContainer = styled.div`
    display:flex;  
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;  
`
const MatchPhotos = styled.div`
    display:flex;    
    border-radius:5px;
    padding:1vw;    
    margin:0.4vw;
    color:black;
    text-shadow: 0 0 1vw black;    
    cursor:default;
    h3{
        padding-left:1vw;
    }
`
const ImgMatches = styled.img`
    width:5vw;
    height:9vh;
    display: flex;
    justify-content: space-around;
    align-items: stretch;

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
            <MatchPhotos key={match.id}>
            <ImgMatches src={match.photo}/>
            <h3>{match.name}</h3>
            </MatchPhotos>
        )
    })

    return (
        
            
            <MatchContainer>

                <div>
                    {matchList}
                </div>

                <IconesPaginaMatches>
               <ButtonTrash  src={trashIcon} onClick={onClickRefreshMatchesPage}/> 
                                
                <ButtonBack onClick={props.onClickMatches}>Continuar a ver perfis</ButtonBack>

                </IconesPaginaMatches>
          
            </MatchContainer>
            
    )

}
export default Matches