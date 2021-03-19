import React from 'react';
import './App.css';
import Form from './components/Form.jsx'
import TodoList from './components/TodoList'
import addIcon from './images/add.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
  <Router>
    <div className="App">
       <h1> CLOUD NOTES </h1>
       <Switch>
         <Route path="/write/:id">
         <div className = "write-area-component">
         <Form></Form>
         </div>
         </Route>
         <Route path="/home">
         <TodoList></TodoList>
         <div className = 'buttonAdd'>
            <Link to = "/write/1"> <img src = {addIcon} className = "icon" alt = "note"></img></Link>
        </div>
         </Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
