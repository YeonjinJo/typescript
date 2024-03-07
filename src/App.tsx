import React from 'react';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';


function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
