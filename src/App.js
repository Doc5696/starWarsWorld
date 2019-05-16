import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './components/Header';
import {Films} from './components/Films';



class App extends React.Component{

  render(){
    return(
      <div>
        <Header />
        <Films />
      </div>
    )
  }
}

export default App;