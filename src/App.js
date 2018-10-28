import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdvisorForm from './components/AdvisorForm';
import AdvisorList from './components/AdvisorList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            UEBS DSS
          </p>
          <div  className="DSS-App">
             <AdvisorForm />
             <AdvisorList advisors={this.props.advisors} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;