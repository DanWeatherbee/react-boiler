import React, {Component} from 'react';
// Needed for actons add events to /actions/index.js.
// import {bindActionCreators} from 'redux';
// import {navPageSelect} from '../actions/index';
import {connect} from 'react-redux';



import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import LastFm from '../containers/lastfm';
import Content0 from '../containers/content-containers/content0';
import Content1 from '../containers/content-containers/content1';
import Content2 from '../containers/content-containers/content2';
import YouTube from '../containers/youtube-container';
import HomeView from '../components/home-view';
import Parallax from '../containers/parallax';
import '../javascripts/lib/jquery-2.2.3.min.js';
import '../javascripts/bootstrap/collapse.js';

const linkStyle = {
    textTransform: "uppercase"
}


class NavLinks extends Component {

    render() {
            return(
/*

                              TODO   CREATE A BIO PAGE


*/
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
                                              <div className="navbar-brand links">
                                                <span>Dan Weatherbee Developer</span>
                                               </div>
                                        </div>
                                        <div className="collapse navbar-collapse" id="myNavbar">
                                            <ul className="nav navbar-nav navbar-right">
                                                <li className="links" style={linkStyle}><Link to="/">Home</Link></li>
                                                <li className="links" style={linkStyle}><Link to="/about">About</Link></li>
                                                <li className="links" style={linkStyle}><Link to="/features">Features</Link></li>
                                                <li className="links" style={linkStyle}><Link to="/stack">Stack</Link></li>
                                                <li className="links" style={linkStyle}><Link to="/api">Music Api</Link></li>
                                                <li className="links" style={linkStyle}><Link to="/backend">Back End</Link></li>
                                            </ul>
                                          </div>
                                    </div>
                            </nav>
                            <div className="animated gradient">
                                <Route exact path="/" component={HomeView}/>
                                <Route path="/about" component={Content0}/>
                                <Route path="/features" component={Parallax}/>
                                <Route path="/stack" component={Content1}/>
                                <Route path="/api" component={YouTube}/>
                                <Route path="/backend" component={Content2}/>
                          </div>
                  </div>
      </Router>

                );
        }
}

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
