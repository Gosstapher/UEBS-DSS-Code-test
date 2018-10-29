import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import logo from './logo_schoolbiz2.png';
import './App.css';
import AdvisorForm from './components/AdvisorForm';
import AdvisorList from './components/AdvisorList';
import Message from './components/Message';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            UEBS DSS Advisors
          </h3>
          <Router>
            <div className="DSS-App">
               <Message />
               <AdvisorForm />
               <AdvisorList />
               <Footer />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}
 

export default App