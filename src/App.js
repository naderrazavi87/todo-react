import React, {useState, useRef, useEffect} from 'react';

import TodoList from './TodoList.js';

import { v4 as uuidv4 } from 'uuid';


const LOCAL_STORAGE_KEY = 'todoApp.todos' 

function App() {
  const [todos, setTodos]=useState([ ])
  const todoNameRef=useRef()


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])





function handleAddTodo(e){
  const name= todoNameRef.current.value
  if (name === '') return 
    setTodos(prevTodos=>{
      return [...prevTodos,{id:uuidv4(), name:name, complete:true}]
})

  todoNameRef.current.value=null
}

  return (
    <>
   <TodoList todos={todos}/>
   <input ref={todoNameRef} type="text"/>
   <button onClick={handleAddTodo}>Add to do</button>
   <button>Clear Completed to do</button>
   <div>O left to do</div>
    </>
  );
}

export default App;
