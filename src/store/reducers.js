import { combineReducers } from 'redux';
import NavLinks from '../reducers/reducer-nav-links';
import Content from '../reducers/reducer-content';
import ContentBackGround from '../reducers/reducer-content-images';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    navLinks: NavLinks,
    content: Content,
    bground: ContentBackGround
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
