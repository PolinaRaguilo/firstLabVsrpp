import React from 'react';

import './UsersListItem.css';

class UsersListItem extends React.Component{

  render(){

    const {id, firstName, lastName, email} = this.props;

    return(
      <tr>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>
      </tr>
    )
  }
}

export default UsersListItem;