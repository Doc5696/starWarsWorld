import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Footer} from './components/Footer'

const history = createBrowserHistory();

class App extends React.Component{
  render(){
    return(
      <Router history={history}>
        <Header />
        <Main />
        <Footer />
      </Router>
    )
  }
}

export default App;