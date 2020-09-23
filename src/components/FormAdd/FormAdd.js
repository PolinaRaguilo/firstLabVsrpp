import React from 'react';

import './FormAdd.css';


class FormAdd extends React.Component{

  state = {
    name: '',
    lastName: '',
    email:''
  }

  onInputChange = (e) => {
   // const {name, lastName, email} = e.target.value;
    this.setState({
      name: document.getElementById('firstNameInput').value,
      lastName: document.getElementById('lastNameInput').value,
      email:  document.getElementById('emailInput').value
    })
    
  }

  onSubmit = (e) => {
    const {name, lastName, email} = this.state;
    e.preventDefault();
    this.props.addedNewItem(name, lastName, email);
  }

  render(){
    return (
      <div className="addForm">
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
          <div className="col-auto  ">
            <button type="submit" className="btn btn-danger addBtn">
            Add User
            </button>
            </div>
            <div className="col">
              <label for="firstNameInput" >First Name</label>
              <input
                className="form-control"
                id="firstNameInput"
                onChange={this.onInputChange}
              />
            </div>
            <div className="col">
              <label for="lastNameInput">Last Name</label>
              <input
                className="form-control"
                id="lastNameInput"
                onChange={this.onInputChange}
              />
            </div>
            <div className="col">
              <label for="emailInput">Email</label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                onChange={this.onInputChange}
              />
            </div>
          </div>
        </form>
        
      </div>
    );
  }
}

export default FormAdd;