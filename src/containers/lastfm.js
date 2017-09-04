import React, {Component} from 'react';
import {connect} from 'react-redux';
import { api } from '../reducers/reducer-api';

import YouTube from '../containers/youtube-container';


class LastFm extends Component {

    render() {

return <YouTube/>

    }
}




function mapStateToProps(state) {
    return {
        api: state.api
    };
}

export default connect(mapStateToProps)(LastFm);
