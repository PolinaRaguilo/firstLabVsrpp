import React from 'react';

import MaterialTable from 'material-table';

import './UsersList.css';
import UsersListItem from '../UsersListItem/UsersListItem';
import { connect } from 'react-redux';
import { deletePerson, editPersonTrue } from '../../../../redux/actions';



class UserList extends React.Component{

  state = {
    users: [
      {id:1, firstName: 'Polina', lastName: 'Raguilo', email: 'polina2020@mail.ru', birthCity:222},
      {id:2, firstName: 'Julia', lastName: 'Ivanova', email: 'Julia2020@mail.ru', birthCity:111},
      {id:3, firstName: 'Ivan', lastName: 'Ivanov', email: 'ivan2020@mail.ru', birthCity:111}
    ]
  }


  

  render(){
    const {data,rgr, onDelete, onOpenModal} = this.props;

    let elements = data.map((item) => {
      const {id, firstName, lastName, email} = item;
  
      return (
        <UsersListItem key={id} id={id} firstName={firstName} 
                      lastName = {lastName} email={email}
                      onDelete={() => onDelete(id)}
                      onEdit={()=> onOpenModal()}
                      />
      )
    })

    if(rgr === false) {
      return(
        <div>
        <h2>Users</h2>
        <table className="table">
        <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th colSpan="2" scope="col" className="th_action">Action</th>
        </tr>
      </thead>
        <tbody>
          {elements}
        </tbody>
        </table>
      </div>
      )
    }
    return(
      
      <MaterialTable
      title="Users"
      columns={[
        { title: 'Id', field: 'id' , type: 'numeric'},
        { title: 'Name', field: 'firstName' },
        { title: 'Surname', field: 'lastName' },
        { title: 'Email', field: 'email' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup:  {111: 'Minsk',  222:'Polotsk',333: 'Vitebsk' },
        },
      ]}
      data={this.state.users}        
      options={{
        filtering: true
      }}
    />

     

    )
}
}
const mapStateToProps = (state) => {
  return {
    data: state.tableReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(deletePerson(id)),
    onOpenModal: () => dispatch(editPersonTrue())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);