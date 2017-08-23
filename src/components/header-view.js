import React from 'react';
import { bground } from '../reducers/reducer-content-images';
import {connect} from 'react-redux';
import { api } from '../reducers/reducer-api';
const imgStyle = {
    maxWidth: "20%",
    maxHeight: "700px",
    margin: "2%"
}
const imgStyle2 = {
    maxWidth: "50%",
    maxHeight: "700px"
}
const hStyle = {
        color: "#00a1ff"
}

class HeaderView extends React.Component {

    render () {
        return (
                <div className="container">
                        <div className="row text-center">
                                <div className="col-md-2">
                                        <h3 style={hStyle}>React Redux Mongo</h3>
                                </div>
                                <div className="col-md-8 text-center">
                                        <h1 style={hStyle}>Modern Web Developement Stack</h1>
                                        <br />
                                        <h5 style={hStyle}>High Performance Responsive Single page App's</h5>
                                </div>
                                <div className="col-md-2">
                                        <h3 style={hStyle}>Weback Build System</h3>
                                </div>
                                <img className="ipad" style={imgStyle} src={this.props.bground[13].src} />
                                <img className="ipad" style={imgStyle2} src={this.props.bground[0].src} />
                                <img className="ipad" style={imgStyle} src={this.props.bground[7].src} />
                                <br />
                        </div>
                </div>
                );
        }
}


// "state.bground" is set in store/reducers.js
function mapStateToProps(state) {
    return {
        bground: state.bground,
        api: state.api
    };
}

export default connect(mapStateToProps)(HeaderView);