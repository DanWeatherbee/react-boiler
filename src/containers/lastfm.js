import React, {Component} from 'react';
import {connect} from 'react-redux';
import {music} from '../reducers/reducer-api';

class LastFm extends Component {

    render() {

return (
    <div className="container">
    <div>
        <h1>Top 50 Artists</h1>
                {this.props.music.map((item, index) => (
                   <figure key={index + "figure"}>
                   <figcaption key={index + "caption"}>{item[1].name}</figcaption>
                   <img className="img-responsive" key={index + "image"} src={item[0].url} />
                   <hr key={index + "hr"}/>
                   </figure>
                ))}
                </div>
   </div>
);
    }
}

// "state" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        content: state.content,
        bground: state.bground,
        music: state.music
    };
}

export default connect(mapStateToProps)(LastFm);
