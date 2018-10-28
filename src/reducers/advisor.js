import {getAdvisors, createAdvisor} from '../lib/advisorServices';
import {showMessage} from './messages';

const initState ={
	advisors:  [],
    currentAdvisor: ''
}

const ADVISOR_ADD = 'ADVISOR_ADD'
const ADVISORS_LOAD = 'ADVISORS_LOAD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

export const updateCurrent = (val) => ({type: CURRENT_UPDATE , payload: val})
export const loadAdvisors = (advisors) => ({type: ADVISORS_LOAD, payload: advisors})
export const addAdvisor = (advisor) => ({type: ADVISOR_ADD, payload: advisor})
export const fetchAdvisors = () => {
	return (dispatch) => {
		getAdvisors()
			.then(advisors => dispatch(loadAdvisors(advisors)))
	}
}

export const saveAdvisor = (name, research_area = "Marketing", max_pg = 1, max_ug = 1) => {
	return (dispatch) => {
		createAdvisor(name, research_area, max_pg, max_ug)
		.then(res => dispatch(addAdvisor(res)))
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
		default:
			return state

	}
}