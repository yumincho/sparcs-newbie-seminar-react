import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = ({value, onChange}) => {
    return <DatePicker selected={value} onChange={onChange}/>
}

export default MyDatePicker;