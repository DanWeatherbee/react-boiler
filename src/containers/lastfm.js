import React, {Component} from 'react';
import {connect} from 'react-redux';
import {music} from '../reducers/reducer-api';
const style = {
    padding: "1%"
}
class LastFm extends Component {

    render() {

return (
    <div className="container">
        <h1>Top 50 Artists</h1>
                <div>
                {this.props.music.map((item, index) => (
                   <img className="img-responsive" key={index} style={style} src={item} />
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
