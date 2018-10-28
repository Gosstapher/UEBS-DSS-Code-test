import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAdvisors, modifyAdvisor} from '../reducers/advisor';
const AdvisorItem = ({id, name, modifyAdvisor}) => (
         <li key={id}>
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
                    <AdvisorItem key={advisor.id} modifyAdvisor={this.props.modifyAdvisor} {...advisor} />)}
            </ul>
         </div>
        )
    }
}

export default connect(
    (state) => ({advisors: state.advisor.advisors}),
    {fetchAdvisors, modifyAdvisor}
)(AdvisorList)