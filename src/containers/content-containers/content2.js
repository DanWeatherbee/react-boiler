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
                <div className="container">
                            <h2>Back End</h2>
                            <h3>{this.props.content[2].text}</h3>
                            <p>{this.props.content[2].text1}</p>
                            <p>{this.props.content[2].text2}</p>
                            <p>{this.props.content[2].text3}</p>
                            <img className="img-responsive" src={this.props.bground[6].src} />
                            <p>{this.props.content[2].text4}</p>
                            <h3>Before the fix was applied the result was: </h3>
                            <img className="img-responsive" src={this.props.bground[9].src} />
                            <h3>Conclusion</h3>
                            <p>{this.props.content[2].text5}</p>
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