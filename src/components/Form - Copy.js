import React, { useState } from 'react';
import firebase from '../util/firebase';
import noteIcon from '../images/addIcon.png'

export default function Form() {
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title,
      complete: false,
    };

    todoRef.push(todo);
  };
  return (
    <div>
      <img src = {noteIcon} alt = "note"></img>
      <input type="text" onChange={handleOnChange} value={title} />
      <button onClick={createTodo}>Add Todo</button>
    </div>
  );
}
