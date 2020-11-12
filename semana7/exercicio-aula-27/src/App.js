import './App.css';
import axios from 'axios';
import React from 'react';


class App extends React.Component {

  state = {
    activityType: ""
  }

  componentDidMount() {
    this.getActivityByType();
  };

  getActivityByType = async () => {
    const response = await axios.get("http://www.boredapi.com/api/activity?type=recreational");
    console.log(response)
    this.setState ({activityType: response.data})
  }

  render() {
    console.log("Tipo de atividade", this.setState.activityType);

  return (
    <div className="App">
      <button onClick={this.getActivityByType}>Clique para sorteio</button>
      {this.setState.activityType}
        <div>
          <p>Atividade de recreação sorteada: {this.state.activityType.activity}</p>
          <p>Número de participantes: {this.state.activityType.participants}</p>
          <p>Preço: {this.state.activityType.price}</p>
        </div>
      
    </div>
  
  );
}
}

export default App;
