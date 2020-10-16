import React from 'react';
import { connect } from 'react-redux';
import FormAdd from '../FormAdd/FormAdd';
import UserList from '../UsersList/UsersList';


class TablePage extends React.Component{
  maxId = 2;



  deletePerson = (id) => {
    this.setState(({dataUsers}) => {
      let idToDel = dataUsers.findIndex(elem => elem.id === id);

      let beforeDelItem = dataUsers.slice(0, idToDel);
      let afterDelItem = dataUsers.slice(idToDel + 1);

      let newData = [...beforeDelItem, ...afterDelItem];

      return {
        dataUsers: newData
      }
    }) 
  }

  

  addItem = (firstName, lastName, email) => {

    this.setState(({dataUsers}) => {
      let newArr = [
        ...dataUsers,
        {
          id: ++this.maxId, 
          firstName: firstName, 
          lastName: lastName, 
          email: email
        }
      ]
      return{
        dataUsers: newArr
      }
    })
  }


  render(){
    return(
      <div>
        <FormAdd addedNewItem={this.addItem}/>
        <UserList   />
        {/* onDelete={this.deletePerson} */}
      </div>
    )
  }
}



export default TablePage;
