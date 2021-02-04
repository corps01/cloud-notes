import React from 'react'
import firebase from '../util/firebase'
import ContentEditable from 'react-contenteditable'

class Form extends React.Component {
  constructor() {
    super();
    this.state = { title: "<b>Title</b>", html: "Edit <b>me</b> !" };
  }

  handleChange = evt => {
    this.setState({ title: this.state.title, html: evt.target.value });
  };

  handleTitle = title => {
    this.setState({  title: title.target.value, html: this.state.html });
  };


  createTodo = () =>{
    const todoRef = firebase.database().ref("Todo")
    const todo = {
      title: this.state.title,
      html: this.state.html
    };

    todoRef.push(todo);

  };

render = () => {
  return (
    <>
    <input type="text" onChange={this.handleTitle}/>
    <ContentEditable
      className = "write-area"
      html={this.state.html} // innerHTML of the editable div
      disabled={false} // use true to disable edition
      onChange={this.handleChange} // handle innerHTML change
    />
    <button onClick = {this.createTodo}>ADD</button>
</>
  );
};
}

export default Form;
