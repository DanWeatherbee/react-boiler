import React, {Component} from 'react';
import {connect} from 'react-redux';
import {music} from '../reducers/reducer-api';
const style = {
  backgroundColor: "#32324a",
  color: "#f3d4cd",
  border: "1em solid",
  borderColor: "white",
  margin: "2em"
}

const articleStyle = {
  backgroundColor: "#494956",
  padding: "5%"
}

const h1Style = {
  textAlign: "left",
  paddingLeft: "1%"
}
class LastFm extends Component {

    render() {

return (
    <article style={style}>
        <h1 style={h1Style}>Top 50 Artists</h1>
                {this.props.music.map((item, index) => (
                    <div className="text-center" style={articleStyle} key={index}><hr /><img src={item[4].small} />&nbsp;&nbsp;&nbsp;&nbsp;<em>{item[1].name}</em><br /><br />Play Count: {item[2].playcount}&nbsp;&nbsp;&nbsp;&nbsp; Listeners: {item[3].listeners}<img className="img-responsive" src={item[0].url} /></div>
                ))}
   </article>
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
