import React from 'react';

export default (props) => {
   const {currentAdvisor, changeCurrent} = props
   const handleInputChange =(evt) => {
   	const val = evt.target.value
   	changeCurrent(val)
   }
   return (
	    <form>
	        <input type="text" 
	        onChange={handleInputChange}
	        value= {currentAdvisor}/>
	    </form> 
    )	
}