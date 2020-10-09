import React from 'react';
import FormAdd from '../FormAdd/FormAdd';
import UserList from '../UsersList/UsersList';


class TablePage extends React.Component{
  maxId = 2;

  state = {
    dataUsers:[
      {id:1, firstName: 'Polina', lastName: 'Raguilo', email: 'polina2020@mail.ru'},
      {id:2, firstName: 'Ivan', lastName: 'Ivanov', email: 'Ivan2020@mail.ru'}
    ]
  }

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

  createItem(firstName, lastName, email){
    return {
      id: ++this.maxId, 
      firstName: firstName, 
      lastName: lastName, 
      email: email
    }
  }

  addItem = (firstName, lastName, email) => {
    const newItem = this.createItem(firstName,lastName,email);

    this.setState(({dataUsers}) => {
      let newArr = [
        ...dataUsers,
        newItem
      ]
      return{
        dataUsers: newArr
      }
    })
  }


  render(){
    const {dataUsers} = this.state;
    return(
      <div>
        <FormAdd addedNewItem={this.addItem}/>
        <UserList data={dataUsers} onDelete={this.deletePerson}/>
      </div>
    )
  }
}

export default TablePage;