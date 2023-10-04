const RadioButton = ({onChange, optionName, defaultChecked}) => {
    return <label>
        <input
            name="priority"
            type="checkbox"
            value={optionName}
            defaultChecked={defaultChecked}
            onChange={onChange}
        />
        {optionName}
    </label>
}

export default RadioButton;