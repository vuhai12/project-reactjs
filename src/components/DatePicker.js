import React from 'react';
import { useState } from 'react';
import '../css/DatePicker.css';
import Left from '../image/left.png'
import Right from '../image/right.png'
import Down from '../image/down.png'
import Up from '../image/up.png'



const DatePicker = (
    {
        valueTimeCurrent,
        getValueDay,
        getValueYear,
        getValueMonth,
        onChangeDatePicker,
        onChangeValueYear,
        onChangeValueDay,
        onChangeValueMonth

    }) => {

    const arrayYear = [];
    for (let i = 2000; i <= 2051; i++) {
        arrayYear.push(i);
    }
    const [iconArrowChooseYear, setIconArrowChooseYear] = useState(true)
    const [valueCurrenTime, setValueCurrentTime] = useState(valueTimeCurrent)
    const [activeIndex, setActiveIndex] = useState()
    const [valueDayDate, setValueDayDate] = useState(getValueDay)
    const [valueYearDateTime, setValueYearDateTime] = useState(getValueYear)
    const day = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    const monthArray = ['January', 'February',
        'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December']
    const messageMonth = monthArray[valueCurrenTime.getMonth()]
    const [getvalueYearDateTime, setgetvalueYear] = useState(valueYearDateTime)
    const [getactive, setgetactive] = useState(1)
    const [valueNumberMonth, setvalueNumberMonth] = useState(getValueMonth - 1)
    const [getMonthDateTime, setMonthDateTime] = useState(valueNumberMonth)

    let resultCalendar = [];
    for (let i = 0; i < 42; i++) {
        resultCalendar.push(0);
    }

    const handlePrevMonth = () => {

        setvalueNumberMonth(valueNumberMonth - 1)
        if (valueNumberMonth < 1) {
            setvalueNumberMonth(11)
        }
        setValueCurrentTime(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1));
       
        if (valueNumberMonth === 0) {
            setValueYearDateTime(valueYearDateTime - 1)
        }
    }

    const handleNextMonth = () => {

        setvalueNumberMonth(valueNumberMonth + 1)
        setValueCurrentTime(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1));
       
        if (valueNumberMonth === 11) {
            setValueYearDateTime(valueYearDateTime + 1)
        }
        if (valueNumberMonth > 10) {
            setvalueNumberMonth(0)
        }
    }

    const getDay = (day, month, year) => {
        if (month == 1) {
            month = 13;
            year--;
        }
        if (month == 2) {
            month = 14;
            year--;
        }
        let q = day;
        let m = month;
        let k = year % 100;
        let j = parseInt(year / 100, 10);
        let h = q + parseInt(13 * (m + 1) / 5, 10) + k + parseInt(k / 4, 10) + parseInt(j / 4, 10) + 5 * j;
        h = h % 7;
        return h
    }


    const daysIn = (year, month) => {
        return new Date(year, month, 0).getDate();
    }

 
    const calendar = (month, year) => {

        let startIndex = getDay(1, month, year);
        let endIndex = daysIn(year, month);

        for (let i = startIndex; i <= endIndex + startIndex - 1; i++) {
            startIndex == 0 ? resultCalendar[i + 6] = i + 1 : startIndex == 1 ? resultCalendar[i - 1] = i : startIndex > 1 ? resultCalendar[i - 1] = (i - startIndex) + 1 : null
        }
        return resultCalendar;
    }

    const arrayDayOfMonth = calendar(valueNumberMonth + 1, valueYearDateTime)

    const handleYear = () => {
        setIconArrowChooseYear(!iconArrowChooseYear)
    }
    const handleCancelDatePicker = () => {
        onChangeDatePicker()
    }

    const handleOkDatePicker = () => {
        onChangeValueYear(getvalueYearDateTime)
        onChangeValueDay(valueDayDate)
        onChangeDatePicker()
    }

    const handleDayNumber = (item, index) => {

        const handleNumberDay = () => {
            setValueDayDate(item)
            setActiveIndex(index)
            setgetvalueYear(valueYearDateTime)
            setgetactive(2)
            setMonthDateTime(valueNumberMonth)
            setgetvalueYear(valueYearDateTime)
            onChangeValueMonth(valueNumberMonth + 1)
        }

        if (item == 0) {
            return (
                <>
                    <a
                        key={index}
                        className='numberDaywithzero'
                    >{item}
                    </a>
                </>
            )
        } else {
            return (
                <>
                    <a
                        className={
                            activeIndex === index
                                && getactive === 2 && valueNumberMonth === getMonthDateTime
                                && getvalueYearDateTime === valueYearDateTime
                                ? 'active' : item === getValueDay
                                    && valueNumberMonth + 1 === getValueMonth
                                    && getvalueYearDateTime === valueYearDateTime
                                    && getactive === 1 ? 'active' : 'numberDay'
                        }
                        onClick={handleNumberDay}
                        key={index}>{item}
                    </a>
                </>
            )
        }
    }



    return (
        <>
            <div className='wrapper-date-picker'>
                <div className='wrapper-header'>
                    <div className='wrapper-month-year' onClick={handleYear}>
                        <span className='monthstyle'>{monthArray[valueNumberMonth]}</span>
                        <span className='yearstyle'>{valueYearDateTime}</span>
                        <span>{iconArrowChooseYear ? <img src={Down} /> : <img src={Up} />}</span>
                    </div>
                    <div className='wrapper-next-prev'>
                        <span onClick={handlePrevMonth}><img src={Left} /></span>
                        <span className='button-after' onClick={handleNextMonth}>
                            <img src={Right} />
                        </span>
                    </div>
                </div>

                {!iconArrowChooseYear &&
                    <div className='style-wrapper-year'>{arrayYear.map((item, index) =>
                        <a onClick={() => setValueYearDateTime(item)} key={index} className='number-year'>{item}</a>)
                    }
                    </div>
                }
                <div
                    className='week-header'
                >
                    {day.map((item, index) =>
                        <a className='week-number' key={index}>{item}</a>)}
                </div>
                <div className='wrapper-numberday'>{arrayDayOfMonth.map(handleDayNumber)}</div>
                <div className='wrapper-button'>
                    <button className='buttonCancelDatePicker' onClick={handleCancelDatePicker}>CANCEL</button>
                    <button className='buttonOkDatePicker' onClick={handleOkDatePicker}>OK</button>
                </div>
            </div>
        </>
    )
}

export default DatePicker