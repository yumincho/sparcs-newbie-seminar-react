const RadioButton = ({optionName, defaultChecked}) => {
    return <label>
        <input
            name="priority"
            type="radio"
            value={optionName}
            defaultChecked={defaultChecked}
        />
        {optionName}
    </label>
}

export default RadioButton;