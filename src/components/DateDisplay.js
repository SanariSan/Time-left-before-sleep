import React from 'react';
import './DateDisplay.css'

const barWidth = 1200;

export default (props) => {
    function calculatePosition() {
        return props.max !== 0 ? Math.round(barWidth / 100 * Math.round((props.current / props.max) * 100)) : 0;
    }

    let hoursLeft = Math.floor((props.max - props.current) / 3600);
    let minutesLeft = Math.floor((props.max - props.current) / 60) - hoursLeft * 60;
    let secondsLeft = props.max - props.current - hoursLeft * 3600 - minutesLeft * 60;

    return (
        <div className="">
            <p>
                {hoursLeft < 10 ? '0' + hoursLeft : hoursLeft}:
                {minutesLeft < 10 ? '0' + minutesLeft : minutesLeft}:
                {secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}
            </p>
            <span className="bar">
                {/* <aside
                    className="bar-outer"
                    style={{
                        width: barWidth + 'px'
                    }}>
                    <p
                        className="bar-inner"
                        style={{
                            width: calculatePosition() + 'px',
                        }}>
                    </p>
                </aside> */}
                <p
                    className="bar-outer"
                    style={{
                        width: barWidth + 'px'
                    }}>
                </p>
                <p
                    className="bar-inner"
                    style={{
                        width: calculatePosition() + 'px',
                    }}>
                </p>
            </span>
            {/* <progress value={calculatePosition()} max={props.max}></progress> */}
        </div>
    )
};


