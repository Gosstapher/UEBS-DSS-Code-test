import reducer from './advisor'

describe('Advisor Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, {type:'ANYTHING'})
    expect(result).toBeDefined()
  })

  test('adds an advisor', () => {
    const startState = {
      advisors:  [
        {id: 1, name: "Advisor 1", research_area: "Accounting and Finance", max_pg: 5, max_ug: 3},
        {id: 2, name: "Advisor 2", research_area: "Entrepreneurship and Innovation", max_pg: 2, max_ug: 7},
        {id: 3, name: "Advisor 3", research_area: "Marketing", max_pg: 3, max_ug: 4},
        {id: 4, name: "Advisor 4", research_area: "Organisation Studies", max_pg: 2, max_ug: 1}
    ]
    }
    const expectedState = {
      advisors:  [
        {id: 1, name: "Advisor 1", research_area: "Accounting and Finance", max_pg: 5, max_ug: 3},
        {id: 2, name: "Advisor 2", research_area: "Entrepreneurship and Innovation", max_pg: 2, max_ug: 7},
        {id: 3, name: "Advisor 3", research_area: "Marketing", max_pg: 3, max_ug: 4},
        {id: 4, name: "Advisor 4", research_area: "Organisation Studies", max_pg: 2, max_ug: 1},
        {id: 5, name: "Advisor 5", research_area: "Management Science and Business Economics", max_pg: 2, max_ug: 3}
    ]
    }
    const action = {type:'ADVISOR_ADD', payload: {id: 5, name: "Advisor 5", research_area: "Management Science and Business Economics", max_pg: 2, max_ug: 3}}
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })
})