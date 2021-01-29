import React from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'
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
         <Route path="/write">
         <div className = "write-area-component">
         <Form></Form>
         </div>
         </Route>
         <Route path="/home">
         <TodoList></TodoList>
         </Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
