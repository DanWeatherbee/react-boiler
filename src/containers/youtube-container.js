import React, {Component} from 'react';
import {connect} from 'react-redux';
import { api } from '../reducers/reducer-api';
import { bground } from '../reducers/reducer-content-images';

const style = {
    color: "lightgrey",
    backgroundColor: "black",
    padding: "1%"
}
let count = 0;
const iframeStyle = {
    width: "80%",
    height: "600px"
}

const imgStyle = {
    maxHeight: "500px"
}

const shadow = {
    textShadow: "1px 1px 1px  black"
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
                        <div className="container-fluid center-block" style={shadow}>
                            <h1>Top 50 Artisists Last FM API</h1>

                                {this.error()}
                                {this.props.api.map((item) => {

                                    if (count > 49) {
                                        return
                                    }

                                    count++;

                                    return (

                                        <article key={item[6].id}  style={style}>

                                                        <hr />
                                                        <h2>{item[1].name}</h2>
                                                        <div className="text-center">
                                                                <img className="img-responsive img-circle center-block"src={item[5].small} />
                                                                <br />
                                                                {" Playcount: " + item[2].playcount + " Listeners: "}{item[3].listeners}
                                                         </div>
                                                         <br />
                                                        <img style={imgStyle} className="img-responsive center-block picture-frame" src={item[0].large} />
                                                        <br />
                                                        <h4>{item[1].name + " Video - YouTube API"}</h4>
                                                        <iframe className="ipad2" style={iframeStyle} src={item[7].video}></iframe>
                                                        <br />
                                                        <label>{item[1].name + " -  Last Fm Page "}</label>
                                                        <a href={item[4].url}>
                                                        <br />
                                                        {item[4].url}</a>

                                        </article>
                                    )

                                })}

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
