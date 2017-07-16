import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {navPageSelect} from '../actions/index'
/*
 * We need "if(!this.props.links)" because we set state to null by default
 * */
const style = {
    textTransform: "uppercase"
}

class NavLinks extends Component {

    renderLinks() {
        return this.props.links.map((link) => {
            return(
                        <a style={style} href={link.page} key={link.page} onClick={() => this.props.navPageSelect(link)} className="btn btn-success">{link.name}</a>
                );
        });
    }
    render() {
            if (!this.props.links) {
            return (<div>no navLinks</div>);
        }
            return(
                    <div className="navbar">{this.renderLinks()}</div>
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