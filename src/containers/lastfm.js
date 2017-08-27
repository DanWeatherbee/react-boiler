import React, {Component} from 'react';
import {connect} from 'react-redux';
import { api } from '../reducers/reducer-api';

import YouTube from '../containers/youtube-container';

const style = {
  backgroundColor: "#32324a",
  color: "#f3d4cd",
  border: "1em solid",
  borderColor: "white",
  margin: "2em"
}

const divStyle = {
  backgroundColor: "#494956",
  padding: "5%"
}


class LastFm extends Component {

    render() {

return <YouTube/>

    }
}



// "state.content0" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        api: state.api
    };
}

export default connect(mapStateToProps)(LastFm);
