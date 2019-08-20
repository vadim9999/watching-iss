import React, { Component } from 'react';
import { connect } from "react-redux"
import moment from "moment"
class ConnectedTimeBox extends Component {
    constructor() {
        super()
    }

    getDateName(date) {
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        return weekday[date.getUTCDay()]
    }


    render() {
        console.log("Timer");
        // console.log(this.props.date);
        const { date } = this.props;
        const time = date.format("HH:mm")
        const dateFormatted = date.format("dddd, D MMM YYYY")

        console.log(date.format("HH:mm"));
        console.log(date.format("dddd, D MMM YYYY"));

        // const hours = date.getUTCHours();
        // const minutes = date.getUTCMinutes();
        // const day = this.getDateName(date)
        // const dateU = date.getUTCDate()

        // const month = date.getUTCMonth()
        return (
            <div className="date-box">
                <p><strong>{"Current UTC time: " + time}</strong> <br />
                <i>{dateFormatted}</i>
                </p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        date: state.date
    }
}

const TimeBox = connect(mapStateToProps)(ConnectedTimeBox)
export default TimeBox