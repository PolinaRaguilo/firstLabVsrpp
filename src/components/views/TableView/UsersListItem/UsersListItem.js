import React from 'react';
import ModalWindow from '../Modal/Modal';


import './UsersListItem.css';
class UsersListItem extends React.Component{
  

  render(){

    const {id, firstName, lastName, email,editing, onDelete, onEdit} = this.props;


    return(
      <tr>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>
            <button type="button" className="btn btn-danger" onClick={onDelete}>Delete</button>
        </td>
        <td>
            <button type="button" className="btn btn-danger" onClick={onEdit}>Edit</button>
            
        </td>
      </tr>
    )
  }
}




export default UsersListItem;