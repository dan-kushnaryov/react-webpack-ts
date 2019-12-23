import { all } from 'redux-saga/effects';

import images from './images'
import stats from './stats'

export default function* rootSaga () {
  yield all([
    images(),
    stats(),
  ]);
}
