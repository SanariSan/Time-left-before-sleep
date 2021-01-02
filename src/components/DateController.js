import React from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import DateDisplay from './DateDisplay'
import './DateController.css';
import './DateDisplay.css';

export class DateController extends React.Component {
    initState = {
        dateTimeStart: Date.now(),
        dateTimeEnd: Date.now(),
        current: 0,
        max: 0,
        working: false
    };

    state = this.initState;

    _increasement = () => {
        if (this.state.current < this.state.max) {
            this.setState({
                current: this.state.current + 1,
                working: true
            });
            setTimeout(this._increasement, 1000);
        }
        else {
            this.setState({
                working: false
            });
        }
    }

    startIncreasement = async () => {
        if (!this.state.working && this.state.dateTimeStart < this.state.dateTimeEnd) {
            await this.setState({
                current: 0,
                max: Math.round((this.state.dateTimeEnd - this.state.dateTimeStart) / 1000)
            })

            console.log(this.state);
            this._increasement();
        }
    }

    render() {
        return (
            <div className="dateController">
                <div className="pickerBlock">
                    <p>From</p>
                    <Flatpickr
                        data-enable-time
                        value={this.state.dateTimeStart}
                        options={{
                            minuteIncrement: 1,
                            enableSeconds: true
                        }}
                        onChange={date => {
                            this.setState({ dateTimeStart: (new Date(date)).getTime() });
                        }}
                    />
                    <button onClick={() => this.setState({ dateTimeStart: Date.now() })}>Current time</button>
                </div>
                <div className="pickerBlock">
                    <p>To</p>
                    <Flatpickr
                        data-enable-time
                        value={this.state.dateTimeEnd}
                        options={{
                            minuteIncrement: 1,
                            enableSeconds: true
                        }}
                        onChange={date => {
                            this.setState({ dateTimeEnd: (new Date(date)).getTime() });
                        }}
                    />
                    <button onClick={() => this.setState({ dateTimeEnd: Date.now() })}>Current time</button>
                </div>

                <DateDisplay
                    current={this.state.current}
                    max={this.state.max}
                />
                <span className="buttonsWrap">
                    <button onClick={this.startIncreasement}>Run</button>
                    <button onClick={() => this.setState(this.initState)}>Reset</button>
                </span>
            </div >
        )
    }
}