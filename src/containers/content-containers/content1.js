import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bground } from '../../reducers/reducer-content-images';
/*
 * We need "if(!this.props.links)" because we set state to null by default
 * */
const imgStyle = {
    maxWidth: "20%",
    maxHeight: "700px",
    margin: "2%"
}

class Content1 extends Component {

    render() {
            if (!this.props.content) {
            return (<div>no content</div>);
        }
            return(
                <div className="parallax">
                    <img className="picture-frame" style={imgStyle} src={this.props.bground[10].src} />
                    <div className="text-right">
                    <h1>Front End Ninja</h1>
                    {this.props.content[1].text}
                    </div>
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