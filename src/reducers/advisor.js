const initState ={
	advisors:  [
        {id: 1, name: "Advisor 1", research_area: "Accounting and Finance", max_pg: 5, max_ug: 3},
        {id: 2, name: "Advisor 2", research_area: "Entrepreneurship and Innovation", max_pg: 2, max_ug: 7},
        {id: 3, name: "Advisor 3", research_area: "Marketing", max_pg: 3, max_ug: 4},
        {id: 4, name: "Advisor 4", research_area: "Organisation Studies", max_pg: 2, max_ug: 1},
        {id: 5, name: "Advisor 5", research_area: "Management Science and Business Economics", max_pg: 2, max_ug: 3}
    ],
    currentAdvisor: ''
}

const ADVISOR_ADD = 'ADVISOR_ADD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

export const updateCurrent = (val) => ({type: CURRENT_UPDATE , payload: val})

export default (state = initState, action) => {
	switch (action.type){
		case ADVISOR_ADD:
			return {...state , advisors: state.advisors.concat(action.payload)}
		case CURRENT_UPDATE:
			return {...state, currentAdvisor: action.payload}
		default:
			return state

	}
}