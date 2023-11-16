'use client'

import { useState } from 'react';
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 app">
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <ToDoList setTodos={setTodos} todos={todos} />
    </main>
  )
}