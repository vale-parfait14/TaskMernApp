// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TodoList from './components/TodoList';
import WelcomeMessage from './components/WelcomeMessage';
import "./App.css";

const App = () => {
  return (
    <Router>
      <WelcomeMessage />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<TodoList />} />
      </Routes>
    </Router>
  );
};

export default App;
