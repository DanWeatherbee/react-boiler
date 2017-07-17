import React from 'react';
import { bground } from '../reducers/reducer-content-images';
import {connect} from 'react-redux';

const style = {
    width: "100%",
    height: "100%"
}
class HeaderView extends React.Component {

    render () {
        return <img style={style} src={this.props.bground[1].src} />
        }
}


// "state.bground" is set in store/reducers.js
function mapStateToProps(state) {
    return {
        bground: state.bground
    };
}

export default connect(mapStateToProps)(HeaderView);