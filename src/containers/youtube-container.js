import React, {Component} from 'react';
import {connect} from 'react-redux';
import { api } from '../reducers/reducer-api';

const style = {
    color: "white",
    backgroundColor: "black",
    marginTop: "1%"
}
let count = 0;
const iframeStyle = {
    width: "100%",
    height: "600px"
}
class YouTube extends Component {

    render() {

            return(
                        <div>

                        {this.props.api[150].map((item) => {

                            if (count > 49) {
                                return
                            }
                            count++
                            if (item.video === "https://www.youtube.com/embed/undefined") {
                                return
                            }

                            return (

                            <div>
                            <iframe style={iframeStyle} src={item.video} ></iframe>
                            </div>

                            )
                        })}

                        </div>

                );
    }
}

// "state.content0" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        api: state.api
    };
}

export default connect(mapStateToProps)(YouTube);
