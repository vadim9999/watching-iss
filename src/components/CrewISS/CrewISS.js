import React, { Component } from 'react';
import { connect } from "react-redux";
import { List, Avatar } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import astronaut from "./astronaut.png"
    class ConnectedCrewISS extends Component {
        constructor() {
            super()

        }

        render() {
            console.log("CrewISS");
            console.log(this.props.crew);

            return (
                <div className="crew-box">

                    <List

                        itemLayout="horizontal"
                        dataSource={this.props.crew}
                        renderItem={man => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={astronaut} />}
                                    title={<a href="https://ant.design">{man.name}</a>}
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
