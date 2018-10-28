import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import AdvisorForm from './components/AdvisorForm';
import AdvisorList from './components/AdvisorList';
import {bindActionCreators} from 'redux';
import {updateCurrent} from './reducers/advisor';

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
             <AdvisorForm 
             currentAdvisor={this.props.currentAdvisor}
             changeCurrent={this.props.updateCurrent}
             />
             <AdvisorList advisors={this.props.advisors} />
          </div>
        </header>
      </div>
    );
  }
}
 
const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators({updateCurrent}, dispatch)
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp