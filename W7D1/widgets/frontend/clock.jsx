import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = { time: new Date() };
        this.tick = this.tick.bind(this);
        this.tickInterval = null;
    }

    tick() {
        this.setState({ time: new Date() });
        
    }

    componentDidMount() {
        this.tickInterval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        if (this.tickInterval){
            clearInterval(this.tickInterval);
            this.tickInterval = null;
        }
    }

    render() {
        const currentTime = this.state.time;
        
        return (
            <> 
                <header id="clock-header">
                    <h1>Clock</h1>
                </header>
                <div id="clock-container">
                    <div className="time-container">
                        <h3>Time:</h3>
                        <h3>{currentTime.getHours()}:{currentTime.getMinutes()}:{currentTime.getSeconds()}</h3>
                    </div>
                    <div className="date-container">
                        <h3>Date:</h3>
                        <h3>{currentTime.toDateString()}</h3>
                    </div>
                </div>
            </>
        )
    }
}

export default Clock;