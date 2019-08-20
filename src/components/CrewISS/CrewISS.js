import React, { Component } from 'react';
import { connect } from "react-redux";

class ConnectedCrewISS extends Component {
    constructor(){
        super()
        
    }

    render(){
        console.log("CrewISS");
        console.log(this.props.crew);
        
        return (
            <div>
                <ul>
                {this.props.crew.map( man => {
                    return (<li>{man.name}</li>)
                })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        crew: state.crew
    }
}
const CrewISS = connect(mapStateToProps)(ConnectedCrewISS)
export default CrewISS;
