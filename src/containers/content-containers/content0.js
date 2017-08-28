// About

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bground } from '../../reducers/reducer-content-images';


class Content0 extends Component {

    render() {
            if (!this.props.content) {
            return (<div>no content</div>);
        }
            return(
                    <div>
                        <h2>About</h2>
                        <div>{this.props.content[0].text}</div>
                        <br />
                        <img className="img-responsive" src={this.props.bground[2].src} />
                        <br />
                        <br />
                        <div>{this.props.content[0].text3}</div>
                        <br />
                        <div>{this.props.content[0].text2}</div>
                        <br />
                        <div>{this.props.content[0].text4}</div>
                    </div>
                );
    }
}

// "state.content0" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        content: state.content,
        bground: state.bground
    };
}

export default connect(mapStateToProps)(Content0);