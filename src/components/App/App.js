import React from 'react';
import './App.css';
import TablePage from '../views/TableView/TablePage/TablePage';
import {
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom"

import AutorizationForm from '../views/Authorization/autorization/autorization';
import ModalWindow from '../views/TableView/Modal/Modal';


class App extends React.Component{

  render(){ 

    return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={AutorizationForm}/>
            <Route path="/users" component={TablePage}/>
            <Route render={() => <h2>Page not found 404</h2>}/>
        </Switch>
        <ModalWindow />
        </BrowserRouter>
      
    )
  }
}

export default App;
