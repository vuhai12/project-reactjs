import React from 'react';
import { useState } from 'react';
import '../../css/TimeMinutePicker.css';



const TimeMinutePicker = ({ valueTimeMinute, valueIndexTimeMinute, getValueMinute, onChangeValueTimeMinute, valueArrTimeMinute }) => {

    const [hoverTimeMinute, setHoverTimeMinute] = useState()
    
    let valueMinute = 0
    const degMinute = valueArrTimeMinute.map(() => {
        return (
            valueMinute = 360 / (valueArrTimeMinute.length) + valueMinute
        )
    })

    const wrapperStyleMinute = {
        transform: 'rotate(' + degMinute[valueIndexTimeMinute].toString() + 'deg)',
    }
    const styleMinute = {
        transform: 'rotate(' + '-' + degMinute[valueIndexTimeMinute].toString() + 'deg)',
    }

    const styleHoverMinute = {
        transform: 'rotate(' + '-' + degMinute[valueIndexTimeMinute].toString() + 'deg)',
    }

    const handleClickTimeMinute = () => {
        onChangeValueTimeMinute(valueTimeMinute)
    }

    const hoverWrapperStyleMinute = {
        transform: 'rotate(' + degMinute[valueIndexTimeMinute].toString() + 'deg)',
    }

    const handleMouseMove = () => {
        setHoverTimeMinute(valueIndexTimeMinute)
    }

    const handleMouseLeave = () => {
        setHoverTimeMinute(!valueIndexTimeMinute)
    }


    return (
        <div
            className={hoverTimeMinute === valueIndexTimeMinute ? 'hoverWrapperStyleMinute' : 'wrapperStyleMinute'}
            style={hoverTimeMinute === valueIndexTimeMinute ? hoverWrapperStyleMinute : wrapperStyleMinute}>
            <span
                key={valueIndexTimeMinute}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onClick={handleClickTimeMinute}
                className={hoverTimeMinute === valueIndexTimeMinute ? 'styleHoverMinute' : getValueMinute === valueTimeMinute ? 'styleHoverMinute' : 'styleMinute'}
                style={hoverTimeMinute === valueIndexTimeMinute ? styleHoverMinute : styleMinute}>{(valueTimeMinute % 5 !== 0) ? '.' : valueTimeMinute}
            </span>
            <span className={hoverTimeMinute === valueIndexTimeMinute ? 'treeTimeMinute' : null}>
                <span className={hoverTimeMinute === valueIndexTimeMinute ? 'dotTreetimeMinute' : null}></span>
            </span>
        </div>
    )
}

export default TimeMinutePicker