import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAdvisors} from '../reducers/advisor';
const AdvisorItem = ({id, name}) => (
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
                {this.props.advisors.map(advisor => <AdvisorItem key={advisor.id} {...advisor} />)}
            </ul>
         </div>
        )
    }
}

export default connect(
    (state) => ({advisors: state.advisors}),
    {fetchAdvisors}
)(AdvisorList)