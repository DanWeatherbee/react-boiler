import React, {Component} from 'react';
import {connect} from 'react-redux';
import { api } from '../reducers/reducer-api';

const style = {
    color: "white",
    backgroundColor: "black",
    marginTop: "1%"
}

const iframeStyle = {
    width: "100%",
    height: "319px"
}
class YouTube extends Component {


    render() {

            return(
                        <div>
                        <iframe style={iframeStyle} src={this.props.api[150][0].video} ></iframe>
                        </div>
                );
    }
}

// "state.content0" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        api: state.api
    };
}

export default connect(mapStateToProps)(YouTube);
