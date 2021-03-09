import './App.css';
import UserInput from './components/UserInput/UserInput'
import UserOutput from './components/UserOutput/UserOutput'
import AppBar from './components/AppBar/AppBar'
import React from 'react';

class App extends React.Component {
  
  state = {
    user: {
      username: 'Usuario'
    }
  }
    


  trocarNomeHandler = (event) => {
  this.setState({
      user: {
        username: event.target.value
      }
    })
  }

  render () {
    return (
      <div className="App">
        <AppBar />
        <div className="vertical-align-parent">
          <div className="vertical-align-child">
            <UserInput usernameAtual={this.state.user.username} changed={this.trocarNomeHandler}/>
            <UserOutput userName={this.state.user.username}/>
          </div>
          
        </div>
        
      </div>
    );
  }
  
}

export default App;
