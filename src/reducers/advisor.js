const initState ={
	advisors: []
}

export default (state = initState, action) => {
	switch (action.type){
		case 'ADVISOR_ADD':
			return {...state , advisors: state.advisors.concat(action.payload)}
		default:
			return state

	}
}