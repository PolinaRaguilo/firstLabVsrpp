import React from 'react';

import './UsersList.css';
import UsersListItem from '../UsersListItem/UsersListItem';

const UserList = ({data}) =>{

  let elements = data.map((item) => {
    const {id, firstName, lastName, email} = item;

    return (
      <UsersListItem key={id} id={id} firstName={firstName} 
                    lastName = {lastName} email={email}/>
    )
  })

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
          <th scope="col">Action</th>
        </tr>
      </thead>
        <tbody>
          {elements}
        </tbody>
        </table>
      </div>
    )
}

export default UserList;