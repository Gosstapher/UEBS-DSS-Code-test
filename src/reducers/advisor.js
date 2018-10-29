import {getAdvisors, createAdvisor, updateAdvisor, destroyAdvisor} from '../lib/advisorServices';
import {showMessage} from './messages';

const initState ={
	advisors:  [],
    currentAdvisorName:'',
    currentAdvisorRA: '',
    currentAdvisorMaxPG: 0,
    currentAdvisorMaxUG: 0
}

export const ADVISOR_ADD = 'ADVISOR_ADD'
export const ADVISORS_LOAD = 'ADVISORS_LOAD'
const CURRENT_NAME_UPDATE = 'CURRENT_NAME_UPDATE'
const CURRENT_RA_UPDATE = 'CURRENT_RA_UPDATE'
const CURRENT_MAXPG_UPDATE = 'CURRENT_MAXPG_UPDATE'
const CURRENT_MAXUG_UPDATE = 'CURRENT_MAXUG_UPDATE'
export const ADVISORS_REPLACE = 'ADVISORS_REPLACE'
export const ADVISOR_REMOVE = 'ADVISOR_REMOVE'

export const updateCurrentName = (val) => ({type: CURRENT_NAME_UPDATE , payload: val})
export const updateCurrentRA = (val) => ({type: CURRENT_RA_UPDATE , payload: val})
export const updateCurrentMaxPG = (val) => ({type: CURRENT_MAXPG_UPDATE , payload: val})
export const updateCurrentMaxUG = (val) => ({type: CURRENT_MAXUG_UPDATE , payload: val})
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

export const saveAdvisor = (name = "temp", research_area = "temp", max_pg = 0, max_ug = 0) => {
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
			return {...state, currentAdvisorName: '', currentAdvisorRA: '', currentAdvisorMaxPG: 0, currentAdvisorMaxUG: 0, advisors: state.advisors.concat(action.payload)}
		case ADVISORS_LOAD:
			return {...state, advisors: action.payload}
		case CURRENT_NAME_UPDATE:
			return {...state, currentAdvisorName: action.payload}
		case CURRENT_RA_UPDATE:
			return {...state, currentAdvisorRA: action.payload}
		case CURRENT_MAXUG_UPDATE:
			return {...state, currentAdvisorMaxUG: action.payload}
		case CURRENT_MAXPG_UPDATE:
			return {...state, currentAdvisorMaxPG: action.payload}
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