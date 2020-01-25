import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Contacts from "./containers/Contacts/Contacts";
import NewContact from "./containers/NewContact/NewContact";
import Menu from "./components/Menu/Menu";
import Edit from "./containers/Edit/Edit";

function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <Switch>
            <Route path='/' exact component={Contacts}/>
            <Route path='/newContact' exact component={NewContact}/>
            <Route path='/contact/:id/edit' exact component={Edit}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
