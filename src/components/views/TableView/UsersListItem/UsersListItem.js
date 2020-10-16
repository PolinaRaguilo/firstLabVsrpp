import React from 'react';
import { connect } from 'react-redux';

import './UsersListItem.css';
class UsersListItem extends React.Component{
  

  render(){

    const {id, firstName, lastName, email, onDelete} = this.props;

    return(
      <tr>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td><button type="button" class="btn btn-danger" onClick={onDelete}>Delete</button></td>
      </tr>
    )
  }
}




export default UsersListItem;