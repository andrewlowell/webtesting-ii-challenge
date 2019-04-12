import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    lastAtBat: ''
  }
  render() {
    return (
      <div className="App">
        <Dashboard atBat={this.atBat} />
        <Display balls={this.state.balls} strikes={this.state.strikes} />
      </div>
    );
  }

  atBat = type => {
    this.setState({ lastAtBat: type });
    switch(type) {
      case 'ball':
        this.setState({ balls: this.state.balls + 1 }, () => {
          if (this.state.balls === 4) {
            this.resetGame();
          }
        });
        break;
      case 'strike':
      this.setState({ lastAtBat: type });
        this.setState({ strikes: this.state.strikes + 1 }, () => {
          if (this.state.strikes === 3) {
            this.resetGame();
          }
        });
        break;
      case 'foul':
        if (this.state.strikes === 2) {
          this.setState({ lastAtBat: type });
        }
        else {
          this.setState({ strikes: this.state.strikes + 1 });
        }
        break;
      case 'hit':
        this.resetGame();
        break;
    }
  }

  resetGame = () => {
    this.setState({
      balls: 0,
      strikes: 0,
      lastAtBat: ''
    });
  }
}

export default App;
