import './App.css';
import React, {useEffect, useState} from 'react';
import Matches from './Components/Matches';
import Profiles from './Components/Profiles';
import axios from 'axios';


function App () {

  const [changePage, setChangePage] = useState(true)

  const onClickChangeState = () => {
    setChangePage(!changePage)
  }

  const switchComponent = () =>{
    if (changePage) {
      return<Profiles onClickProfiles = {onClickChangeState}/>
    } else {
      return<Matches onClickMatches={onClickChangeState}/>
    }
  }

  return (
    <div className="App">
      {switchComponent()}
     
     
    </div>
  );
}

export default App;
