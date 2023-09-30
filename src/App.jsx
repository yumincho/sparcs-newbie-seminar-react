import { useState } from 'react'
import './App.css'
import dayjs from 'dayjs'

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

  const [todoList, setTodoList] = useState([])

  const priorityHandleChange = (e) => {
    setPriority(e.target.value);
  };

  const dueOnChange = (date) => {
    setDue(date);
  }

  const buttonOnClick = () => {
    const newTodo = <TodoCard priority={priority} title={task} memo={memo} due={dateFormat(due)}/>
    setTodoList([newTodo, ...todoList])
  }

  const dateFormat = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return [month, day, year].join('/');
}

  return (
    <div>
      <div className='input'>
        <div>
          <RadioButtonGroup label="Priority" handleChange={priorityHandleChange}/>
          <TextInput label="Task"/>
          <Textarea label="Memo"/>
          <MyDatePicker label="Due" due={due} onChange={dueOnChange}/>
        </div>
        <button className='input-button' onClick={buttonOnClick}>Add</button>
      </div>
      
      <div className='todo-card-list'>
        {todoList.map((card) => (card))}
      </div>
    </div>
  )
}

export default App
