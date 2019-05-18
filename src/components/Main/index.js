import React from 'react';
import {Route} from 'react-router-dom';
import {Films} from '../Films'
import {Home} from '../Home'
import './index.scss';

class Main extends React.Component {
  render() {
    return(
      <main>
        <h2>Main Block</h2>
        <Route exact path='/' component={Home} />
        <Route path='/films' component={Films} />
      </main>
    )
  }
}

export {Main};