import React from 'react';
import {Route} from 'react-router-dom';
import {List} from '../List'
import {Home} from '../Home'
import './index.scss';

const callApiUrl = "https://swapi.co/api/films/";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    fetch(callApiUrl)
    .then(r => r.json())
    .then(listData => {this.setState({items: listData.results})})
    .catch(err => {
      console.log("Error Reading data " + err);
    });;
  }

  render() {
    return(
      <main>
        <h2>Main Block</h2>
        <Route exact path='/' component={Home} />
        {/* <Route path='/films' component={Films} films={this.state.films} /> */}
        <List items={this.state} />
      </main>
    )
  }
}

export {Main};