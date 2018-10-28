import {ADVISOR_ADD, ADVISORS_LOAD, ADVISORS_REPLACE, ADVISOR_REMOVE} from './advisor';

const MESSAGE_SHOW = 'MESSAGE_SHOW'

export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg})

export default function (state='', action) {
	switch(action.type) {
		case MESSAGE_SHOW:
			return action.payload
		case ADVISOR_ADD:
		case ADVISORS_LOAD:
		case ADVISORS_REPLACE:
		case ADVISOR_REMOVE:
			return ''
		default:
			return state
	}
}