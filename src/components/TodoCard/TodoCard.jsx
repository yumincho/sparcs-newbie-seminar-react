import Tag from "./Tag"
import "./TodoCard.css"

const TodoCard = ({id, priority, task, memo, due, done, onClickCheck}) => {
  const onClick = () => {
    onClickCheck(id);
  }

  return <div className='todo-card'>
    <div className='todo-card-top'>
      <Tag name={priority}/>
      <p>{due}</p>
    </div>
    <div className='taskWithCheck'>
      <input onClick={onClick} type='checkbox' defaultChecked={done} className={'myCheckbox'}/>
      <p className="task">{task}</p>
    </div>
    
    <p className="memo">{memo}</p>
    
  </div>;
};

export default TodoCard;
