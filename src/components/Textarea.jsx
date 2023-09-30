const Textarea = ({label, task}) => {
    return <div className='input-card'>
        <p className='input-label'>
            {label}
        </p>
        <textarea
        name="task"
        value={task}
        rows={3}
    />
    </div>
}

export default Textarea;