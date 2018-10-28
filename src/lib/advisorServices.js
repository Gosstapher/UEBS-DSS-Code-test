export const getAdvisors = () => {
	return fetch('http://localhost:8080/advisors')
	.then(res => res.json())
}

export const createAdvisor = (name, research_area, max_pg, max_ug) => {
	return fetch('http://localhost:8080/advisors', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({name: name, research_area: research_area, max_pg: max_pg, max_ug: max_ug})
	})
	.then(res => res.json())
}

export const updateAdvisor = (advisor) => {
	return fetch(`http://localhost:8080/advisors/${advisor.id}`, {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(advisor)
	})
	.then(res => res.json())
}