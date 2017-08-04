import $ from '../javascripts/lib/jquery-2.2.3.min';
import { combineReducers } from 'redux';
import NavLinks from '../reducers/reducer-nav-links';
import Content from '../reducers/reducer-content';
import ContentBackGround from '../reducers/reducer-content-images';
import LastFm from '../reducers/reducer-api';
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    navLinks: NavLinks,
    content: Content,
    bground: ContentBackGround,
    api: LastFm
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
