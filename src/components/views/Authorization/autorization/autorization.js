
import React from 'react';
import './autorization.css';
import {Redirect} from 'react-router-dom'
import { logIn } from '../../../../redux/actions';
import { connect } from 'react-redux';

class AutorizationForm extends React.Component{
  state = {
    login: '',
    password: '',
  }

  onInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  onAuthSubmit = (e) => {
    const {login, password} = this.state;
    if (login === "polina" && password === "polina2020"){
      e.preventDefault();
      this.props.login(true);
    } else {
      this.props.login(false);
      alert ("Введите правильные данные")
    }
  }

  render(){
    if (this.props.logInf){
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

const mapDispatchToProps = (dispatch) => {
  return{
    login: (log) => dispatch(logIn(log))
  }
}

const mapStateToProps = (state) => {
  return{
    logInf: state.authorizationReducer.logged
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AutorizationForm);