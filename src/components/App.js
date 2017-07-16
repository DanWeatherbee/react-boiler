import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import NavLinks from '../containers/site-navbar';
import ContentView from '../components/content-view';
import HeaderView from '../components/header-view';

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
          <div>
                  <NavLinks />

                  <br /><br /><br /><br />
                  <HeaderView />

              <div className="container">
                  <ContentView />
              </div>
          </div>
      </Provider>
    )
  }
}

export default App
