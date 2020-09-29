import React from 'react';
import './App.css';
import TablePage from '../TablePage/TablePage';
import {
  Route,
  Switch
} from "react-router-dom"
import AutorizationForm from '../autorization/autorization';


class App extends React.Component{

  render(){

    return(
      <Switch>
          <Route exact path="/" component={AutorizationForm}/>
          <Route exact path="/users" component={TablePage}/>
      </Switch>
    )
  }
}

export default App;
