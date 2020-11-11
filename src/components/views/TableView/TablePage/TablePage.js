import React from 'react';
import FormAdd from '../FormAdd/FormAdd';
import UserList from '../UsersList/UsersList';


class TablePage extends React.Component{ 

  state = {
    rgrView: false
  }
  
  toogleTables = () => {
    this.setState( state => ({
      rgrView: !state.rgrView
    }))
    console.log(this.state.rgrView)
  }


  render(){
    return(
      <div>
        <FormAdd />
        <button type="button" className="btn btn-warning" onClick={this.toogleTables}>Toogle</button>
        <UserList rgr={this.state.rgrView}/>
      </div>
    )
  }
}



export default TablePage;
