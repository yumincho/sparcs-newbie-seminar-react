const TextInput = ({label, task}) => {
    return <div className='input-card'>
        <p className='input-label'>
            {label}
        </p>
        <input
            name="task"
            value={task}
        />
  </div>
}

export default TextInput;