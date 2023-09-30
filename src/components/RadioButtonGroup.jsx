import RadioButton from "./RadioButton";

const RadioButtonGroup = ({label, handleChange}) => {
    const priority_list = ["High", "Medium", "Low"]

    return <div className='input-card'>
    <p className='input-label'>
      {label}
    </p>
    <form onClick={handleChange}>
      <RadioButton optionName={priority_list[0]} defaultChecked={false}/>
      <RadioButton optionName={priority_list[1]} defaultChecked={true}/>
      <RadioButton optionName={priority_list[2]} defaultChecked={false}/>
    </form>
    
  </div>
}

export default RadioButtonGroup;