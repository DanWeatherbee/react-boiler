import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {navPageSelect} from '../actions/index';
import '../javascripts/lib/jquery-2.2.3.min.js';
import '../javascripts/bootstrap/collapse.js';

/*
 * We need "if(!this.props.links)" because we set state to null by default
 * */
const linkStyle = {
    textTransform: "uppercase"
}

class NavLinks extends Component {

    renderLinks() {
        return this.props.links.map((link) => {
            return(
                        <li className="links" key={link.page}><a style={linkStyle} href={link.page} onClick={() => this.props.navPageSelect(link)}>{link.name}</a></li>
                );
        });
    }
    render() {
            if (!this.props.links) {
            return (<div>no navLinks</div>);
        }
            return(

                    <nav className="navbar navbar-inverse navbar-fixed-top">
                      <div className="container-fluid">
                        <div className="navbar-header">
                              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                              </button>
                          <a className="navbar-brand" href="#">
                            Dan Weatherbee
                           </a>

                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                {this.renderLinks()}
                            </ul>
                      </div>
                      </div>
                    </nav>

                );
        }
}

// "state.navLinks" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        links: state.navLinks
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(NavLinks);
// Get actions and pass them as props to to NavLinks
//      > now NavLinks has this.props.navPageSelect
function matchDispatchToProps(dispatch){
    return bindActionCreators({navPageSelect: navPageSelect}, dispatch);
}