import React, {Component} from 'react';
import {connect} from 'react-redux';
import { api } from '../reducers/reducer-api';
import { bground } from '../reducers/reducer-content-images';

const style = {
    color: "white",
    backgroundColor: "black",
    position: "relative"
}

const imgStyle = {
    width: "40%"
}

const spanStyleNotAv = {
    color: "indianred",
    fontSize: ".7em"
}

const linkStyle = {
    paddingTop: "15%"
}

const iframeStyle = {
    width: "100%",
    height: "0",
    paddingBottom: "5%",
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
                            <h1>Top 50 Artisists - | Last FM | YouTube | - API's</h1>
                            <h4>On website load dual apis feed data to my algorithym, injected into a reducer array and called from the Store(prop-types) as a prop in the application.</h4>
                            <h4>I used css image splicing to create frames around the image and iframe elements.</h4>
                            <h5>If page is blank you can</h5>
                            <a  className="hover-green" onClick={function(){window.location="http://24.70.32.148/api";alert("Api call completed. After refresh. Click Music Api to load.");}}>Call the Api</a>
                            <br />
                            <p>I am building a object class for calling api's that will replace this(async in a javascript object - Fast.), check it out. - </p>
                            <a href="http://24.70.32.148:8011/">Api Caller Class Demo</a>
                            <div style={style}>
                                {this.error()}
                                {this.props.api.map((item) => {

                                    if (count > 49) {
                                        return
                                    }

                                    count++;

                                    return (

                                        <div key={item[6].id} className="parallax">
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
                                                <a href={item[4].url} className="hover-green">&nbsp;&nbsp;{item[4].url}</a>
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
