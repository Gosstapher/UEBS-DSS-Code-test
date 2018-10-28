import React from 'react';
import {connect} from 'react-redux';
import {updateCurrent} from '../reducers/advisor';

const AdvisorForm = (props) => {
   const {currentAdvisor, updateCurrent} = props
   const handleInputChange =(evt) => {
   	const val = evt.target.value
   	updateCurrent(val)
   }
   return (
	    <form>
	        <input type="text" 
	        onChange={handleInputChange}
	        value= {currentAdvisor}/>
	    </form> 
    )	
}

export default connect(
	(state) => ({currentAdvisor: state.currentAdvisor}),
	{updateCurrent}
)(AdvisorForm)