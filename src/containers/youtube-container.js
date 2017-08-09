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
            error() {
                    if (this.props.api === undefined)  {
                        var answer = confirm ("Refresh is disabled. Try my node server and click on OK to reload api.")
                        if (answer)
                        // $.getJSON("http://jsonip.com/?callback=?", function (data) {
                        //     window.location="http://" + data.ip + ":3000";
                        // });
                        window.location="http://24.70.32.105:3000";
                    }
            }

    render() {

            return(
                        <div>
                        {this.error()}
                        {this.props.api.map((item) => {

                            if (count > 30) {
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
