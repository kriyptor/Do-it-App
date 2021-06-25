import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Particle from './components/Particle';

function App() {
  return (
    <div className="todo-app">
      <Particle/>
      <TodoList/>
    </div>
  );
}

export default App;
