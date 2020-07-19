import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from "./Todo";
import { Button, FormControl, InputLabel, Input, Container  } from '@material-ui/core';
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] =  useState("");

  useEffect(() => {
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot=> {
      setTodos(snapshot.docs.map(doc=> 
        ({id: doc.id, todo: doc.data().todo})
      ))
    })
  }, [])

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
    setTodos([
        ...todos,
        input
    ])
    setInput("");
  }
  return (
    
    <div className="App">
      <Container maxWidth="lg">
      <h1>Todo Tracker</h1>
      <form>
        <FormControl>
            <InputLabel>Write a Todo</InputLabel>
            <Input  value={input} onChange={ e => setInput(e.target.value)}/>
            <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
          </FormControl>
      </form>
      <ul>
        {todos.map(todo => {
          return (
          <Todo todo={todo}/>
          )
        })}
      </ul>
      </Container>
    </div>
 
  );
}

export default App;
