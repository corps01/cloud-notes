import React from "react";
import firebase from '../util/firebase'
import ContentEditable from "react-contenteditable";


const useRefCallback = <T extends any[]>(
  value: ((...args: T) => void) | undefined,
  deps?: React.DependencyList
): ((...args: T) => void) => {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  }, deps ?? [value]);

  const result = React.useCallback((...args: T) => {
    ref.current?.(...args);
  }, []);

  return result;
};

export default function Form({todo}) {
  const [text, setText] = React.useState({title: "<b>Title</b>" html: "Edit <b>me</b> !"});

  if(todo){
   setText(todo) 
  }


  const handleChange = useRefCallback((evt) => {
    setText({title: text.title html: evt.target.value});
  }, []);

  const handleTitle = (title) => {
    setText({title: title.target.value html: text.html});
  }

  const handleBlur = useRefCallback(() => {
    console.log(text);
  }, [text]);


  const createTodo = () =>{
    const todoRef = firebase.database().ref("Todo")
    const todo = {
      title: this.state.title,
      html: this.state.html
    };

    todoRef.push(todo);

  };


  return (
    <>
    <input type="text" onChange={handleTitle}/>
    <ContentEditable html={text}
    disabled={false}
    onChange={handleChange}
    className = "write-area"/>
     <button onClick = {createTodo}>ADD</button>
    </>
  );
}
