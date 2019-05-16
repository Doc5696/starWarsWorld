import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ReactDOM from 'react-dom';
import {Header} from './components/Header';
import {Films} from './components/Films';
import {Home} from './components/Home';

const history = createBrowserHistory();



class App extends React.Component{

  render(){
    return(
      <Router history={history}>
        <Header />
        <Route path='/films' component={Films} />
        <Route path='/' component={Home} />
      </Router>
    )
  }
}

export default App;