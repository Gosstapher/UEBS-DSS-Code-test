import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAdvisors, modifyAdvisor, deleteAdvisor} from '../reducers/advisor';
const AdvisorItem = ({id, name, modifyAdvisor, deleteAdvisor}) => (
        <li>
            <span className='delete-item'>
                <button onClick={() => deleteAdvisor(id)}>X</button>
             </span>
            {name}
        </li>
    )

class AdvisorList extends Component {
    componentDidMount() {
        this.props.fetchAdvisors()
    }

    render() {
        return (
         <div className="Advisor-List">
             <ul>
                {this.props.advisors.map(advisor => 
                    <AdvisorItem key={advisor.id}
                     modifyAdvisor={this.props.modifyAdvisor}
                     deleteAdvisor={this.props.deleteAdvisor}
                     {...advisor} />)}
            </ul>
         </div>
        )
    }
}

export default connect(
    (state) => ({advisors: state.advisor.advisors}),
    {fetchAdvisors, modifyAdvisor, deleteAdvisor}
)(AdvisorList)