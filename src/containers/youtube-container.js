import React, {Component} from 'react';
import {connect} from 'react-redux';
import { api } from '../reducers/reducer-api';
import { bground } from '../reducers/reducer-content-images';

const style = {
    color: "lightgrey",
    backgroundColor: "black"
}

const imgStyle = {
    width: "80%"
}
let count = 0;
const iframeStyle = {
    width: "80%",
    height: "600px"
}

class YouTube extends Component {
            error() {
                    if (this.props.api === undefined)  {
                        var answer = confirm ("Refresh is disabled. Click on OK to reload api.")
                        if (answer)
                        // $.getJSON("http://jsonip.com/?callback=?", function (data) {
                        //     window.location="http://" + data.ip + ":3000";
                        // });
                        window.location="http://24.70.32.105:3000";
                    }
            }

    render() {

            return(
                        <div className="text-center">
                            <h1>Top 50 Artisists Last FM API</h1>
                            <div style={style}>
                                {this.error()}
                                {this.props.api.map((item) => {

                                    if (count > 49) {
                                        return
                                    }

                                    count++;

                                    return (

                                        <div key={item[6].id}>
                                        <hr />
                                        <h4>{item[1].name}</h4>
                                        <span><img className="img-responsive img-circle center-block"src={item[5].small} />{" Playcount: " +
                                         item[2].playcount + " Listeners: "}{item[3].listeners}</span>
                                        <img style={imgStyle} className="img-responsive picture-frame center-block" src={item[0].large} />
                                        <br />
                                        <label>{item[1].name + " Video - YouTube API"}</label>
                                        <br />
                                        <iframe style={iframeStyle} className="ipad-youtube" src={item[7].video}></iframe>
                                        <br />
                                        <label>{item[1].name + " -  Last Fm Page "}</label>
                                        <a href={item[4].url}>&nbsp;&nbsp;{item[4].url}</a>
                                        </div>
                                    )

                                })}
                            </div>
                        </div>
                );
    }
}

// "state.content0" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        api: state.api,
        bground: state.bground
    };
}

export default connect(mapStateToProps)(YouTube);
