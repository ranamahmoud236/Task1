import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet1 from './components/Greet1';
import Greet from './components/Greet';



function App() {
  return (
    <div className="App">
      <h1>Welcom to my first app in React</h1>
      <Greet1 name = "Rana" message ="Hope you like my app" /> 
      <Greet name = "Ahmad" message = "Hope you have a nice time in my app!"/>

   

    </div>
  );
}

export default App;
