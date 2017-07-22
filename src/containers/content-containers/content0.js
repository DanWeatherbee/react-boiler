import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bground } from '../../reducers/reducer-content-images';
/*
 * We need "if(!this.props.links)" because we set state to null by default
 * */

class Content0 extends Component {

    render() {
            if (!this.props.content) {
            return (<div>no content</div>);
        }
            return(
            <div>
                <div>{this.props.content[0].text}</div>

                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>

                  <div className="carousel-inner">
                    <div className="item active">
                      <img src={this.props.bground[11].src} alt="" />
                    </div>

                    <div className="item">
                      <img src={this.props.bground[12].src} alt="" />
                    </div>

                    <div className="item">
                      <img src={this.props.bground[14].src} alt="" />
                    </div>
                  </div>

                  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
        </div>
                );
    }
}

// "state.content0" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        content: state.content,
        bground: state.bground
    };
}

export default connect(mapStateToProps)(Content0);