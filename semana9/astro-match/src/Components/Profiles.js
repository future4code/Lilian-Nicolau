import React, {useEffect, useState} from 'react';
import axios from 'axios';
import heartIcon from './images/heartIcon.png';
import xIcon from './images/xIcon.png';

const urlGet = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lilian/person'
const urlPost = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lilian/choose-person'



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

    return (
        <div>
            Profiles
           
            <div>
                <img src={profiles.photo} alt='Profile pictures'></img>
            </div>
            <div>
                <p>Nome: {profiles.name}</p>
                <p>Idade: {profiles.age}</p>
                <p>{profiles.bio}</p>
            </div>

            <div>
                <div> 
                    <img src={xIcon} onClick={onClickDislike}/>
                </div>

                <div>
                    <img src={heartIcon} onClick={onClickLike}/>
                </div>
               
                <button onClick={props.onClickProfiles}>Lista de matches</button>
            </div>

        </div>

   )
}

export default Profiles