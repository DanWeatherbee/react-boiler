import React, {Component} from 'react';
import {connect} from 'react-redux';
import { api } from '../reducers/reducer-api';
import { bground } from '../reducers/reducer-content-images';

const style = {
    color: "lightgrey",
    backgroundColor: "black",
    position: "relative"
}

const imgStyle = {
    width: "80%"
}

const spanStyleNotAv = {
    color: "indianred",
    fontSize: ".7em"
}

const linkStyle = {
    paddingTop: "25%"
}

const iframeStyle = {
    width: "100%",
    height: 0,
    paddingBottum: "56.25%",
    position: "relative"
}

let count = 0;
class YouTube extends Component {
            error() {
                    if (this.props.api === undefined)  {
                        var answer = confirm ("Refresh is disabled. Click on OK to reload api.")
                        if (answer)
                        // $.getJSON("http://jsonip.com/?callback=?", function (data) {
                        //     window.location="http://" + data.ip + ":3000";
                        // });
                        window.location="http://localhost";
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
                                            <hr className="section" id={item[1].name}/>
                                            <h4>{item[1].name}</h4>
                                            <span><img className="img-responsive img-circle center-block"src={item[5].small} />{" Playcount: " +
                                             item[2].playcount + " Listeners: "}{item[3].listeners}</span>
                                            <img style={imgStyle} className="img-responsive picture-frame center-block" src={item[0].large} />
                                            <br />
                                            <span style={spanStyleNotAv}><em>If video is not available the default is Peg board Nerds.</em></span>
                                            <br />
                                            <label>{item[1].name + " Video - YouTube API"}</label>
                                            <br />
                                            <div style={iframeStyle}>
                                                <iframe className="ipad-youtube" src={item[7].video} allowFullScreen></iframe>
                                            </div>
                                            <br /><br /> <br /> <br /> <br />
                                            <div style={linkStyle}>
                                                <label>{item[1].name + " -  Last Fm Page "}</label>
                                                <a href={item[4].url}>&nbsp;&nbsp;{item[4].url}</a>
                                            </div>
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
