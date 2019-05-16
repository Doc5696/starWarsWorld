import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import {HomeItem} from '../HomeItem';

const callUrl = "../../../data.json";

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      homeItems: [],
    }
  }

  componentDidMount() {
    fetch(`./data.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
    .then(r => r.json())
    .then(homeItems => {this.setState({homeItems: homeItems.results})})
    .catch(err => {
      console.log("Error Reading data " + err);
    });
  }

  renderItem = () => {
    const { homeItems } = this.state;
    return (
      <div>
        {homeItems.map(homeItem => (
          <HomeItem key={homeItem.id} homeItem={homeItem} />
        ))}
      </div>      
    )
  }

  render() {
    return(
      <section>
        <Link to="/">
          {this.renderItem()}
        </Link>
      </section>
    )
  }
}

export {Home};

