import React from 'react';
import './index.css';

class InfoBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      descVisibility: false,
    }
  }

  onClickDescription = () => {
    this.setState(prevState => ({
      descVisibility: !prevState.descVisibility
    }))
  }

  render() {
    const {film} = this.props;
    let descVisibility = this.state.descVisibility;
    return (
      <div>
        {descVisibility ? (
          <p>
            {film.opening_crawl}
            <br />
            <button onClick={this.onClickDescription} >Hide decsription</button>
          </p>
        ) : (
        <p>
          <button onClick={this.onClickDescription}>Show decsription</button>
        </p>
        )}
      </div>
    )
  }
}

export {InfoBlock};