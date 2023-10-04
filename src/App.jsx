import { useState } from 'react'
import './App.css'

import TodoCard from './components/TodoCard/TodoCard'
import TextInput from './components/TextInput'
import Textarea from './components/Textarea'
import MyDatePicker from './components/MyDatePicker'
import RadioButtonGroup from './components/RadioButtonGroup'
import CheckboxGroup from './components/CheckboxGroup'

function App() {

  const [priority, setPriority] = useState("Medium")
  const [task, setTask] = useState("")
  const [memo, setMemo] = useState("")
  const [due, setDue] = useState(new Date())
  const [key, setKey] = useState(0)

  const [todoList, setTodoList] = useState([])

  const [showHigh, setShowHigh] = useState(true)
  const [showMedium, setShowMedium] = useState(true)
  const [showLow, setShowLow] = useState(true)

  const priorityHandleChange = (e) => {
    setPriority(e.target.value);
  };

  const filterHandleChange = (filter) => {
    (filter === "high")
    ? setShowHigh(!showHigh)
    : (filter === "medium")
    ? setShowMedium(!showMedium)
    : setShowLow(!showLow)
    console.log(showHigh, showMedium, showLow);
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
    const newTodo = {
      "key": key,
      "priority": priority,
      "task": task,
      "memo": memo,
      "due": dateFormat(due),
      "done": false
    }
    setTodoList([newTodo, ...todoList])
    setKey(key+1)
    setMemo("")
    setTask("")
  }

  const onClickCheck = (id) => {
    setTodoList((todoList) => todoList.map((elem) => (elem.key === id ? {...elem, done:!elem.done} : elem)))
  }

  const dateFormat = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return [month, day, year].join('/');
}

  return (
    <div className='my-todo-list'>
      <h2>🍪 yumyum&apos;s To-Do List</h2>
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
      
      <div className='input'>
        <div className='input-container'>
          <p className='input-label'>{"Filter"}</p>
          <CheckboxGroup high={showHigh} medium={showMedium} low={showLow} onChange={filterHandleChange}/>
        </div>
      </div>
      

      <div className='cardListContainer'>
        <p><strong>To-Do</strong></p>
        <p><strong>Done</strong></p>
        <div className='cardList'>
          {
            todoList
            .filter((elem) =>
            ((showHigh && (elem.priority == "High"))
            || (showMedium && (elem.priority == "Medium"))
            || (showLow && (elem.priority == "Low")))
            ? elem : "")
            .filter((elem) => (elem.done === false))
            .map((elem) =>
            <TodoCard key={elem.key} id={elem.key} priority={elem.priority} task={elem.task} memo={elem.memo} due={elem.due} done={false} onClickCheck={onClickCheck}/>
          )}
        </div>
        <div className='cardList'>
          {
            todoList
            .filter((elem) =>
            ((showHigh && (elem.priority == "High"))
            || (showMedium && (elem.priority == "Medium"))
            || (showLow && (elem.priority == "Low")))
            ? elem : "")
            .filter((elem) => (elem.done === true))
            .map((elem) =>
            <TodoCard key={elem.key} id={elem.key} priority={elem.priority} task={elem.task} memo={elem.memo} due={elem.due} done={elem.done} onClickCheck={onClickCheck}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
