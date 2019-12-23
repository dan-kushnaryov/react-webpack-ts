import { combineReducers } from 'redux';

export default combineReducers({
  imagesData: require('./images/data').default,
  imagesFetching: require('./images/fetching').default,
  imagesPage: require('./images/page').default,
  imagesStats: require('./images/stats').default,
});