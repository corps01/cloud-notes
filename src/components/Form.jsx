import React, { useEffect } from 'react';
import firebase from '../util/firebase'
import ContentEditable from "react-contenteditable";
import { useParams } from 'react-router-dom'

const useRefCallback = ((value) => {
  const ref = React.useRef(value)
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  const result = React.useCallback((...args) => {
    ref.current?.(...args);
  }, [])
  return result;
})

export default function Form() {
  const [text, setText] = React.useState({title: "Title", html: "Edit <b>me</b> !"});
  const todoRef = firebase.database().ref("Todo")
  const {id} = useParams()
  
  //si se esta editando
  let new_id = 1;

    useEffect(() =>{  
    if(id !== '1'){
    const todoRef = firebase.database().ref('Todo').child(id)  
    todoRef.on('value', (snapshot) => {
      setText(snapshot.val())
          });
      }  
  },[id])

//componente
  const handleChange = useRefCallback((evt) => {
    setText({title: text.title, html: evt.target.value});
  }, []);


//cuadro de text
  const handleTitle = (title) => {
    setText({title: title.target.value, html: text.html});
  }

  const createTodo = () =>{
    if(id !== '1' || new_id !== '1'){
      if(new_id !== '1'){
       // id = new_id
      }
      //update
      const todoRef = firebase.database().ref('Todo').child(id)  
      todoRef.set(text);
      console.log('entre a editar')
    }else{
      //create new todo
       new_id = todoRef.push(text).key;
    }
  };


  return (
    <>
    <input type="text" onChange={handleTitle} value={text.title}/>
    <ContentEditable html={text.html}
    disabled={false}
    onChange={handleChange}
    className = "write-area"/>
     <button onClick = {createTodo}>ADD</button>
    </>
  );
}
