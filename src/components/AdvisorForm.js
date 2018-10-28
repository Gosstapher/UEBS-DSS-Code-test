import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCurrent, saveAdvisor} from '../reducers/advisor';

class AdvisorForm extends Component {

	handleInputChange = (evt) => {
   		const val = evt.target.value
   		this.props.updateCurrent(val)
   	}

   	handleSubmit = (evt) => {
   		evt.preventDefault()
   		this.props.saveAdvisor(this.props.currentAdvisor)
   	}

	render() {
		const {currentAdvisor} = this.props
	    return (
		    <form onSubmit={this.handleSubmit}>
		        <input type="text" 
		        onChange={this.handleInputChange}
		        value= {currentAdvisor}/>
		    </form> 
    	)
	}
}

export default connect(
	(state) => ({currentAdvisor: state.advisor.currentAdvisor}),
	{updateCurrent, saveAdvisor}
)(AdvisorForm)