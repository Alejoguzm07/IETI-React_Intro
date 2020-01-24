import React from 'react';
import './App.css';
import {TodoList} from './TodoList'

function App() {
  const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
      {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
      {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }];


return (

<TodoList todoList={todos}/>

)
}

export default App;
