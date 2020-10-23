import React from 'react';
import FormAdd from '../FormAdd/FormAdd';
import UserList from '../UsersList/UsersList';


class TablePage extends React.Component{  

  render(){
    return(
      <div>
        <FormAdd />
        <UserList/>
      </div>
    )
  }
}



export default TablePage;
