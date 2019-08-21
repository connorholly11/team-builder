import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';
import Data from './data';
import Team from './team';




function App() {
  
  const [members, setMembers] = useState(Data);
  console.log(members);


  const addNewMember = props => {
    setMembers([...members, props])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Form addNewMember={addNewMember}/>
        <Team notes={members}/>
      </header>
    </div>
  );
}

export default App;
