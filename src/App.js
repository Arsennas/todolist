import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Input from './components/input';
import Output from './components/output';
import TodoList from './components/todoList';
import { ToastContainer, toast } from 'react-toastify';
import DoneNot from './components/done-not';

const App = () => {
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  useEffect(() => {
    filterTodos()
  }, [])

  function filterTodos() {
    const activeTodo = todo.filter(elem => elem.status === false);
    const comletedTodo = todo.filter(elem => elem.status === true);
    setTodo([...activeTodo, ...comletedTodo])
  }

  const addTodo = (value) => {
    const newItem = {
      id: Date.now().toString(),
      title: value,
      status: false
    }
    const newArr = [...todo, newItem];
    setTodo(newArr)
    toast('успешно')
  }
  const delateTodo = (id) => {
    const newTodo = todo.filter(elem => elem.id !== id)
    setTodo(newTodo)
    toast.warning('удалено')
  }
  const statusTodo = (id) => {
    const newArr = todo.map(elem => elem.id === id ? { ...elem, status: !elem.status } : elem)
    setTodo(newArr)
  }

  return (
    <div className="App">
      <Header />
      <Output
        todo={todo} />
        <DoneNot
        todo={todo}
        />
      <Input
        addTodo={addTodo}
      />
      <TodoList
        todo={todo}
        delateTodo={delateTodo}
        statusTodo={statusTodo}
      />
      <ToastContainer
        position='bottom-center' />
    </div>
  );
}

export default App;
