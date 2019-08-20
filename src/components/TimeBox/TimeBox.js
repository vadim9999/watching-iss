import React, { Component } from 'react';
import { connect } from "react-redux"
import "./style.css"

class ConnectedTimeBox extends Component {
   
    render() {
        const { date } = this.props;
        const time = date.format("HH:mm")
        const dateFormatted = date.format("dddd, D MMM YYYY")

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