import React from 'react';

import './FormAdd.css';


class FormAdd extends React.Component{

  state = {
    firstName: '',
    lastName: '',
    email:''
  }

  onInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })

    
  }

  onSubmit = (e) => {
    const {firstName, lastName, email} = this.state;
    e.preventDefault();
    this.props.addedNewItem(firstName, lastName, email);
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
                name="firstName"
                className="form-control"
                id="firstNameInput"
                onChange={this.onInputChange}
                required
              />
            </div>
            <div className="col">
              <label for="lastNameInput">Last Name</label>
              <input
              name="lastName"
                className="form-control"
                id="lastNameInput"
                onChange={this.onInputChange}
                required
              />
            </div>
            <div className="col">
              <label for="emailInput">Email</label>
              <input
                name = "email"
                type="email"
                className="form-control"
                id="emailInput"
                onChange={this.onInputChange}
                required
              />
            </div>
          </div>
        </form>
        
      </div>
    );
  }
}

export default FormAdd;