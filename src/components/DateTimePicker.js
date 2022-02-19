import React from 'react';
import { useState } from 'react';
import TimePicker from './TimePicker'
import DatePicker from './DatePicker'
import '../css/DateTimePicker.css';





function DateTimePicker() {

    const [showDate, setShowDate] = useState(false)
    const [showTime, setShowTime] = useState(false)
    const valueCurrentTime = new Date();
    const [getDayValueDate, setgetDayValueDate] = useState(valueCurrentTime.getDate())
    const [getMinuteValueTime, setgetMinuteValueTime] = useState(valueCurrentTime.getMinutes())
    const [getMonthValueDate, setGetMonthValueDate] = useState(valueCurrentTime.getMonth() + 1)
    const [getYearValueDate, setGetYearValueDate] = useState(valueCurrentTime.getFullYear())
    const [getHourValueTime, setGetHourValueTime] = useState(valueCurrentTime.getHours())
   

    const handleClickDatePicker = () => {
        setShowDate(!showDate)
    }

    const handleClickTimePicker = () => {
        setShowTime(!showTime)
    }

    const handleChangeValueDay = (a) => {
        setgetDayValueDate(a)
    }

    const handleChangeValueMinute = (a) => {
        setgetMinuteValueTime(a)
    }

    const handleChangeValueYear = (a) => {
        setGetYearValueDate(a)
    }
    const handleChangeValueMonth = (a) => {
        setGetMonthValueDate(a)
    }

    const handleChangeValueHour = (a) => {
        setGetHourValueTime(a)
    }

    const valuetime =
    getHourValueTime.toString().padStart(2, "0")
        + ':'
        + getMinuteValueTime.toString().padStart(2, "0")

    const valueDay =
    getDayValueDate.toString().padStart(2, "0")
        + '/'
        + getMonthValueDate.toString().padStart(2, "0")
        + '/'
        + getYearValueDate.toString().padStart(2, "0")

    const handleChangeTimePicker = (a) => {
        setShowTime(a)
    }

    const handleChangeDatePicker = () => {
        setShowDate(false)
    }


    const handleCloseBackgroundDateTime = (e) => {
        if (e.target.className == 'date-picker') {
            setShowDate(false)
        }
    }

    const handleCloseBackgroundTime = (e) => {
        if (e.target.className == 'time-picker') {
            setShowTime(!showTime)
        }
    }

    return (
        <div>
            <div>
                <form >
                    <label className='label-date'>
                        Date
                        <input
                            className='input-date-picker'
                            value={valueDay}
                            type="text"
                            onClick={handleClickDatePicker}
                        />
                    </label>

                    <label className='label-time'>
                        Time
                        <input
                            className='input-time-picker'
                            value={valuetime}
                            type="text"
                            onClick={handleClickTimePicker}
                        />
                    </label>
                </form>
            </div>
            {showDate &&
                <div className='date-picker' onClick={handleCloseBackgroundDateTime}>
                    <DatePicker
                        onChangeDatePicker={handleChangeDatePicker}
                        onChangeValueYear={handleChangeValueYear}
                        onChangeValueMonth={handleChangeValueMonth}
                        onChangeValueDay={handleChangeValueDay}
                        getValueMonth={getMonthValueDate}
                        getValueYear={getYearValueDate}
                        getValueDay={getDayValueDate}
                        valueTimeCurrent={valueCurrentTime}
                    />
                </div>
            }
            {showTime &&
                <div className='time-picker' onClick={handleCloseBackgroundTime}>
                    <TimePicker
                        onChangeTimePicker={handleChangeTimePicker}
                        onChangeValueMinute={handleChangeValueMinute}
                        onChangeValueHour={handleChangeValueHour}
                        valueTimeCurrent={valueCurrentTime}
                        getValueHour={getHourValueTime}
                        getValueMinute={getMinuteValueTime}
                    />
                </div>
            }
        </div>
    );
}

export default DateTimePicker;
