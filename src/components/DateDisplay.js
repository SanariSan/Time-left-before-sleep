import React, { useState, useEffect } from 'react';

export default (props) => {
    const [barWidth, setBarWidth] = useState();
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        const bar = document.getElementsByClassName('bar')[0];
        setBarWidth((bar.getBoundingClientRect()).width);

        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        };
    });

    function calculatePosition() {
        if (props.progressTimeMax !== 0) {
            let wholeBar = props.progressTimeMax - props.timestampStart;
            let current = wholeBar - (props.progressTimeMax - props.progressTimeCurrent);
            let currentPercentTime = (current / wholeBar) * 100;
            let currentPositionBar = Math.round(barWidth / 100 * currentPercentTime);

            return currentPositionBar;
        }

        return 0;
    }

    let dateShow;
    if (props.progressTimeMax && props.progressTimeCurrent)
        dateShow = new Date(props.progressTimeMax - props.progressTimeCurrent); //1899-01-01 / X-X-X
    else {
        dateShow = new Date(Date.UTC(0, 0, 0, 0, 0, 0, 0));
    }

    let hoursLeft = dateShow.getUTCHours();
    let minutesLeft = dateShow.getUTCMinutes();
    let secondsLeft = dateShow.getUTCSeconds();
    let mSecondsLeft = dateShow.getUTCMilliseconds();

    return (
        <div className="dateDisplay">
            <div className="time">
                {hoursLeft < 10 ? '0' + hoursLeft : hoursLeft}:
                {minutesLeft < 10 ? '0' + minutesLeft : minutesLeft}:
                {secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}:
                {mSecondsLeft < 10 ? '00' + mSecondsLeft :
                    mSecondsLeft < 100 ? '0' + mSecondsLeft :
                        mSecondsLeft === 1000 ? 999 : mSecondsLeft}
            </div>

            <span className="bar">
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
        </div>
    )
};


