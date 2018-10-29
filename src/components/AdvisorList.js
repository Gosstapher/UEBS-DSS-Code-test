import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {connect} from 'react-redux';
import {fetchAdvisors, modifyAdvisor, deleteAdvisor} from '../reducers/advisor';

// const AdvisorItem = ({id, name, research_area, max_pg, max_ug, modifyAdvisor, deleteAdvisor}) => (
//         <li>
//             <span className='delete-item'>
//                 <button onClick={() => deleteAdvisor(id)}>X</button>
//              </span>
//             <p>{name} {research_area}</p>
//         </li>
//     )

const columns = [{
    Header: 'Advisor',
    accessor: 'name'
}, {
    Header: 'Research Area',
    accessor: 'research_area'
}, {
    Header: 'Maximum PG Students',
    accessor: 'max_pg'
}, {
    Header: 'Maximum UG Students',
    accessor: 'max_ug'
}, {
    Header: 'Delete Advisor',
    id: 'click-me-button',
    Cell: ({ row }) => (<button onClick={() => deleteAdvisor()}>X</button>)
}]
   
class AdvisorList extends Component {
    componentDidMount() {
        this.props.fetchAdvisors()
    }
    render() {
        return (
            <div>
                
                <div>
                    <ReactTable 
                        data={this.props.advisors}
                        columns={columns}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({advisors: state.advisor.advisors}),
    {fetchAdvisors, modifyAdvisor, deleteAdvisor}
)(AdvisorList)