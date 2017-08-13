import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import NavLinks from '../containers/site-navbar';
import HeaderView from '../components/header-view';

import Jquery223 from '../javascripts/lib/jquery-2.2.3.min';
import BootStrap from '../javascripts/bootstrap.min';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
          <div className="content-view">
                  <NavLinks />
          </div>
      </Provider>
    )
  }
}

export default App
