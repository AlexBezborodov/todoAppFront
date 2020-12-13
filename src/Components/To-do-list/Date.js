import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
const DatePick = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <label className='m-2 text-light'>Deadline date </label>
      <DatePicker className='align-self-center my-2 w-50 ' selected={startDate} onChange={date => setStartDate(date)} />
    </div>
  );
};
export default DatePick;
