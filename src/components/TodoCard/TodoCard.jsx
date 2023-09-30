import Tag from "./Tag"
import "./TodoCard.css"

const TodoCard = ({priority, task, memo, due}) => {
  return <div className='todo-card'>
    <div className='todo-card-top'>
      <Tag name={priority}/>
      <p>{due}</p>
    </div>
    
    <p className="task">task {task}</p>
    <p className="memo">memo {memo}</p>
    
  </div>;
};

export default TodoCard;
