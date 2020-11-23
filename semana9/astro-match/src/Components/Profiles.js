import React, {useEffect, useState} from 'react';
import axios from 'axios';
import heartIcon from './images/heartIcon.png';
import xIcon from './images/xIcon.png';
import starIcon from './images/starIcon.png';
import styled from 'styled-components';

const urlGet = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lilian/person'
const urlPost = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lilian/choose-person'

const ButtonsLikeDislike = styled.div`
    display:flex;    
    flex-direction: row;    
    justify-content: space-around;
    align-items: center;
    align-content: center;
    padding: 17px;
            
`
const ButtonDislike = styled.img`
    width: 4vw;
    height: 8vh;
    
` 
const ButtonLike = styled.img`
    width: 4vw;
    height: 8vh;
    
` 
const MatchesList = styled.img`
    width: 4vw;
    height: 8vh;
`

const ProfileContainer = styled.div`
    display:flex;
    flex-direction:column; 
    justify-content: center;  
    align-content: center;
    justify-content:center;

`
const ProfileContent = styled.div`
    margin-left:35vw;
    width:25vw;  
    text-shadow: 0 0 10px black;
    margin-top:1vh;    
    color:black;
`
const ProfilePicture = styled.img`
    width:25vw;
    height:55vh;
    border:1px solid black;
    border-radius:10px;      
    margin:10px auto;   
    position:relative;
    
`


function Profiles (props) {

    const [profiles, setProfiles] = useState({})
    const [chooseProfile, setChooseProfile] = useState(false)
    const [component, setComponent] = useState(false)

    const getProfileToChoose = () => {
        axios.get(urlGet)
        .then((response) =>{
            setProfiles(response.data.profile)
        })
        .catch((error) => {
            alert(`Erro ${error}`)
        })
    }

    const postChoosePerson = () => {
        const body = {
            id: profiles.id,
            choice: chooseProfile
        }

        axios.post(urlPost, body)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            alert('Erro: ', error.message)
        })
    }

    const onClickLike = () => {
        setChooseProfile(true)
        setComponent(!component)
        postChoosePerson()
    }

    const onClickDislike = () => {
        setChooseProfile(false)
        setComponent(!component)
        postChoosePerson()
    }

   
    useEffect(() => {
        getProfileToChoose()
    }, [component])

    console.log(chooseProfile)

if (profiles) {
    return (
        <ProfileContainer>
                      
            <ProfileContent>
            <div>
                <ProfilePicture src={profiles.photo} alt='Profile pictures'/>
            </div>
            <div>
                <p>Nome: {profiles.name}</p>
                <p>Idade: {profiles.age}</p>
                <p>{profiles.bio}</p>
            </div>

            </ProfileContent>

            <ButtonsLikeDislike>
                <div> 
                    <ButtonDislike src={xIcon} onClick={onClickDislike}/>
                </div>

                <div>
                    <ButtonLike src={heartIcon} onClick={onClickLike}/>
                </div>
               
                <div> 
                    <MatchesList src={starIcon} onClick={props.onClickProfiles}/>
                </div>

            </ButtonsLikeDislike>

        </ProfileContainer>

   )
    } else {
        return(
         <h1>Perfis esgotados!</h1>
        )
    }
}
export default Profiles