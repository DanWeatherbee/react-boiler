import React, {Component} from 'react';
// Needed for actons add events to /actions/index.js.
// import {bindActionCreators} from 'redux';
// import {navPageSelect} from '../actions/index';
import {connect} from 'react-redux';
import YouTube from '../containers/youtube-container';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import LastFm from '../containers/lastfm';
import Content0 from '../containers/content-containers/content0';
import Content1 from '../containers/content-containers/content1';
import Content2 from '../containers/content-containers/content2';
import Content3 from '../containers/content-containers/content3';
import Content4 from '../containers/content-containers/content4';
import Content5 from '../containers/content-containers/content5';
import Content6 from '../containers/content-containers/content6';
import Content7 from '../containers/content-containers/content7';
import Content8 from '../containers/content-containers/content8';
import HeaderView from '../components/header-view';
import Parallax from '../containers/parallax';
import '../javascripts/lib/jquery-2.2.3.min.js';
import '../javascripts/bootstrap/collapse.js';
/*
 * We need "if(!this.props.links)" because we set state to null by default
 * */
const linkStyle = {
    textTransform: "uppercase"
}


class NavLinks extends Component {

    render() {
            return(

        <Router>
                      <div>
                            <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
                                  <div className="container-fluid">
                                        <div className="navbar-header">
                                              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                              </button>
                                              <div className="navbar-brand">
                                                Dan Weatherbee
                                               </div>
                                        </div>
                                        <div className="collapse navbar-collapse" id="myNavbar">
                                            <ul className="nav navbar-nav">
                                                <li style={linkStyle}><Link to="/">Home</Link></li>
                                                <li style={linkStyle}><Link to="/about">About</Link></li>
                                                <li style={linkStyle}><Link to="/features">Features</Link></li>
                                                <li style={linkStyle}><Link to="/stack">Stack</Link></li>
                                                <li style={linkStyle}><Link to="/api">Music Api</Link></li>
                                            </ul>
                                          </div>

                                    </div>
                            </nav>
                            <br /><br /><br />
                            <div className="container animated flipInX">
                                <Route exact path="/" component={HeaderView}/>
                                <Route path="/about" component={Content0}/>
                                <Route path="/features" component={Parallax}/>
                                <Route path="/stack" component={Content8}/>
                                <Route path="/api" component={YouTube}/>
                          </div>
                  </div>
      </Router>

                );
        }
}
// =============================== TODO call a onclick==>  window reload when navigating to home for api.








/*
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

*/
export default(NavLinks);
