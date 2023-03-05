import React from 'react'
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

export default function Customdatepicker(props) { 

    const {name, label} = props

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    return (
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
           <KeyboardDatePicker
                margin="normal"
                label={label}
                format="MM/dd/yyyy"
                name={name}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
           />
       </MuiPickersUtilsProvider>
    )
}
