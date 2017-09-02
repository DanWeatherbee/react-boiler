// Features

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bground } from '../reducers/reducer-content-images';

const style = {

}

const divStyle = {
    padding: "5%",
    fontFamily: "roboto",
    letterSpacing: ".5em"
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
                    <h3 style={style}>React Redux Mongo Webpack Ecosystem. &#9989;</h3>
                    <br />
                    <h3 style={style}>Built using Best Practices. &#9989;</h3>
                    <br />
                    <h3 style={style}>Coded with Object Oriented MVM Pattern. &#9989;</h3>
                    <br />
                    <h3 style={style}>MERN Stack MongoDB Mongoose Axios. &#9989;</h3>
                    <br />
                    <h3 style={style}>Last Fm API. &#9989; YouTube API. &#9989;</h3>
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