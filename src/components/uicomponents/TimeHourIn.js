import React from 'react';
import { useState } from 'react';
import '../../css/TimeHourIn.css';



const TimeHourIn = (
    { 
        valueArrTimeHourIn,
        valueIndexTimeHourIn,
        valueTimeHourIn,
        getValueHourIn,
        onChangeValueTimeHourIn,
        onChangeTimeHourIn,
        onChangeTimeMinute
    }) => {


    const [hoverIndex, setHoverIndex] = useState()
    const [getshowTimeHourIn, setgetshowTimeHourIn] = useState(true)
    let value = 0
    const deg = valueArrTimeHourIn.map((index) => {
        return (
            value = (360 / (valueArrTimeHourIn.length) + value)
        )
    })

    const StyleWrapperHourIn = {
        transform: 'rotate(' + deg[valueIndexTimeHourIn].toString() + 'deg)'
    }

    const styleInTime = {
        transform: 'rotate(' + '-' + deg[valueIndexTimeHourIn].toString() + 'deg)',
    }
    const styleIntimeHover = {
        transform: 'rotate(' + '-' + deg[valueIndexTimeHourIn].toString() + 'deg)',
    }

    const handleTimeIn = () => {
        setgetshowTimeHourIn(!getshowTimeHourIn)
        onChangeValueTimeHourIn(valueTimeHourIn)
        onChangeTimeHourIn(getshowTimeHourIn)
        onChangeTimeMinute(false)
    }

    const handleOnmouseMoveInTime = () => {
        setHoverIndex(valueIndexTimeHourIn)
    }
    const handleOnmouseLeaveIntime = () => {
        setHoverIndex(!valueIndexTimeHourIn)
    }

    return (
        <div style={StyleWrapperHourIn} className='timeHourIn'>
            <span
                key={valueIndexTimeHourIn}
                onMouseLeave={handleOnmouseLeaveIntime}
                onMouseMove={handleOnmouseMoveInTime}
                onClick={handleTimeIn}
                className={hoverIndex === valueIndexTimeHourIn ? 'styleIntimeHover' : getValueHourIn === valueTimeHourIn ? 'styleIntimeHover' : 'styleInTime'}
                style={hoverIndex === valueIndexTimeHourIn ? styleIntimeHover : styleInTime}>{valueTimeHourIn}
            </span>
            <span className={hoverIndex === valueIndexTimeHourIn ? 'treeInTime' : null}>
                <span className={hoverIndex === valueIndexTimeHourIn ? 'dotTreetime' : null}></span>
            </span>
        </div>
    )


}
export default TimeHourIn