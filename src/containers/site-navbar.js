import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {navPageSelect} from '../actions/index'
/*
 * We need "if(!this.props.links)" because we set state to null by default
 * */
const linkStyle = {
    textTransform: "uppercase"
}

const navStyle = {
    position: "fixed",
    zIndex: 1,
    width: "100%"
}

class NavLinks extends Component {

    renderLinks() {
        return this.props.links.map((link) => {
            return(
                        <li key={link.page}><a style={linkStyle} href={link.page} onClick={() => this.props.navPageSelect(link)}>{link.name}</a></li>
                );
        });
    }
    render() {
            if (!this.props.links) {
            return (<div>no navLinks</div>);
        }
            return(

                    <nav className="navbar navbar-default" style={navStyle}>
                      <div className="container-fluid">
                        <div className="navbar-header">
                          <a className="navbar-brand" href="#">Dan Weatherbee FENDeveloper</a>
                        </div>
                        <ul className="nav navbar-nav">
                            {this.renderLinks()}
                        </ul>
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