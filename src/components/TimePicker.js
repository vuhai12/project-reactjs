import React from 'react';
import { useState } from 'react';
import TimeHourOut from './uicomponents/TimeHourOut';
import TimeHourIn from './uicomponents/TimeHourIn';
import TimeMinutePicker from './uicomponents/TimeMinutePicker';
import '../css/TimePicker.css';


const TimePicker = (
    {
        valueTimeCurrent,
        getValueMinute,
        getValueHour,
        onChangeValueHour,
        onChangeValueMinute,
        onChangeTimePicker
    }
) => {
    const timeHourIn = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0]
    const timeHourOut = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const timeMinutea = [];
    for (let i = 1; i < 60; i++) {
        timeMinutea.push(i);
    }
    const timeMinute = [...timeMinutea, 0]
    const [dataTimePicker, setdataTimePicker] = useState(valueTimeCurrent)
    const [isShowTimeMiinute, setisShowTimeMinute] = useState(true)
    const [isShowTimeHour, setisShowTimeHour] = useState(false)
    const [valueMinuteTime, setValueMinuteTime] = useState(getValueMinute)
    const [getValueTimeHour, setgetValueTimeHour] = useState(getValueHour)



    const handleButtonOk = () => {
        onChangeValueHour(getValueTimeHour)
        onChangeValueMinute(valueMinuteTime)
        onChangeTimePicker(false)
    }
    const handleButtonCancel = () => {
        onChangeTimePicker(false)
    }

    const handleChangeValueTimeMinute = (a) => {
        setValueMinuteTime(a)
    }

    const handleChangeTimeHour = () => {
        setisShowTimeHour(false)
        setisShowTimeMinute(true)
    }
    const handleChanTimeMinute = () => {
        setisShowTimeMinute(false)
        setisShowTimeHour(true)
    }
    const handleChangeValueTimeHourOut = (a) => {
        setgetValueTimeHour(a)
    }
    const handleChangeValueTimeHourIn = (a) => {
        setgetValueTimeHour(a)
    }
    const handleChangeTimeOutHour = (a) => {
        setisShowTimeHour(a)
    }
    const handleChangeTimeInHour = (a) => {
        setisShowTimeHour(a)
    }
    const handleChangeTimeMinute = (a) => {
        setisShowTimeMinute(a)
    }


    return (
        <>
            <div className='wrapper-clock'>
                <div className='screen'>
                    <span onClick={handleChangeTimeHour} className='screen-time'>{getValueTimeHour.toString().padStart(2, "0")}</span>
                    <span onClick={handleChanTimeMinute} className='screen-minute'>:{valueMinuteTime.toString().padStart(2, "0")}</span>
                </div>
                {!isShowTimeHour && timeHourOut.map((item, index) => (
                    <TimeHourOut
                        key={index}
                        onChangeValueTimeHourOut={handleChangeValueTimeHourOut}
                        onChangeTimeHourOut={handleChangeTimeOutHour}
                        onChangeTimeMinute={handleChangeTimeMinute}
                        getValueHourOut={getValueTimeHour}
                        valueTimeHourOut={item}
                        valueIndexTimeHourOut={index}
                        valueArrTimeHourOut={timeHourOut}
                    />
                )
                )
                }
                {!isShowTimeHour && timeHourIn.map((item, index) => (
                    <TimeHourIn
                        key={index}
                        onChangeValueTimeHourIn={handleChangeValueTimeHourIn}
                        onChangeTimeHourIn={handleChangeTimeInHour}
                        onChangeTimeMinute={handleChangeTimeMinute}
                        getValueHourIn={getValueTimeHour}
                        valueTimeHourIn={item}
                        valueIndexTimeHourIn={index}
                        valueArrTimeHourIn={timeHourIn}
                    />
                )
                )
                }

                {!isShowTimeMiinute && timeMinute.map((item, index) => (
                    <TimeMinutePicker
                        key={index}
                        onChangeValueTimeMinute={handleChangeValueTimeMinute}
                        getValueMinute={valueMinuteTime}
                        valueTimeMinute={item}
                        valueIndexTimeMinute={index}
                        valueArrTimeMinute={timeMinute}
                    />
                )
                )
                }
                <button className='buttonCancel' onClick={handleButtonCancel}>CANCEL</button>
                <button className='buttonOk' onClick={handleButtonOk}>OK</button>
            </div>
        </>
    )
}

export default TimePicker