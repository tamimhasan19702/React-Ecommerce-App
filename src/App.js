import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(Props){
    super(Props)
    this.state = {
      showChild: true,
      text: ''
    }
  }

  // handleClick = () => {
  //   this.setState((prevState , prevProps) => {
     
  //     return {meaningOflLife: prevState.
  //       meaningOflLife + prevProps.increment}
    
  //   }, 
  //   () => console.log(this.state.meaningOflLife));

  // }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOflLife}
          </p>
          
          <button 
          onClick={() => 
            this.setState( state => ({
              showChild: !state.showChild
            }))
          }
            >
            Toggle LifeCycle
            </button>
            
          <button
          onClick={() => 
          this.setState( state => ({
            text: state.text + '_hello'
          }))
          }
          >update Text
          </button>


         {/* {this.state.showChild ? } */}

        </header>
      </div>
    );
  }
}

export default App;
