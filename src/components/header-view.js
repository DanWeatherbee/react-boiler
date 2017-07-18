import React from 'react';
import { bground } from '../reducers/reducer-content-images';
import {connect} from 'react-redux';

const imgStyle = {
    width: "100%",
    maxHeight: "700px",
    opacity: ".5"
}

const hStyle = {
        color: "#00a1ff"
}

class HeaderView extends React.Component {

    render () {
        return (
                <div className="container">
                        <div className="row">
                                <div className="col-md-2">
                                        <h3 style={hStyle}>React Redux Sass</h3>
                                </div>
                                <div className="col-md-8 text-center">
                                        <h1 style={hStyle}>Modern Single Page Web Developement</h1>
                                </div>
                                <div className="col-md-2">
                                        <h3 style={hStyle}>Weback Build System</h3>
                                </div>
                                <img style={imgStyle} src={this.props.bground[0].src} />
                        </div>
                </div>
                );
        }
}


// "state.bground" is set in store/reducers.js
function mapStateToProps(state) {
    return {
        bground: state.bground
    };
}

export default connect(mapStateToProps)(HeaderView);