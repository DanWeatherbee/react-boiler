// Back End

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bground } from '../../reducers/reducer-content-images';


class Content2 extends Component {

    render() {
            if (!this.props.content) {
            return (<div>no content</div>);
        }
            return(
                <div>
                    {"hello world"}
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

export default connect(mapStateToProps)(Content2);