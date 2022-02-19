import React from 'react';
import { useState } from 'react';
import '../../css/TimeHourOut.css';



const TimeHourOut =
    ({
        valueArrTimeHourOut,
        valueIndexTimeHourOut,
        getValueHourOut,
        onChangeValueTimeHourOut,
        onChangeTimeHourOut,
        onChangeTimeMinute,
        valueTimeHourOut
    }) => {

        const [hoverIndexTimeOut, setHoverIndexTimeOut] = useState()
        const [handleshowhideTimeOutHour, setHandleshowhideTimeOutHour] = useState(true)
        let value = 0
        const deg = valueArrTimeHourOut.map(() => {
            return (
                value = 360 / (valueArrTimeHourOut.length) + value
            )
        })

        const styleWrapperTimeOut = {
            transform: 'rotate(' + deg[valueIndexTimeHourOut].toString() + 'deg)'
        }
        const styleNumberTimeOut = {
            transform: 'rotate(' + '-' + deg[valueIndexTimeHourOut].toString() + 'deg)',
        }


        const handleClickTimeHour = () => {
            onChangeValueTimeHourOut(valueTimeHourOut)
            onChangeTimeHourOut(handleshowhideTimeOutHour)
            onChangeTimeMinute(false)
            setHandleshowhideTimeOutHour(!handleshowhideTimeOutHour)
        }

        const hoverNumberTimeOut = {
            transform: 'rotate(' + '-' + deg[valueIndexTimeHourOut].toString() + 'deg)',
        }

        const handleNumberTimeMove = () => {
            setHoverIndexTimeOut(valueIndexTimeHourOut)
        }
        const handleNumberTimeLeave = () => {
            setHoverIndexTimeOut(!valueIndexTimeHourOut)
        }

        return (
            <>
                <div
                    style={styleWrapperTimeOut}
                    className='timeHourOut'>
                    <span
                        key={valueIndexTimeHourOut}
                        onMouseLeave={handleNumberTimeLeave}
                        onMouseMove={handleNumberTimeMove}
                        onClick={handleClickTimeHour}
                        className={hoverIndexTimeOut === valueIndexTimeHourOut ? 'hoverNumberTimeOut' : getValueHourOut === valueTimeHourOut ? 'hoverNumberTimeOut' : 'styleNumberTimeOut'}
                        style={hoverIndexTimeOut === valueIndexTimeHourOut ? hoverNumberTimeOut : styleNumberTimeOut}>{valueTimeHourOut}
                    </span>
                    <span className={hoverIndexTimeOut === valueIndexTimeHourOut ? 'treeTimeOut' : null}>
                        <span className={hoverIndexTimeOut === valueIndexTimeHourOut ? 'dotTreetimeOut' : null}></span>
                    </span>

                </div>
            </>
        )
    }

export default TimeHourOut