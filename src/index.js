import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const state = {
    advisors: [
        {id: 1, name: "Advisor 1", research_area: "Accounting and Finance", max_pg: 5, max_ug: 3},
        {id: 2, name: "Advisor 2", research_area: "Entrepreneurship and Innovation", max_pg: 2, max_ug: 7},
        {id: 3, name: "Advisor 3", research_area: "Marketing", max_pg: 3, max_ug: 4},
        {id: 4, name: "Advisor 4", research_area: "Organisation Studies", max_pg: 2, max_ug: 1},
        {id: 5, name: "Advisor 5", research_area: "Management Science and Business Economics", max_pg: 2, max_ug: 3}
    ]
}

ReactDOM.render(<App advisors={state.advisors} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();