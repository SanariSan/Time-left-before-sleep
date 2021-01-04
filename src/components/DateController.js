import React from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import DateDisplay from './DateDisplay'
import './DateController.css';
import './DateDisplay.css';

export class DateController extends React.Component {
    initState = {
        timestampStart: Date.now(),
        timestampEnd: Date.now(),
        realTimeStart: 0,
        progressTimeCurrent: 0,
        progressTimeMax: 0,
        working: false,
        ended: false,
        timePreview: false
    };

    state = this.initState;

    _increasement = async () => {

        let correction = Date.now() - this.state.realTimeStart;

        if (this.state.timestampStart + correction >= this.state.progressTimeMax)
            correction = this.state.timestampEnd - this.state.timestampStart;

        await this.setState({
            progressTimeCurrent: this.state.timestampStart + correction,
        });

        if (this.state.progressTimeCurrent < this.state.progressTimeMax) {
            setTimeout(this._increasement, 1);
        }
        else {
            await this.setState({
                working: false,
                ended: true,
                timePreview: false
            });
        }
    }

    startIncreasement = async () => {
        if (!this.state.working && this.state.timestampStart < this.state.timestampEnd) {
            await this.setState({
                progressTimeCurrent: this.state.timestampStart,
                progressTimeMax: this.state.timestampEnd,
                realTimeStart: Date.now(),
                working: true,
                ended: false
            })

            setTimeout(this._increasement, 1);
        }
    }

    changeDate = async (name, value) => {
        await this.setState({
            [name]: (new Date(value)).getTime(),
            timePreview: true
        });

        this.setState({
            progressTimeCurrent: this.state.timestampStart,
            progressTimeMax: this.state.timestampEnd,
        });
    }

    render() {
        return (
            <div className="dateController">
                <div className="pickerBlock">
                    <p>From</p>
                    <Flatpickr
                        data-enable-time
                        value={this.state.timestampStart}
                        options={{
                            minuteIncrement: 1,
                            enableSeconds: true
                        }}
                        onChange={date => this.changeDate('timestampStart', date)}
                    />
                    <button onClick={() => this.changeDate('timestampStart', new Date())}>Current time</button>
                </div>
                <div className="pickerBlock">
                    <p>To</p>
                    <Flatpickr
                        data-enable-time
                        value={this.state.timestampEnd}
                        options={{
                            minuteIncrement: 1,
                            enableSeconds: true
                        }}
                        onChange={date => this.changeDate('timestampEnd', date)}
                    />
                    <button onClick={() => this.changeDate('timestampEnd', new Date())}>Current time</button>
                </div>

                {this.state.working || this.state.timePreview ?
                    <DateDisplay
                        timestampStart={this.state.timestampStart}
                        progressTimeCurrent={this.state.progressTimeCurrent}
                        progressTimeMax={this.state.progressTimeMax}
                    />
                    : <p className="no-active-bar">Set time and press RUN</p>}
                {this.state.ended ? <p className="timer-finished">Last timer finished successfully</p> : null}

                <span className="buttonsWrap">
                    <button onClick={this.startIncreasement}>Run</button>
                    <button onClick={() => this.setState(this.initState)}>Reset</button>
                </span>
            </div >
        )
    }
}