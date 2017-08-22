// Stack

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bground } from '../../reducers/reducer-content-images';


class Content1 extends Component {

    render() {
            if (!this.props.content) {
            return (<div>no content</div>);
        }
            return(
                <div>
                <div>{this.props.content[1].text}</div>
                <br />
                 <div>{this.props.content[1].text2}</div>
                 <br />
                 <img className="img-responsive" src={this.props.bground[3].src} />
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

export default connect(mapStateToProps)(Content1);