import React, { Component } from 'react';
import { connect } from "react-redux";
import { List, Avatar } from 'antd';
import astronaut from "./astronaut.png"
import "./style.css"

class ConnectedCrewISS extends Component {
  
    render() {

        return (
            <div className="crew-box">
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.crew}
                    renderItem={man => (
                        <List.Item>
                            <List.Item.Meta
                                
                                avatar={<Avatar src={astronaut} />}
                                title={<a>{man.name}</a>}
                                description={"Craft: " + man.craft}
                            />
                        </List.Item>
                    )}
                />
                <div className="amount-box">
                    <p><strong>{"Total amount: " + this.props.crew.length + " on ISS"}</strong></p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        crew: state.crew
    }
}
const CrewISS = connect(mapStateToProps)(ConnectedCrewISS)
export default CrewISS;
