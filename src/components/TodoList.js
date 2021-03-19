import React, { useState, useEffect } from 'react';
import firebase from '../util/firebase';
import Todo from './Todo';
import '../App.css';




export default function TodoList() {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref('Todo');
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);

  return (
    <div className = "todoList"> 
      {todoList
        ? todoList.map((todo, index) =>
        <Todo todo={todo} key={index} />
        )
        : ''}
    </div>
  );
}
