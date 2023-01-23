import React, { useState } from 'react';
import './Todo.css'

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  }

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function handleDelete(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
