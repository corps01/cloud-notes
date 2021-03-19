import React from 'react'
import firebase from '../util/firebase'
import '../App.css';
import noteIcon from '../images/note_120060.svg'
import {
  Link
} from "react-router-dom";


const Todo = ({todo}) => {

  const deleteTodo = () =>{
    const todoRef = firebase.database().ref('Todo').child(todo.id)
    todoRef.remove()
 }
 
  return (
  <div className = "todo-containers">
    <img src = {noteIcon} className = "icon" alt = "note"></img>
    <Link to = {`/write/${todo.id}`}>
    <p>{todo.title}</p>
    </Link>
    <button onClick = {deleteTodo}>Delete</button>
  </div>);
}
 
export default Todo;
