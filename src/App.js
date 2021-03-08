import './App.css';
import UserInput from './components/UserInput/UserInput'
import UserOutput from './components/UserOutput/UserOutput'
import AppBar from './components/AppBar/AppBar'

function App() {
  return (
    <div className="App">
      <AppBar />
      <UserInput />
      <UserOutput />
    </div>
  );
}

export default App;
