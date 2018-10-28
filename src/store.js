import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import advisorReducer from './reducers/advisor';
import messageReducer from './reducers/messages';


const reducer = combineReducers({
	advisor: advisorReducer,
	message: messageReducer
})


export default createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)