import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bground } from '../../reducers/reducer-content-images';
/*
 * We need "if(!this.props.links)" because we set state to null by default
 * */

class Content0 extends Component {

    render() {
            if (!this.props.content) {
            return (<div>no content</div>);
        }
            return(
            <div>
                <div>{this.props.content[0].con}</div>
                <br />
                <div>{this.props.content[0].text}</div>
                </div>
                );
    }
}

// "state.content0" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        content: state.content
    };
}

export default connect(mapStateToProps)(Content0);