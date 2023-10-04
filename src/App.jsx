import { useState } from 'react'
import './App.css'

import TodoCard from './components/TodoCard/TodoCard'
import TextInput from './components/TextInput'
import Textarea from './components/Textarea'
import MyDatePicker from './components/MyDatePicker'
import RadioButtonGroup from './components/RadioButtonGroup'

function App() {

  const [priority, setPriority] = useState("Medium")
  const [task, setTask] = useState("")
  const [memo, setMemo] = useState("")
  const [due, setDue] = useState(new Date())
  const [key, setKey] = useState(0)

  const [todoList, setTodoList] = useState([])

  const priorityHandleChange = (e) => {
    setPriority(e.target.value);
  };

  const dueOnChange = (date) => {
    setDue(date);
  }

  const taskOnChange = (e) => {
    setTask(e.target.value)
  }

  const memoOnChange = (e) => {
    setMemo(e.target.value)
  }

  const buttonOnClick = () => {
    if (task===""){
      alert("You can not blank the task :(")
      return;
    }
    const newTodo = <TodoCard key={key} priority={priority} task={task} memo={memo} due={dateFormat(due)}/>
    setTodoList([newTodo, ...todoList])
    setKey(key+1)
    setMemo("")
    setTask("")
    setPriority("Medium")
  }

  const dateFormat = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return [month, day, year].join('/');
}

  return (
    <div className='my-todo-list'>
      <h2>🍪 yumyum's To-Do List</h2>
      <div className='input'>
        <div className='input-container'>
          <p className='input-label'>{"Priority"}</p>
          <RadioButtonGroup value={priority} onChange={priorityHandleChange}/>
          <p className='input-label'>{"Task"}</p>
          <TextInput value={task} onChange={taskOnChange}/>
          <p className='input-label'>{"Memo"}</p>
          <Textarea value={memo} onChange={memoOnChange}/>
          <p className='input-label'>{"Due"}</p>
          <MyDatePicker value={due} onChange={dueOnChange}/>
        </div>
        <button className='input-button' onClick={buttonOnClick}>Add</button>
      </div>
      
      <h4>To-Do</h4>
      <div className='todo-card-list'>
        {todoList.map((card) => (card))}
      </div>

      <h4>Done</h4>
    </div>
  )
}

export default App
