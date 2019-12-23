import { call, put, select } from 'redux-saga/effects'

import { takeEvery } from 'redux-saga/effects'
import { IMAGES } from '../constants'
import { fetchImages } from '../api'
import { images } from '../actions'

const getPage = (state: any) => state.imagesPage

function* handleImagesLoad () {
  const page = yield select(getPage);
  const imagesData: [] = yield call(fetchImages, page);

  yield put(images.setImages({ imagesData, page }));
}

function* refreshImagesLoad () {
  yield put(images.loadImages());
  yield handleImagesLoad();
}

export default function* watch () {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
  yield takeEvery(IMAGES.LOAD_REFRESH, refreshImagesLoad);
}