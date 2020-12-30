import React, { useState } from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import { DateDisplay } from './DateDisplay';
//DateControllerFunctional_test
export function DateController(props) {
    let [dateStart, setDateStart] = useState(Date.now());
    let [dateEnd, setDateEnd] = useState(Date.now());

    function startIncreasement() {
        if (dateStart < dateEnd) {
            setDateStart(dateStart + 1);
            setTimeout(startIncreasement, 1000);
        }
    }

    return (
        <div className="">
            <div className="pickerBlock">
                <Flatpickr
                    data-enable-time
                    value={dateStart}
                    options={{
                        minuteIncrement: 1
                    }}
                    onChange={date => {
                        setDateStart((new Date(date)).getTime());
                    }}
                />
                <button onClick={() => setDateStart(Date.now())}>Current time</button>
            </div>
            <div className="pickerBlock">
                <Flatpickr
                    data-enable-time
                    value={dateStart}
                    options={{
                        minuteIncrement: 1
                    }}
                    onChange={date => {
                        setDateEnd((new Date(date)).getTime());
                    }}
                />
                <button onClick={() => setDateEnd(Date.now())}>Current time</button>
            </div>

            <DateDisplay timeLeft={dateEnd - dateStart} />

            <button onClick={startIncreasement}>Save</button>
        </div>
    )
}