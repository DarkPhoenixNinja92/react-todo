'use client'

import { useState, useEffect } from 'react';
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

export default function Home() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    filterHandler();
  }, [todos, status]);

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 app">
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <ToDoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </main>
  )
}