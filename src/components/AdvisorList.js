import React from 'react';
import {connect} from 'react-redux';
const AdvisorItem = ({id, name}) => (
         <li key={id}>
             {name}
         </li>
    )

const AdvisorList = (props) => (
         <div className="Advisor-List">
             <ul>
                {props.advisors.map(advisor => <AdvisorItem key={advisor.id} {...advisor} />)}
            </ul>
         </div>
    )

export default connect(
    (state) => ({advisors: state.advisors})
)(AdvisorList)