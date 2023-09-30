import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = ({label, due, onChange}) => {
    
    
    return <div className='input-card'>
        <p className='input-label'>
            {label}
        </p>
        <DatePicker selected={due} onChange={onChange}/>
    </div>
}

export default MyDatePicker;