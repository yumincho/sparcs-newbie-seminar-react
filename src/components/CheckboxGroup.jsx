import Checkbox from "./Checkbox";

const CheckboxGroup = ({high, medium, low, onChange}) => {
    const priority_list = ["High", "Medium", "Low"]

    const highOnChange = () => {
        onChange("high")
        console.log("high")
    }

    const mediumOnChange = () => {
        onChange("medium")
    }

    const lowOnChange = () => {
        onChange("low")
    }

    return <form className="checkboxContainer">
      <Checkbox onChange={highOnChange} optionName={priority_list[0]} defaultChecked={high}/>
      <Checkbox onChange={mediumOnChange} optionName={priority_list[1]} defaultChecked={medium}/>
      <Checkbox onChange={lowOnChange} optionName={priority_list[2]} defaultChecked={low}/>
    </form>
}

export default CheckboxGroup;