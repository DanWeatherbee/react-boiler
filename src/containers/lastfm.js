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

const articleStyle = {
  backgroundColor: "#494956",
  padding: "5%"
}

const h1Style = {
  textAlign: "left",
  paddingLeft: "1%"
}



class LastFm extends Component {

    render() {

return (
    <article style={style}>
        <h1 style={h1Style}>Top 50 Artists</h1>
        <YouTube />
   </article>
);
    }
}



// "state.content0" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        api: state.api
    };
}

export default connect(mapStateToProps)(LastFm);
