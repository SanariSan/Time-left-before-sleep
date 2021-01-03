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
        overallCorrection: 0,
        progressTimeCurrent: 0,
        progressTimeMax: 0,
        working: false,
        ended: false
    };

    state = this.initState;

    _increasement = async () => {

        let correction = Date.now() - this.state.realTimeStart;

        if (this.state.timestampStart + correction >= this.state.progressTimeMax)
            correction = this.state.timestampEnd - this.state.timestampStart;

        await this.setState({
            progressTimeCurrent: this.state.timestampStart + correction,
            overallCorrection: correction,
        });

        if (this.state.progressTimeCurrent < this.state.progressTimeMax) {
            setTimeout(this._increasement, 1);
        }
        else {
            await this.setState({
                working: false,
                ended: true
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
                        onChange={date => {
                            this.setState({ timestampStart: (new Date(date)).getTime() });
                        }}
                    />
                    <button onClick={() => this.setState({ timestampStart: Date.now() })}>Current time</button>
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
                        onChange={date => {
                            this.setState({ timestampEnd: (new Date(date)).getTime() });
                        }}
                    />
                    <button onClick={() => this.setState({ timestampEnd: Date.now() })}>Current time</button>
                </div>

                {this.state.working ?
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