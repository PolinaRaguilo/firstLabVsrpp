import React from 'react';
import './autorization.css';
import {Redirect} from 'react-router-dom'

class AutorizationForm extends React.Component{
  state = {
    login: '',
    password: '',
    logged: false
  }

  onInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  onAuthSubmit = (e) => {
    const {login, password} = this.state;
    if (login === "polina" && password === "polina2020"){
      this.setState({
        logged: true
      })
    } else {
      alert ("Введите правильные данные")
    }
  }

  render(){
    if (this.state.logged){
      return <Redirect to="/users"/>
    }
    return(
     <div className="container">
      <div className="row">
        <form className="form-horizontal" onSubmit={this.onAuthSubmit}>
          <span className="heading">Авторизация</span>
          <div className="form-group">
          <input type="text" className="form-control" id="inputLogin" placeholder="Login" name="login" onChange={this.onInputChange}/>
          <i className="fa fa-user"></i>
          </div>
          <div className="form-group help">
          <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" onChange={this.onInputChange}/>
          <i className="fa fa-lock"></i>
          </div>
          <button type="submit" className="btn btn-default">Вход</button>
        </form>
      </div>
      </div>
    )
  }
}

export default AutorizationForm;