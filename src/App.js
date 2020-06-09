import React from 'react';
import './App.css';
import TaskList from './compoents/taskList/taskList';
import Form from './compoents/form/form'
function App() {
  return (
    <div className="App">
      <Form />
      <TaskList />
    </div>
  );
}

export default App;
