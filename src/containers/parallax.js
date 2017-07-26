import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bground } from '../reducers/reducer-content-images';
/*
 * We need "if(!this.props.links)" because we set state to null by default
 * */
const style = {
    color: "white"
}

const divStyle = {
    paddingTop: "5%",
    marginTop: "20%",
    paddingBottom: "20%",
    fontFamily: "roboto",
    letterSpacing: ".5em",
    background: "midnightblue"
}

class Parallax extends Component {

    render() {
            if (!this.props.content) {
            return (<div>no content</div>);
        }
            return(
                <div style={divStyle} className="text-center">
                    <h1 style={style}>Website Features</h1>
                    <br />
                    <br />
                    <h3 style={style}>Scalable Application &#9989;</h3>
                    <br />
                    <h3 style={style}>Advanced Programming using the react-redux ecosystem. &#9989;</h3>
                    <br />
                    <h3 style={style}>Built using Best Practices. &#9989;</h3>
                    <br />
                    <h3 style={style}>Coded using Java Scripts's MVM Pattern. &#9989;</h3>
                    <br />
                    <h3 style={style}>MERN Stack with MongoDB. &#9989;</h3>
                </div>
                );
    }
}

// "state.content" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        content: state.content,
        bground: state.bground
    };
}

export default connect(mapStateToProps)(Parallax);