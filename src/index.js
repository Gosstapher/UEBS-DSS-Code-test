import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import {bindActionCreators} from 'redux';
import {updateCurrent} from './reducers/advisor';


const actions = bindActionCreators({updateCurrent}, store.dispatch)

const render = () => {
	const state = store.getState()
	ReactDOM.render(<App advisors={state.advisors} 
		currentAdvisor={state.currentAdvisor}
		changeCurrent={actions.updateCurrent}
		/>, 
		document.getElementById('root'));
}

render()

store.subscribe(render)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();