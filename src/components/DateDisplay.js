import React, { useState, useEffect } from 'react';

export default (props) => {
    const colors = {
        green: 'rgb(45, 255, 133)',
        yellow: 'rgb(217, 219, 56)',
        orange: 'rgb(255, 145, 82)',
        red: 'rgb(255, 93, 87)'
    };
    const [barWidth, setBarWidth] = useState();
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    let barColor = null;

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

            if (currentPercentTime <= 25 && barColor !== colors.green) {
                barColor = colors.green;
            }
            else if (currentPercentTime <= 50 && barColor !== colors.yellow) {
                barColor = colors.yellow;
            }
            else if (currentPercentTime <= 75 && barColor !== colors.orange) {
                barColor = colors.orange;
            }
            else if (currentPercentTime <= 100 && barColor !== colors.red) {
                barColor = colors.red;
            }

            return currentPositionBar;
        }

        return 0;
    }

    let dateShow;
    if (props.progressTimeMax && props.progressTimeCurrent && props.progressTimeCurrent < props.progressTimeMax)
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
                <p>{hoursLeft < 10 ? '0' + hoursLeft : hoursLeft}</p>:
                <p>{minutesLeft < 10 ? '0' + minutesLeft : minutesLeft}</p>
                :
                <p>{secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}</p>
                :
                <p>{mSecondsLeft < 10 ? '00' + mSecondsLeft :
                    mSecondsLeft < 100 ? '0' + mSecondsLeft :
                        mSecondsLeft === 1000 ? 999 : mSecondsLeft}</p>
            </div>

            <div className="percents-nums">
                <p>25%</p>
                <p>50%</p>
                <p>75%</p>
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
                        backgroundColor: barColor,
                    }}>
                </p>
            </span>

            <div className="percents-marks">
                <p>|</p>
                <p>|</p>
                <p>|</p>
            </div>
        </div>
    )
};


