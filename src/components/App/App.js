import React from 'react';
import './App.css';
import FormAdd from '../FormAdd/FormAdd';
import UserList from '../UsersList/UsersList';

class App extends React.Component{

  state = {
    dataUsers:[
      {id:1, firstName: 'Polina', lastName: 'Raguilo', email: 'polina2020@mail.ru'},
      {id:2, firstName: 'Ivan', lastName: 'Ivanov', email: 'Ivan2020@mail.ru'}
    ]
  }

  render(){
    const {dataUsers} = this.state;
    return(
      <div>
        <FormAdd/>
        <UserList data={dataUsers}/>
      </div>
    )
  }
}

export default App;
