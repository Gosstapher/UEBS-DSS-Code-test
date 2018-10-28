export const getAdvisors = () => {
	return fetch('http://localhost:8080/advisors')
	.then(res => res.json())
}