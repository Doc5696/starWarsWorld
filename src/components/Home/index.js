import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import {HomeItem} from '../HomeItem';

const callUrl = "./data.json";

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      homeItems: [],
    }
  }

  componentDidMount() {
    fetch(callUrl, {
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

  render() {
    const { homeItems } = this.state;
    return(
      <section>
        <div>
          {homeItems.map(homeItem => (
            <Link to={homeItem.link}>
              <HomeItem key={homeItem.id} homeItem={homeItem} />
            </Link>
          ))}
        </div>
      </section>
    )
  }
}

export {Home};

