import React from 'react';

import './FormAdd.css';


class FormAdd extends React.Component{

  render(){
    return (
      <div className="addForm">
        <form>
          <div className="form-row">
          <div className="col-auto  ">
            <button type="button" className="btn btn-danger addBtn">
            Add User
            </button>
            </div>
            <div className="col">
              <label for="exampleInputEmail1" >First Name</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="col">
              <label for="exampleInputEmail2">Last Name</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail2"
              />
            </div>
            <div className="col">
              <label for="exampleInputEmail3">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail3"
              />
            </div>
          </div>
        </form>
        
      </div>
    );
  }
}

export default FormAdd;