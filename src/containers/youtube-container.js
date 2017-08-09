import React, {Component} from 'react';
import {connect} from 'react-redux';
import { api } from '../reducers/reducer-api';
import { bground } from '../reducers/reducer-content-images';

const style = {
    color: "lightgrey",
    backgroundColor: "black",
    marginTop: "1%"
}
let count = 0;
const iframeStyle = {
    width: "100%",
    height: "100%"
}

const shadow = {
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    padding: "2%"
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
                        <div>
                            <h1>Top 50 Artisists Last FM API</h1>
                            <ol style={style}>
                                {this.error()}
                                {this.props.api.map((item) => {

                                    if (count > 49) {
                                        return
                                    }

                                    count++;

                                    return (

                                        <li key={item[6].id}  style={shadow}>
                                        <hr />
                                        <h4>{item[1].name}</h4>
                                        <span><img className="img-responsive"src={item[5].small} />{" Playcount: " +
                                         item[2].playcount + " Listeners: "}{item[3].listeners}</span>
                                        <img className="img-responsive" src={item[0].large} />
                                        <br />
                                        <label>{item[1].name + " Video - YouTube API"}</label>
                                        <iframe style={iframeStyle} src={item[7].video}></iframe>
                                        <br />
                                        <label>{item[1].name + " -  Last Fm Page "}</label>
                                        <a href={item[4].url}>&nbsp;&nbsp;{item[4].url}</a>
                                        </li>
                                    )

                                })}
                            </ol>
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
