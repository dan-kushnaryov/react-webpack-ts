import { take, fork, put, call } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { images } from '../actions';
import { fetchImageStats } from '../api'

export function* handleStatsRequest(id: number) {
  yield put(images.loadImagesStats({ id }));

  const res = yield call(fetchImageStats, id);

  yield put(images.setImagesStats({
    imageId: id,
    downloads: res.downloads.total,
  }))
}

export default function* watchStatsRequest() {
  while (true) {
      // we get the action here
      const { payload } = yield take(IMAGES.LOAD_SUCCESS);
      const { imagesData: images } = payload;

      for (let i = 0; i < images.length; i++) {
          yield fork(handleStatsRequest, images[i].id);
      }
  }
}