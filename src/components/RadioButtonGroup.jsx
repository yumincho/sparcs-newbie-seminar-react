import RadioButton from "./RadioButton";

const RadioButtonGroup = ({value, onChange}) => {
    const priority_list = ["High", "Medium", "Low"]

    const high_checked = (value === "High");
    const medium_checked = (value === "Medium");
    const low_checked = (value === "Low");

    return <form onClick={onChange} className="radioContainer">
      <RadioButton optionName={priority_list[0]} defaultChecked={high_checked}/>
      <RadioButton optionName={priority_list[1]} defaultChecked={medium_checked}/>
      <RadioButton optionName={priority_list[2]} defaultChecked={low_checked}/>
    </form>
}

export default RadioButtonGroup;