import React from 'react';

const AdvisorItem = ({id, name}) => (
         <li key={id}>
             {name}
         </li>
    )

export default (props) => (
         <div className="Advisor-List">
             <ul>
                {props.advisors.map(advisor => <AdvisorItem key={advisor.id} {...advisor} />)}
            </ul>
         </div>
    )