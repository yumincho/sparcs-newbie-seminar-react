import "./Text.css"

const Textarea = ({value, onChange}) => {
    return <textarea
            className="text"
            name="task"
            value={value}
            rows={4}
            placeholder="Add memo"
            onChange={onChange}
        />
}

export default Textarea;