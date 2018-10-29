import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCurrentName, updateCurrentRA, updateCurrentMaxPG, updateCurrentMaxUG, saveAdvisor} from '../reducers/advisor';

class AdvisorForm extends Component {

	handleInputNameChange = (evt) => {
   		const val = evt.target.value
   		this.props.updateCurrentName(val)
   	}

   	handleInputRAChange = (evt) => {
   		const val = evt.target.value
   		this.props.updateCurrentRA(val)
   	}

   	handleInputMaxPGChange = (evt) => {
   		const val = evt.target.value
   		this.props.updateCurrentMaxPG(val)
   	}

   	handleInputMaxUGChange = (evt) => {
   		const val = evt.target.value
   		this.props.updateCurrentMaxUG(val)
   	}

   	handleSubmit = (evt) => {
   		evt.preventDefault()
   		console.log(this.props)
   		this.props.saveAdvisor(this.props.currentAdvisorName, 
   				this.props.currentAdvisorRA,
   				this.props.currentAdvisorMaxPG,
   				this.props.currentAdvisorMaxUG
   			)
   	}

	render() {
		const {currentAdvisorName, currentAdvisorRA, currentAdvisorMaxPG, currentAdvisorMaxUG} = this.props
	    return (
		    <form onSubmit={this.handleSubmit}>
		        <input type="text"
			        name="Name" 
			        onChange={this.handleInputNameChange}
			        value= {currentAdvisorName} required/>
		        <select type="text"
			        name="Research Area" 
			        onChange={this.handleInputRAChange}
			        value= {currentAdvisorRA}>
			        <option value="Accounting and Finance">Accounting and Finance</option>
			        <option value="Entrepreneurship and Innovation">Entrepreneurship and Innovation</option>
			        <option value="Management Science and Business Economics">Management Science and Business Economics</option>
			        <option value="Marketing">Marketing</option>
			        <option value="Organisation Studies">Organisation Studies</option>
			        <option value="Strategy">Strategy</option>
			    </select>
		        <input type="number" min="0"
			        name="Max PG" 
			        onChange={this.handleInputMaxPGChange}
			        value= {currentAdvisorMaxPG}/>
		        <input type="number" min="0"
			        name="Max UG" 
			        onChange={this.handleInputMaxUGChange}
			        value= {currentAdvisorMaxUG}/>
			    <input type="submit" value="Submit"/>
		    </form> 
    	)
	}
}

export default connect(
	(state) => ({currentAdvisorName: state.advisor.currentAdvisorName,
	 currentAdvisorRA: state.advisor.currentAdvisorRA,
	 currentAdvisorMaxPG: state.advisor.currentAdvisorMaxPG,
	 currentAdvisorMaxUG: state.advisor.currentAdvisorMaxUG 
	}),
	{updateCurrentName, updateCurrentRA, updateCurrentMaxPG, updateCurrentMaxUG, saveAdvisor}
)(AdvisorForm)