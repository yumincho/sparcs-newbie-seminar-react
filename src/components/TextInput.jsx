import "./Text.css"

const TextInput = ({value, onChange}) => {
    return <input
            className="text"
            name="task"
            value={value}
            placeholder="Add task"
            onChange={onChange}
        />
}

export default TextInput;