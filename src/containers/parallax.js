import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bground } from '../reducers/reducer-content-images';
/*
 * We need "if(!this.props.links)" because we set state to null by default
 * */

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
                <div className="container text-center">
                    <h1>Website Features</h1>
                    <br />
                    <br />
                    <h3>Scalable Application &#9989;</h3>
                    <br />
                    <h3>Advanced Programming using the react-redux ecosystem. &#9989;</h3>
                    <br />
                    <h3>Built using Best Practices. &#9989;</h3>
                    <br />
                    <h3>Coded using Java Scripts's MVM Pattern. &#9989;</h3>
                    <br />
                    <h3>MERN Stack with MongoDB. &#9989;</h3>
                    <br />
                    <h3>Last Fm API. &#9989;</h3>
                    <br />
                    <h3>YouTube API. &#9989;</h3>
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