import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
      meaningOflLife : 47
    }
  }

  handleClick = () => {
    this.setState({meaningOflLife: this.state.meaningOflLife + 1});
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOflLife}
          </p>
          <button onClick={this.handleClick}>Update State</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
