import {getAdvisors, createAdvisor, updateAdvisor, destroyAdvisor} from '../lib/advisorServices';
import {showMessage} from './messages';

const initState ={
	advisors:  [],
    currentAdvisor: ''
}

export const ADVISOR_ADD = 'ADVISOR_ADD'
export const ADVISORS_LOAD = 'ADVISORS_LOAD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const ADVISORS_REPLACE = 'ADVISORS_REPLACE'
export const ADVISOR_REMOVE = 'ADVISOR_REMOVE'

export const updateCurrent = (val) => ({type: CURRENT_UPDATE , payload: val})
export const loadAdvisors = (advisors) => ({type: ADVISORS_LOAD, payload: advisors})
export const addAdvisor = (advisor) => ({type: ADVISOR_ADD, payload: advisor})
export const replaceAdvisor = (advisor) => ({type: ADVISORS_REPLACE, payload: advisor})
export const removeAdvisor = (id) => ({type: ADVISOR_REMOVE, payload: id})
export const fetchAdvisors = () => {
	return (dispatch) => {
		dispatch(showMessage('Loading Advisors'))
		getAdvisors()
			.then(advisors => dispatch(loadAdvisors(advisors)))
	}
}

export const saveAdvisor = (name, research_area = "Marketing", max_pg = 1, max_ug = 1) => {
	return (dispatch) => {
		dispatch(showMessage('Saving Advisor'))
		createAdvisor(name, research_area, max_pg, max_ug)
		.then(res => dispatch(addAdvisor(res)))
	}
}

export const modifyAdvisor = (id) => {
	return (dispatch, getState) => {
		dispatch(showMessage('Advisor Updated'))
		const {advisors} = getState().advisor
		const advisor = advisors.find(a => a.id === id)
		const tempUpdate = {...advisor, max_ug: 10}
		updateAdvisor(tempUpdate)
			.then(res => dispatch(replaceAdvisor(res)))
	}
}

export const deleteAdvisor = (id) => {
	return (dispatch) => {
		dispatch(showMessage('Removing Advisor'))
		destroyAdvisor(id)
			.then(() => dispatch(removeAdvisor(id)))
	}
}

export default (state = initState, action) => {
	switch (action.type){
		case ADVISOR_ADD:
			return {...state, currentAdvisor: '', advisors: state.advisors.concat(action.payload)}
		case ADVISORS_LOAD:
			return {...state, advisors: action.payload}
		case CURRENT_UPDATE:
			return {...state, currentAdvisor: action.payload}
		case ADVISORS_REPLACE:
			return {...state,
			 advisors: state.advisors
			 	.map(a => a.id === action.payload.id ? action.payload : a)}
		case ADVISOR_REMOVE:
			return {...state,
			 advisors: state.advisors.filter(a => a.id !== action.payload)}
		default:
			return state

	}
}