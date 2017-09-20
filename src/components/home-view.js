//Home

import React from 'react';
import { bground } from '../reducers/reducer-content-images';
import {connect} from 'react-redux';
import { api } from '../reducers/reducer-api';
import { styles } from '../reducers/reducer-styles';

class HomeView extends React.Component {

    render () {
        return (
                <div className="container">

                        <div className="row text-center">
                        <a className="btn-lg btn-default links" style={this.props.styles[0].headerView.btnStyle} href="https://github.com/DanWeatherbee">GitHub</a>
                        <h4>Projects:</h4>
                                <div id="projects">

                                    <a className="btn-lg btn-success links" style={this.props.styles[0].headerView.btnStyle} href="https://danweatherbee.github.io/portfolio/">My Portfolio</a>
                                    <a className="btn-lg btn-info links" style={this.props.styles[0].headerView.btnStyle} href="http://kasperdentureclinic.ca/">Kasper Denture Clinic</a>
                                    <a className="btn-lg btn-warning links" style={this.props.styles[0].headerView.btnStyle} href="https://danweatherbee.github.io/PayRoll-App/src/">Payroll App</a>

                                </div>

                                <div className="col-md-2">
                                        <h3>React Redux Mongo</h3>
                                </div>
                                <div className="col-md-8 text-center">
                                        <h1>Modern Web Developement Stack</h1>
                                        <h5>High Performance Responsive Single page App's</h5>
                                </div>
                                <div className="col-md-2">
                                        <h3>Weback Build System</h3>
                                </div>
                                <img className="ipad" style={this.props.styles[0].headerView.imgStyle} src={this.props.bground[7].src} />
                                <img className="ipad" style={this.props.styles[0].headerView.imgStyle2} src={this.props.bground[5].src} />
                                <img className="ipad" style={this.props.styles[0].headerView.imgStyle} src={this.props.bground[13].src} />
                                <br />
                                <img style={this.props.styles[0].headerView.imgStyle} src={this.props.bground[0].src} />
                        </div>
                </div>
                );
        }
}


// "state.bground" is set in store/reducers.js
function mapStateToProps(state) {
    return {
        bground: state.bground,
        api: state.api,
        styles: state.styles
    };
}

export default connect(mapStateToProps)(HomeView);