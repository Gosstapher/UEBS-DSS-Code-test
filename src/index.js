import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

const render = () => {
	const state = store.getState()
	ReactDOM.render(<App {...state} />, document.getElementById('root'));
}

render()

store.subscribe(render)

setTimeout(() => {
	store.dispatch({type: 'ADVISOR_ADD', payload: {id: 6, name: "Advisor 6", research_area: "Marketing", max_pg: 3, max_ug: 4},})
}, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();