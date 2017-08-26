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
                    <h2>{this.props.content[2].text}</h2>
                    <div>
                        <h4>Quote: {this.props.content[2].text1}.</h4>
                        <br />
                        <article>
                            {this.props.content[2].text2}<br />{this.props.content[2].text3}
                        </article>
                    </div>
                    <br />
                    <img className="img-responsive" src={this.props.bground[6].src} />
                    <br />
                    <p>{this.props.content[2].text4}</p>
                    <br />
                    <h3>Before the fix was applied the result was: </h3>
                    <br />
                    <img className="img-responsive" src={this.props.bground[9].src} />
                    <br />
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