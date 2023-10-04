import Tag from "./Tag"
import "./TodoCard.css"

const TodoCard = ({id, priority, task, memo, due, done, onClickCheck, deleteBtnClickHandle}) => {
  const onClick = () => {
    onClickCheck(id);
  }

  const deleteBtnClick = () => {
    deleteBtnClickHandle(id);
  }

  return <div className='todo-card'>
    <div className='todo-card-top'>
      <Tag name={priority}/>
      <button className="deleteBtn" onClick={deleteBtnClick}>delete</button>
    </div>
    <div className='taskWithCheck'>
      <input onClick={onClick} type='checkbox' defaultChecked={done} className={'myCheckbox'}/>
      <p className="task">{task}</p>
    </div>

    <p>{due}</p>
    
    <p className="memo">{memo}</p>
    
  </div>;
};

export default TodoCard;
